import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { Container, Content, Copyright, Column, Image } from './styles';
import restaurant from '../../assets/restaurant.jpg';

const Footer: FC<HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt='Restaurant Food' />
        <Column>
          <h5>Little Lemon</h5>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/#'>Menu</Link>
            </li>
            <li>
              <Link to='/bookings'>Reservations</Link>
            </li>
            <li>
              <Link to='/order'>Order Online</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </Column>
        <Column>
          <h5>Contact</h5>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602 <br />
                USA
              </address>
            </li>
            <li>
              <a href='tel:+11234567890' target='_blank' rel='external'>
                +1 (123) 456-7890
              </a>
            </li>
            <li>
              <a
                href='mailto:contact@littlelemon.com'
                target='_blank'
                rel='external'
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </Column>
        <Column>
          <h5>Social Media</h5>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/littlelemon'
                target='_blank'
                rel='external'
              >
                Twitter
              </a>
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <p>Developed by Jorge</p>
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
