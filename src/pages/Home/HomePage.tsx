import type { FC } from 'react';
import {
  PageContainer,
  ScrollToHashElement,
  SpecialsSection,
} from '../../components';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <ScrollToHashElement behavior='smooth' />
      <SpecialsSection id='menu' />
    </PageContainer>
  );
};

export default HomePage;
