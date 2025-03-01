import type { FC } from 'react';
import {
  PageContainer,
  ScrollToHashElement,
  SpecialsSection,
  HeroSection,
  TestimonialsSection,
  AboutSection,
} from '../../components';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <ScrollToHashElement behavior='smooth' />
      <HeroSection />
      <SpecialsSection id='menu' />
      <TestimonialsSection />
      <AboutSection id='about' />
    </PageContainer>
  );
};

export default HomePage;
