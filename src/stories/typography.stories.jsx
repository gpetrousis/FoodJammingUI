import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { select, withKnobs } from '@storybook/addon-knobs';

import {
  BrandTitle,
  PageTitle,
  SectionTitle,
  Text,
  SubText
} from '../components/typography/Typography';
import themes from '../themes';

const defaultValue = themes.lightTheme;
const groupId = 'GROUP-ID1';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <ThemeProvider theme={select('Theme', themes, defaultValue, groupId)}>
      <React.Fragment>
        <BrandTitle>BrandTitle</BrandTitle>
        <PageTitle>PageTitle</PageTitle>
        <SectionTitle>SectionTitle</SectionTitle>
        <Text>MainText</Text>
        <SubText>SubText</SubText>
      </React.Fragment>
    </ThemeProvider>
  ));