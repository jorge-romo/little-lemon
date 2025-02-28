import type { FC, HTMLAttributes } from 'react';
import { Text } from '@chakra-ui/react';
import { Button } from '../Button';
import { Container, Image, Header, Body, Content, Footer } from './styles';
import DeliveryIcon from '../../assets/delivery.svg?react';

interface SpecialFoodCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const SpecialFoodCard: FC<SpecialFoodCardProps> = ({
  imageUrl,
  title,
  price,
  description,
  ...props
}) => {
  return (
    <Container {...props}>
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
