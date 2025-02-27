import React from 'react';
import { PageContainer } from '../../components';
import { Container, Heading, Text, TextContainer } from './styles';

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Heading>404</Heading>
        <TextContainer>
          <Text>This page could not be found.</Text>
        </TextContainer>
      </Container>
    </PageContainer>
  );
};

export default NotFoundPage;
