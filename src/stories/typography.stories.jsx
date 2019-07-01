import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { select, withKnobs } from '@storybook/addon-knobs';

import themes from '../themes';

import {
  BrandTitle,
  PageTitle,
  SectionTitle,
  Text,
  SubText
} from '../components/typography/Typography';

import TypographyItem from './components/TypographyItem'

const typographyItems = [
  { 
    Element: BrandTitle,
    name: 'BrandTitle (60/90)',
    description: 'Large heading <h1> for brand titles or page titles (to be used rarely)',
    usage: '<BrandTitle>Text</BrandTitle>' 
  },
  {
    Element: PageTitle,
    name: 'PageTitle (48/72)',
    description: 'Heading <h2> for page titles',
    usage: '<PageTitle>Text</PageTitle>' 
  },
  {
    Element: SectionTitle,
    name: 'SectionTitle (32/48)',
    description: 'Small Heading <h3> for sections and post titles',
    usage: '<SectionTitle>Text</SectionTitle>' 
  },
  {
    Element: Text,
    name: 'Text (20/30)',
    description: 'Main text <p> for most of the text',
    usage: '<Text>Text</Text>' 
  },
  {
    Element: SubText,
    name: 'SubText (16/24)',
    description: 'Sub text <p> for secondary text',
    usage: '<SubText>Text</SubText>' 
  }
]

//TODO: Add background to themes and to the typography page(or globally in storybook)
//TODO: Add code block
//TODO: Fix the duplicate component folders
//TODO: Add no trailing spaces in linting rules
//TODO: Decide on commit message format

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <ThemeProvider theme={select('Theme', themes, themes.lightTheme, 'GROUP-ID1')}>
      <React.Fragment>
        <PageTitle>Typography</PageTitle>
        <Text>Font: Raleway</Text>
        <Text>Usage: (TODO add sample code)</Text>
        <Text>Override html element using the `as` prop of styled-compoenents</Text>
        <Text>All the elements are using `theme.fontColorMain` for color parameter.</Text>

        {typographyItems.map(style => (
          <TypographyItem key={style.name} item={style} />
        ))}
      </React.Fragment>
    </ThemeProvider>
  ));