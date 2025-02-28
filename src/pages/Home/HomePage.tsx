import type { FC } from 'react';
import {
  PageContainer,
  ScrollToHashElement,
  SpecialsSection,
  HeroSection,
  TestimonialsSection,
} from '../../components';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <ScrollToHashElement behavior='smooth' />
      <HeroSection />
      <SpecialsSection id='menu' />
      <TestimonialsSection />
    </PageContainer>
  );
};

export default HomePage;
