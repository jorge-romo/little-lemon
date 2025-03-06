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
import { BookingFormData, BookingFormProps, bookingSchema } from './types';
import { Content, Footer, Form, inputStyle } from './styles';

const BookingForm: FC<BookingFormProps> = ({
  data,
  getOccasions,
  getTimeSlots,
  onSubmitForm,
  style,
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, defaultValues },
    trigger,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { guests: 1, ...(data ?? undefined) },
  });
  const registerWithMask = useHookFormMask(register);

  const [occasions, setOccasions] = useState<ChakraSelectOption[]>([]);
  const [timeSlots, setTimeSlots] = useState<ChakraSelectOption[]>([]);
  const [step, setStep] = useState<number>(0);
  const selectedDate = watch('date');

  useEffect(() => {
    getOccasions()
      .then((data) => {
        setOccasions(
          data.map<ChakraSelectOption>((item) => ({
            label: capitalize(item),
            value: item,
          }))
        );
        const defaultValue =
          defaultValues?.occasion && data.includes(defaultValues.occasion)
            ? defaultValues.occasion
            : '';
        setValue('occasion', defaultValue);
      })
      .catch(() => setOccasions([]));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      // Fetch available time slots when the date changes
      getTimeSlots(selectedDate)
        .then((data) => {
          setTimeSlots(
            data.map<ChakraSelectOption>((item) => ({
              label: capitalize(item),
              value: item,
            }))
          );
          const defaultValue =
            defaultValues?.time && data.includes(defaultValues.time)
              ? defaultValues.time
              : '';
          setValue('time', defaultValue);
        })
        .catch(() => setTimeSlots([]));
    }
  }, [selectedDate, setValue]);

  const submitHandler: SubmitHandler<BookingFormData> = (data, event) => {
    onSubmitForm(data, event);
  };

  const showPicker: MouseEventHandler<HTMLInputElement> = (e) => {
    (e.target as HTMLInputElement).showPicker();
  };

  const nextStep: MouseEventHandler<HTMLButtonElement> = () => {
    trigger(['date', 'time', 'guests', 'occasion']).then((isValid) => {
      if (isValid) {
        setStep(1);
      }
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
      <Content>
        <ChakraFormField
          orientation='horizontal'
          label='Date'
          required
          invalid={!!errors.date}
          errorText={errors.date?.message}
          style={{ display: step !== 0 ? 'none' : undefined }}
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
          style={{ display: step !== 0 ? 'none' : undefined }}
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
                  options={timeSlots}
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
          style={{ display: step !== 0 ? 'none' : undefined }}
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
          style={{ display: step !== 0 ? 'none' : undefined }}
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
                  options={occasions}
                  css={{ ...inputStyle, ...formInputStyle }}
                />
              )}
            />
          )}
        />
        <Group
          grow
          alignItems='flex-start'
          style={{ display: step !== 1 ? 'none' : undefined }}
        >
          <ChakraFormField
            orientation='vertical'
            label='First Name'
            required
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}
            render={({ inputStyle: formInputStyle }) => (
              <Input
                {...register('firstName')}
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
          style={{ display: step !== 1 ? 'none' : undefined }}
          render={({ inputStyle: formInputStyle }) => (
            <Input
              {...registerWithMask('phone', phoneMask)}
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Email'
          invalid={!!errors.email}
          errorText={errors.email?.message}
          style={{ display: step !== 1 ? 'none' : undefined }}
          render={({ inputStyle: formInputStyle }) => (
            <Input
              {...register('email')}
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
        <ChakraFormField
          orientation='horizontal'
          label='Special Request'
          invalid={!!errors.specialRequest}
          errorText={errors.specialRequest?.message}
          style={{ display: step !== 1 ? 'none' : undefined }}
          render={({ inputStyle: formInputStyle }) => (
            <Textarea
              {...register('specialRequest')}
              rows={3}
              css={{ ...inputStyle, ...formInputStyle }}
            />
          )}
        />
      </Content>
      <Footer>
        <Button type='button' onClick={prevStep} disabled={step !== 1}>
          Back
        </Button>
        <Button
          type='button'
          onClick={nextStep}
          style={{ display: step !== 0 ? 'none' : undefined }}
        >
          Next
        </Button>
        <Button
          type='submit'
          onClick={nextStep}
          style={{ display: step !== 1 ? 'none' : undefined }}
        >
          Reserve
        </Button>
      </Footer>
    </Form>
  );
};

export default BookingForm;
