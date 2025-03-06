import { FC, ReactNode, Ref } from 'react';
import { HStack, IconButton, NumberInput } from '@chakra-ui/react';
import { LuMinus, LuPlus } from 'react-icons/lu';

const ChakraStepperInputDecrementTrigger: FC<
  NumberInput.DecrementTriggerProps & { ref?: Ref<HTMLButtonElement> }
> = ({ ref, ...rest }) => {
  return (
    <NumberInput.DecrementTrigger {...rest} asChild ref={ref}>
      <IconButton variant='outline' size='sm'>
        <LuMinus />
      </IconButton>
    </NumberInput.DecrementTrigger>
  );
};

const ChakraStepperInputIncrementTrigger: FC<
  NumberInput.IncrementTriggerProps & { ref?: Ref<HTMLButtonElement> }
> = ({ ref, ...rest }) => {
  return (
    <NumberInput.IncrementTrigger {...rest} asChild ref={ref}>
      <IconButton variant='outline' size='sm'>
        <LuPlus />
      </IconButton>
    </NumberInput.IncrementTrigger>
  );
};

export interface ChakraStepperInputProps extends NumberInput.RootProps {
  label?: ReactNode;
}

export const ChakraStepperInput: FC<
  ChakraStepperInputProps & { ref?: Ref<HTMLDivElement> }
> = ({ label, value, ref, ...rest }) => {
  return (
    <NumberInput.Root {...rest} unstyled ref={ref}>
      {label && <NumberInput.Label>{label}</NumberInput.Label>}
      <HStack gap='2'>
        <ChakraStepperInputDecrementTrigger />
        <NumberInput.Input
          background='transparent'
          border='none !important'
          outline='none !important'
          textAlign='center'
          fontSize='2xl'
          minW='3ch'
          maxW='3ch'
          min={rest.min}
          max={rest.max}
          readOnly
        />
        <ChakraStepperInputIncrementTrigger />
      </HStack>
    </NumberInput.Root>
  );
};
