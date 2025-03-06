import { FC, useCallback, useMemo } from 'react';
import {
  Select,
  createListCollection,
  Portal,
  CloseButton,
} from '@chakra-ui/react';
import styled from 'styled-components';

const SelectTrigger = styled(Select.Trigger)`
  &&:is([aria-expanded='true'], [data-expanded], [data-state='expanded']) {
    outline-offset: 0px;
    outline-width: var(--focus-ring-width, 1px);
    outline-color: var(--focus-ring-color);
    outline-style: var(--focus-ring-style, solid);
    border-color: var(--focus-ring-color);
  }
`;

export type ChakraSelectOption = {
  label: string;
  value: string;
};

export type ChakraSelectProps<T extends unknown = any> = Omit<
  Select.RootProps<T>,
  'collection' | 'focusRing' | 'onValueChange' | 'value' | 'multiple'
> & {
  options: ChakraSelectOption[];
  clearable?: boolean;
} & (
    | {
        multiple: true;
        value: string[];
        onValueChange: <T>(value: string[], item: T[]) => void;
      }
    | {
        multiple?: false | undefined;
        value: string;
        onValueChange: <T>(value: string, item: T) => void;
      }
  );

export const ChakraSelect: FC<ChakraSelectProps> = ({
  options,
  multiple,
  positioning,
  value,
  asChild,
  clearable,
  onValueChange,
  ...rest
}) => {
  const collection = useMemo(
    () => createListCollection({ items: options }),
    [options]
  );

  const handleValueChange = useCallback<
    Exclude<Select.RootProps<ChakraSelectOption>['onValueChange'], undefined>
  >(
    (e) => {
      if (!onValueChange) return;

      if (multiple) {
        onValueChange(e.value, e.items);
      } else {
        onValueChange(e.value[0], e.items[0]);
      }
    },
    [multiple, onValueChange]
  );

  const selected: string[] = useMemo(() => {
    if (multiple) {
      return value || [];
    }

    return value !== undefined ? [value] : [];
  }, [multiple, value]);

  return (
    <Select.Root
      {...rest}
      multiple={multiple}
      focusRing='mixed'
      positioning={{ sameWidth: true, ...positioning }}
      asChild={asChild}
      collection={collection}
      value={selected}
      onValueChange={handleValueChange}
    >
      {!asChild && <Select.HiddenSelect />}
      <Select.Control>
        <SelectTrigger>
          <Select.ValueText>
            <Select.Context>
              {(select) => {
                const items = select.selectedItems;
                if (items.length === 0) return ''; // props.placeholder
                if (items.length === 1)
                  return select.collection.stringifyItem(items[0]);
                return `${items.length} selected`;
              }}
            </Select.Context>
          </Select.ValueText>
        </SelectTrigger>
        <Select.IndicatorGroup>
          {clearable && (
            <Select.ClearTrigger asChild>
              <CloseButton
                size='xs'
                variant='plain'
                focusVisibleRing='inside'
                focusRingWidth='2px'
                pointerEvents='auto'
              />
            </Select.ClearTrigger>
          )}
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item.value} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
