import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { select, withKnobs } from '@storybook/addon-knobs';
import { TypographyItem, CodeBlock, ColoredDiv }  from './helperComponents';
import {
  BrandTitle,
  PageTitle,
  SectionTitle,
  Text,
  SubText
} from '../components/typography';

import themes from '../themes';

const typographyItems = [
  {
    Element: BrandTitle,
    name: 'BrandTitle (60/90)',
    description: 'Large heading <h1> for brand titles or page titles (to be used rarely)'
  },
  {
    Element: PageTitle,
    name: 'PageTitle (48/72)',
    description: 'Heading <h2> for page titles'
  },
  {
    Element: SectionTitle,
    name: 'SectionTitle (32/48)',
    description: 'Small Heading <h3> for sections and post titles'
  },
  {
    Element: Text,
    name: 'Text (20/30)',
    description: 'Main text <p> for most of the text'
  },
  {
    Element: SubText,
    name: 'SubText (16/24)',
    description: 'Sub text <p> for secondary text'
  }
];

const typographyUsage = `
  import {
    BrandTitle,
    PageTitle,
    SectionTitle,
    Text,
    SubText
  } from '../components/typography';

  <BrandTitle>Text</BrandTitle>
  <PageTitle>Text</PageTitle>
  <SectionTitle>Text</SectionTitle>
  <Text>Text</Text>
  <SubText>Text</SubText>
`;

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <ThemeProvider theme={select('Theme', themes, themes.lightTheme, 'GROUP-ID1')}>
      <ColoredDiv>
        <PageTitle>Typography</PageTitle>
        <SectionTitle>Font: Raleway</SectionTitle>
        <SectionTitle>Usage:</SectionTitle>
        <CodeBlock value={typographyUsage} />
        <Text>Override html element using the `as` prop of styled-compoenents</Text>
        <Text>All the elements are using `theme.fontColorMain` for color parameter.</Text>

        {typographyItems.map(style => (
          <TypographyItem key={style.name} item={style} />
        ))}
      </ColoredDiv>
    </ThemeProvider>
  ));