import type { FC } from 'react';
import {
  PageContainer,
  ScrollToHashElement,
  SpecialsSection,
  HeroSection,
} from '../../components';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <ScrollToHashElement behavior='smooth' />
      <HeroSection />
      <SpecialsSection id='menu' />
    </PageContainer>
  );
};

export default HomePage;
