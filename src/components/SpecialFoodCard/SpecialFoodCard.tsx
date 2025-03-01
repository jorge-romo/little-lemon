import type { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { Button } from '../Button';
import { Container, Image, Header, Body, Content, Footer } from './styles';
import { SpecialFoodCardProps } from './types';
import DeliveryIcon from '../../assets/delivery.svg?react';

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({
  imageUrl,
  title,
  price,
  description,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Header>
          <span className='title'>{title}</span>
          <span className='price'>{'$ ' + price}</span>
        </Header>
        <Body>
          <Text lineClamp={5}>{description}</Text>
        </Body>
        <Footer>
          <Button variant='secondary' endIcon={<DeliveryIcon />}>
            Order a delivery
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default SpecialFoodCard;
