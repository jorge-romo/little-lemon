import { FC, ReactNode, Ref } from 'react';
import { defineStyle, Field, SystemStyleObject } from '@chakra-ui/react';

export interface ChakraFormFieldProps
  extends Omit<Field.RootProps, 'children' | 'label'> {
  label?: string;
  helperText?: string;
  errorText?: string;
  optionalText?: string;
  ref?: Ref<HTMLDivElement>;
  render: (props: { inputStyle: SystemStyleObject }) => ReactNode;
}

const horizontalFieldInputStyle = defineStyle({
  flex: 1,
  width: 'auto',
  minWidth: '9rem',
});

export const ChakraFormField: FC<ChakraFormFieldProps> = ({
  label,
  helperText,
  errorText,
  optionalText,
  orientation,
  gap,
  render,
  ...rest
}) => {
  const helperTextWidth =
    'calc(100% - var(--field-label-width, 80px) - var(--chakra-field-label-gap))';

  return (
    <Field.Root
      {...rest}
      orientation={orientation}
      gap={gap}
      flexWrap={orientation === 'horizontal' ? 'wrap' : undefined}
      css={{ '--chakra-field-label-gap': `spacing.${gap ?? 1.5}` }}
    >
      {label && (
        <Field.Label>
          {label}
          <Field.RequiredIndicator fallback={optionalText} />
        </Field.Label>
      )}
      {render({
        inputStyle:
          orientation === 'horizontal' ? horizontalFieldInputStyle : {},
      })}
      {errorText ? (
        <Field.ErrorText
          marginLeft={orientation === 'horizontal' ? 'auto' : undefined}
          minWidth={orientation === 'horizontal' ? helperTextWidth : undefined}
        >
          {errorText}
        </Field.ErrorText>
      ) : (
        <Field.HelperText
          marginLeft={orientation === 'horizontal' ? 'auto' : undefined}
          minWidth={orientation === 'horizontal' ? helperTextWidth : undefined}
        >
          {helperText}
        </Field.HelperText>
      )}
    </Field.Root>
  );
};
