import React from 'react';
import Card from 'components/Card';

import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  width: 768px;
  margin: 0 auto;
  padding: 16px 0 48px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTemplate: FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <Card
        layout="vertical"
        title="CardTitle"
        label="CardLabel"
        hilightText="hilight"
        crossoutText="crossout"
        contents="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        consequatur vero veniam aperiam nulla soluta nisi nam deserunt cumque
        distinctio. Quisquam animi sapiente laboriosam et debitis ipsam laborum
        ad fugiat."
      />
      <Card
        layout="horizontal"
        title="CardTitle"
        label="CardLabel"
        hilightText="hilight"
        crossoutText="crossout"
        contents="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        consequatur vero veniam aperiam nulla soluta nisi nam deserunt cumque
        distinctio. Quisquam animi sapiente laboriosam et debitis ipsam laborum
        ad fugiat."
      />
    </Container>
  );
};

export default CardTemplate;
