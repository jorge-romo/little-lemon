import { FC, Ref } from 'react';
import { Field } from '@chakra-ui/react';

export interface ChakraFormFieldProps extends Field.RootProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  optionalText?: boolean;
  ref?: Ref<HTMLDivElement>;
}

const ChakraFormField: FC<ChakraFormFieldProps> = ({
  label,
  helperText,
  errorText,
  optionalText,
  invalid,
  required,
  children,
  ref,
  ...rest
}) => {
  return (
    <Field.Root {...rest} ref={ref} invalid={invalid} required={required}>
      {label && (
        <Field.Label>
          {label}
          <Field.RequiredIndicator fallback={optionalText} />
        </Field.Label>
      )}
      {children}
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
      {errorText && <Field.ErrorText>{errorText}</Field.ErrorText>}
    </Field.Root>
  );
};

export default ChakraFormField;
