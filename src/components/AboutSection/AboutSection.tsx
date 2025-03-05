import type { ComponentPropsWithRef, FC } from 'react';
import { Container, Content, Image } from './styles';
import showCase1 from '../../assets/restaurant-show-1.jpg';
import showCase2 from '../../assets/restaurant-show-2.jpg';

const AboutSection: FC<ComponentPropsWithRef<'section'>> = (props) => {
  return (
    <Container {...props}>
      <div className='section-inner'>
        <Content>
          <h2 className='name'>Little Lemon</h2>
          <p className='location'>Chicago</p>
          <p className='description'>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
            <br />
            To craft the menu, Mario relies on family recipes and his experience
            as a chef in Italy. Adrian does all the marketing for the restaurant
            and led the effort to expand the menu beyond classic Italian to
            incorporate additional cuisines from the Mediterranean region.
          </p>
        </Content>
        <Image>
          <img src={showCase1} alt='Mario and Adrian' />
          <img src={showCase2} alt='Mario and Adrian' />
        </Image>
      </div>
    </Container>
  );
};

export default AboutSection;
