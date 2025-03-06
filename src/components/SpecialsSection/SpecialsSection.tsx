import type { FC, ComponentPropsWithRef } from 'react';
import { Link } from 'react-router';
import { Button } from '../Button';
import { SpecialFoodCard } from '../SpecialFoodCard';
import {
  Container,
  Head,
  Item,
  Items,
  ItemsContainer,
  TagGroup,
} from './styles';
import bruschetta from '../../assets/bruschetta.svg';
import greekSalad from '../../assets/greek-salad.jpg';
import lemonDessert from '../../assets/lemon-dessert.jpg';

const tags = ['Lunch', 'Mains', 'Desserts', 'A La Carte', 'Specials'];

const SpecialsSection: FC<ComponentPropsWithRef<'div'>> = (props) => {
  return (
    <Container {...props}>
      <div className='section-inner'>
        <Head>
          <div className='head-content'>
            <h1>
              <span className='desktop-only heading-1'>
                This weeks specials!
              </span>
              <span className='touchscreen-only subtitle'>
                Order For Delivery!
              </span>
            </h1>
            <TagGroup className='touchscreen-only'>
              {tags.map((tag, index) => (
                <Button key={index} variant='primary' color='light_grey'>
                  {tag}
                </Button>
              ))}
            </TagGroup>
          </div>
          <Button as={Link} to='/menu' size='lg' className='desktop-only'>
            Online Menu
          </Button>
        </Head>
        <ItemsContainer>
          <Items>
            <Item>
              <SpecialFoodCard
                imageUrl={greekSalad}
                title='Greek Salad'
                price={12.99}
                description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
              />
            </Item>
            <Item>
              <SpecialFoodCard
                imageUrl={bruschetta}
                title='Bruschetta'
                price={7.99}
                description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
              />
            </Item>
            <Item>
              <SpecialFoodCard
                imageUrl={lemonDessert}
                title='Lemon Dessert'
                price={6.99}
                description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
              />
            </Item>
          </Items>
        </ItemsContainer>
      </div>
    </Container>
  );
};

export default SpecialsSection;
