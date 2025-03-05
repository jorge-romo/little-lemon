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

const ChakraStepperInput: FC<
  ChakraStepperInputProps & { ref?: Ref<HTMLDivElement> }
> = ({ label, ref, ...rest }) => {
  return (
    <NumberInput.Root {...rest} unstyled ref={ref}>
      {label && <NumberInput.Label>{label}</NumberInput.Label>}
      <HStack gap='2'>
        <ChakraStepperInputDecrementTrigger />
        <NumberInput.ValueText textAlign='center' fontSize='lg' minW='3ch' />
        <ChakraStepperInputIncrementTrigger />
      </HStack>
    </NumberInput.Root>
  );
};

export default ChakraStepperInput;
