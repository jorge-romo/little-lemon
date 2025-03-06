import {
  AllHTMLAttributes,
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from 'react';
import { Content } from './styles';

export interface StepContentProps extends HTMLAttributes<HTMLDivElement> {
  fields: string[][];
  currentStepIndex: number;
  children?: ReactNode;
}

export const StepContent: FC<StepContentProps> = ({
  fields,
  currentStepIndex,
  children,
  ...rest
}) => {
  const elements = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const props = child.props as AllHTMLAttributes<HTMLElement> & {
      'data-name'?: string;
      'data-step-index'?: string;
    };
    const names = props['data-name']?.split('|').filter((v) => !!v);
    const stepIndex = Number(props['data-step-index']);

    if (
      (names?.length &&
        names.some((v) => !fields[currentStepIndex].includes(v))) ||
      (Number.isFinite(stepIndex) && currentStepIndex !== stepIndex)
    ) {
      const element = cloneElement(child, {
        style: { ...props.style, display: 'none' },
      } as any);

      return element;
    }

    return child;
  });

  return <Content {...rest}>{elements}</Content>;
};
