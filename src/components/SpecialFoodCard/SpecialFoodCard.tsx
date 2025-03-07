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
          <span className='price button-text desktop-only'>{'$ ' + price}</span>
        </Header>
        <Body>
          <Text className='desktop-only' lineClamp={5}>
            {description}
          </Text>
          <Text className='touchscreen-only' lineClamp={2}>
            {description}
          </Text>
        </Body>
        <Footer>
          <p className='price button-text touchscreen-only'>{'$ ' + price}</p>
          <Button
            variant='primary'
            color='tertiary'
            endIcon={<DeliveryIcon />}
            size={{ xs: 'sm', lg: 'md' }}
          >
            <span className='desktop-only'>Order a delivery</span>
            <span className='touchscreen-only'>Order</span>
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default SpecialFoodCard;
