import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  BrandTitle,
  PageTitle,
  SectionTitle,
  Text,
  SubText
} from '../components/typography/Typography';

storiesOf('Typography Test', module)
  .add('with text', () => (
    <React.Fragment>
      <BrandTitle>BrandTitle</BrandTitle>
      <PageTitle>PageTitle</PageTitle>
      <SectionTitle>SectionTitle</SectionTitle>
      <Text>MainText</Text>
      <SubText>SubText</SubText>
    </React.Fragment>
  ))