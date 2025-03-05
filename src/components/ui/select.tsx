import { FC, useMemo } from 'react';
import { Select, createListCollection, Portal } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

export type ChakraSelectProps = Select.RootProps & {
  options: {
    label: string;
    value: string | number | symbol | bigint | boolean | null | undefined;
  }[];
};

const ChakraSelect: FC<ChakraSelectProps> = ({
  options,
  multiple,
  positioning,
  value: selected,
  onValueChange,
  ...rest
}) => {
  const collection = useMemo(
    () => createListCollection({ items: options }),
    [options]
  );

  // const handleValueChange = useCallback<
  //   Exclude<ChakraSelect.RootProps['onValueChange'], undefined>
  // >(
  //   (e) => {
  //     if (!onValueChange) return;

  //     if (multiple) {
  //       onValueChange(e.value);
  //     } else {
  //       onValueChange(e.value[0]);
  //     }
  //   },
  //   [multiple, onValueChange]
  // );

  // const selectedValue: string[] = useMemo(() => {
  //   if (multiple) {
  //     return selected || [];
  //   }

  //   return selected !== undefined ? [selected] : [];
  // }, [multiple, selected]);

  return (
    <Select.Root
      {...rest}
      multiple={multiple}
      focusRing='mixed'
      positioning={{ sameWidth: true, ...positioning }}
      collection={collection}
      value={selected}
      onValueChange={onValueChange}
    >
      <Select.HiddenSelect />
      <Select.Trigger>
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
        <FaChevronDown />
      </Select.Trigger>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item.value} key={String(item.value)}>
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

export default ChakraSelect;
