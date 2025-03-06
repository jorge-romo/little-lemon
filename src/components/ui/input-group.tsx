import { FC, Ref, cloneElement, Children } from 'react';
import type { BoxProps, InputElementProps } from '@chakra-ui/react';
import { Group, InputElement } from '@chakra-ui/react';

export interface ChakraInputGroupProps extends BoxProps {
  startElementProps?: InputElementProps;
  endElementProps?: InputElementProps;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactElement<InputElementProps>;
  startOffset?: InputElementProps['paddingStart'];
  endOffset?: InputElementProps['paddingEnd'];
  ref?: Ref<HTMLDivElement>;
}

export const ChakraInputGroup: FC<ChakraInputGroupProps> = ({
  startElement,
  startElementProps,
  endElement,
  endElementProps,
  children,
  startOffset = '6px',
  endOffset = '6px',
  ref,
  ...rest
}) => {
  const child = Children.only<React.ReactElement<InputElementProps>>(children);

  return (
    <Group ref={ref} {...rest}>
      {startElement && (
        <InputElement pointerEvents='none' {...startElementProps}>
          {startElement}
        </InputElement>
      )}
      {cloneElement(child, {
        ...(startElement && {
          ps: `calc(var(--input-height) - ${startOffset})`,
        }),
        ...(endElement && { pe: `calc(var(--input-height) - ${endOffset})` }),
        ...children.props,
      })}
      {endElement && (
        <InputElement placement='end' {...endElementProps}>
          {endElement}
        </InputElement>
      )}
    </Group>
  );
};
