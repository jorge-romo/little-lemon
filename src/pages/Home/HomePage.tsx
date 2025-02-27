import React from 'react';
import { PageContainer, ScrollToHashElement } from '../../components';

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <ScrollToHashElement behavior='smooth' />
      <section
        style={{ background: 'blue', minHeight: '100vh', width: '100%' }}
      ></section>
      <section
        id='about'
        style={{ background: 'red', minHeight: '100vh', width: '100%' }}
      ></section>
      <section
        id='menu'
        style={{ background: 'green', minHeight: '100vh', width: '100%' }}
      ></section>
    </PageContainer>
  );
};

export default HomePage;
