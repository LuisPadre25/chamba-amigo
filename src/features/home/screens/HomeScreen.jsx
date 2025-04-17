import React from 'react';
import { Container, StyledText, Button, Card, ThemeSwitch } from '../../../shared/components/BaseComponents';

const HomeScreen = () => {
  return (
    <Container>
      <ThemeSwitch />
      <Card>
        <StyledText style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          ¡Bienvenido a Chamba Amigos!
        </StyledText>
        <StyledText style={{ marginBottom: 16 }}>
          Tu plataforma de trabajo colaborativo
        </StyledText>
        <Button>
          <StyledText style={{ color: '#fff' }}>Comenzar</StyledText>
        </Button>
      </Card>
    </Container>
  );
};

export default HomeScreen; 