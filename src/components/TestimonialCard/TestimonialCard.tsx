import type { FC } from 'react';
import { Text, RatingGroup } from '@chakra-ui/react';
import { Blockquote, Container, Customer } from './styles';
import { starMap, TestimonialCardProps } from './types';

const TestimonialCard: FC<TestimonialCardProps> = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <RatingGroup.Root
        colorPalette='yellow'
        readOnly
        count={rating}
        defaultValue={rating}
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          {starMap[rating].split('').map((item, index) => (
            <RatingGroup.Item
              key={index}
              index={index + 1}
              minW='6'
              fontSize='1.5rem'
              color='#fde047'
            >
              {item}
            </RatingGroup.Item>
          ))}
        </RatingGroup.Control>
      </RatingGroup.Root>
      <Customer>
        <img src={customerImg} alt={customerName} />
        <span>{customerName}</span>
      </Customer>
      <Blockquote>
        <Text as='p' quotes='auto'>
          {testimonial}
        </Text>
      </Blockquote>
    </Container>
  );
};

export default TestimonialCard;
