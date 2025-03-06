import { useState, useEffect, FC, MouseEventHandler } from 'react';
import { Input, Group, Textarea } from '@chakra-ui/react';
import { useHookFormMask } from 'use-mask-input';
import { FaCalendarDay as FaCalendar } from 'react-icons/fa';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ChakraFormField,
  ChakraInputGroup,
  ChakraSelect,
  ChakraSelectOption,
  ChakraStepperInput,
} from '../ui';
import { Button } from '../Button';
import { capitalize } from '../../utils/string';
import { phoneMask } from '../../utils/type';
import {
  BookingFormData,
  BookingFormProps,
  DynamicDropdownValues,
  getBookingSchema,
} from './types';
import { Footer, Form, inputStyle } from './styles';
import { StepContent } from './StepContent';

const fields: (keyof BookingFormData)[][] = [
  ['date', 'time', 'guests', 'occasion', 'specialRequest'],
  ['firstName', 'lastName', 'phone', 'email'],
];

const BookingForm: FC<BookingFormProps> = ({
  defaultValues: defaultFormData,
  getOccasions,
  getTimeSlots,
  onSubmitForm,
  style,
  ...rest
}) => {
  const [selectValues, setSelectValues] = useState<
    DynamicDropdownValues<ChakraSelectOption>
  >({ occasions: [], timeSlots: [] });
  const [step, setStep] = useState<number>(0);
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, defaultValues },
    trigger,
    resetField,
  } = useForm<BookingFormData, typeof selectValues>({
    context: selectValues,
    resolver: (values, context, options) => {
      const param = Object.fromEntries(
        Object.entries(context ?? {}).map(([key, value]) => [
          key,
          value.map((item) => item.value),
        ])
      ) as DynamicDropdownValues<string>;
      const createResolver = zodResolver(getBookingSchema(param));
      return createResolver(values, context, options);
    },
    defaultValues: {
      guests: 1,
      time: '00:30',
      ...(defaultFormData ?? undefined),
    },
  });
  const registerWithMask = useHookFormMask(register);
  const selectedDate = watch('date');

  useEffect(() => {
    getOccasions()
      .then((data) => {
        setSelectValues((old) => ({
          ...old,
          occasions: data.map<ChakraSelectOption>((item) => ({
            label: capitalize(item),
            value: item,
          })),
        }));
      })
      .catch(() =>
        setSelectValues((old) => ({
          ...old,
          occasions: [],
        }))
      )
      .finally(() => {
        resetField('time');
      });
  }, []);

  useEffect(() => {
    if (selectedDate) {
      // Fetch available time slots when the date changes
      getTimeSlots(selectedDate)
        .then((data) => {
          setSelectValues((old) => ({
            ...old,
            timeSlots: data.map<ChakraSelectOption>((item) => ({
              label: capitalize(item),
              value: item,
            })),
          }));
        })
        .catch(() =>
          setSelectValues((old) => ({
            ...old,
            timeSlots: [],
          }))
        )
        .finally(() => {
          resetField('time');
        });
    }
  }, [selectedDate, setValue]);

  const submitHandler: SubmitHandler<BookingFormData> = (data, event) => {
    onSubmitForm(data, event);
  };

  const showPicker: MouseEventHandler<HTMLInputElement> = (e) => {
    (e.target as HTMLInputElement).showPicker();
  };

  const nextStep: MouseEventHandler<HTMLButtonElement> = () => {
    trigger(fields[step]).then((isValid) => {
      if (!isValid) return;

      setStep(1);
    });
  };

  const prevStep: MouseEventHandler<HTMLButtonElement> = () => {
    setStep(0);
  };

  return (
    <Form
      {...rest}
      onSubmit={handleSubmit(submitHandler)}
      noValidate
      style={{ ...style, '--field-label-width': '8.25rem' } as any}
    >
      <StepContent fields={fields} currentStepIndex={step}>
        {/* Step 1 fields */}
        <ChakraFormField
          orientation='horizontal'
          label='Date'
          required
          invalid={!!errors.date}
          errorText={errors.date?.message}
          data-name='date'
          render={({ inputStyle: formInputStyle }) => (
            <ChakraInputGroup flex='1' endElement={<FaCalendar />}>
              <Input
                type='date'
                {...register('date')}
                css={{ ...inputStyle, ...formInputStyle }}
                onClick={showPicker}
                data-testid='date-input'
              />
            </ChakraInputGroup>
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Time'
          required
          invalid={!!errors.time}
          errorText={errors.time?.message}
          disabled={!selectedDate}
          data-name='time'
          render={({ inputStyle: formInputStyle }) => (
            <Controller
              name='time'
              control={control}
              render={({ field }) => (
                <ChakraSelect
                  name={field.name}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                  onInteractOutside={() => field.onBlur()}
                  options={selectValues.timeSlots}
                  data-testid='time-input'
                  css={{ ...inputStyle, ...formInputStyle }}
                />
              )}
            />
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Number of Guests'
          required
          invalid={!!errors.guests}
          errorText={errors.guests?.message}
          data-name='guests'
          render={({ inputStyle: formInputStyle }) => (
            <Controller
              name='guests'
              control={control}
              render={({ field }) => (
                <ChakraStepperInput
                  name={field.name}
                  min={1}
                  max={20}
                  value={String(field.value)}
                  defaultValue={String(defaultValues?.guests ?? 1)}
                  onValueChange={({ valueAsNumber }) =>
                    field.onChange(valueAsNumber || 1)
                  }
                  onBlur={() => field.onBlur()}
                  data-testid='guests-input'
                  css={{ ...inputStyle, ...formInputStyle }}
                />
              )}
            />
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Occasion'
          invalid={!!errors.occasion}
          errorText={errors.occasion?.message}
          data-name='occasion'
          render={({ inputStyle: formInputStyle }) => (
            <Controller
              name='occasion'
              control={control}
              render={({ field }) => (
                <ChakraSelect
                  name={field.name}
                  value={field.value ?? ''}
                  onValueChange={(value) => field.onChange(value)}
                  onInteractOutside={() => field.onBlur()}
                  options={selectValues.occasions}
                  data-testid='occasion-input'
                  css={{ ...inputStyle, ...formInputStyle }}
                />
              )}
            />
          )}
        />
        <ChakraFormField
          orientation='vertical'
          label='Special Request'
          invalid={!!errors.specialRequest}
          errorText={errors.specialRequest?.message}
          data-name='specialRequest'
          render={({ inputStyle: formInputStyle }) => (
            <Textarea
              {...register('specialRequest')}
              rows={3}
              data-testid='special-request-input'
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
        {/* Step 2 fields */}
        <h5 data-step-index='1'>Contact Information</h5>
        <Group grow alignItems='flex-start' data-name='firstName|lastName'>
          <ChakraFormField
            orientation='vertical'
            label='First Name'
            required
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}
            render={({ inputStyle: formInputStyle }) => (
              <Input
                {...register('firstName')}
                data-testid='first-name-input'
                css={{ ...inputStyle, ...formInputStyle }}
              />
            )}
          />
          <ChakraFormField
            orientation='vertical'
            label='Last Name'
            invalid={!!errors.lastName}
            errorText={errors.lastName?.message}
            render={({ inputStyle: formInputStyle }) => (
              <Input
                {...register('lastName')}
                data-testid='last-name-input'
                css={{ ...inputStyle, ...formInputStyle }}
              />
            )}
          />
        </Group>
        <ChakraFormField
          orientation='horizontal'
          label='Phone Number'
          invalid={!!errors.phone}
          errorText={errors.phone?.message}
          data-name='phone'
          render={({ inputStyle: formInputStyle }) => (
            <Input
              {...registerWithMask('phone', phoneMask)}
              data-testid='phone-input'
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Email'
          required
          invalid={!!errors.email}
          errorText={errors.email?.message}
          data-name='email'
          render={({ inputStyle: formInputStyle }) => (
            <Input
              {...register('email')}
              data-testid='email-input'
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
      </StepContent>
      <Footer>
        <Button
          type='button'
          onClick={prevStep}
          disabled={step !== 1}
          data-testid='back-button'
        >
          Back
        </Button>
        <Button
          type='button'
          onClick={nextStep}
          data-testid='next-button'
          style={{ display: step !== 0 ? 'none' : undefined }}
        >
          Next
        </Button>
        <Button
          type='submit'
          onClick={nextStep}
          data-testid='submit-button'
          style={{ display: step !== 1 ? 'none' : undefined }}
        >
          Reserve
        </Button>
      </Footer>
    </Form>
  );
};

export default BookingForm;
