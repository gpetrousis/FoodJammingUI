import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { select, withKnobs } from '@storybook/addon-knobs';
import { TypographyItem, CodeBlock, ColoredDiv }  from './helperComponents';
import Typography from '../components/typography';
import themes from '../themes';
import TypographyStyles from '../components/typography/typographyStyles';

const { Heading1, Heading2, Heading3 } = Typography;

let typographyUsage = `
import Typography from '../components/typography';
const {
    ${Object.keys(TypographyStyles)}
  } = Typography;

`;

Object.keys(TypographyStyles).forEach(style => {
    typographyUsage = `${typographyUsage}<${style}>Text</${style}>\n`;
});

storiesOf('Design System', module)
  .addDecorator(withKnobs)
  .add('Typography', () => (
    <ThemeProvider theme={select('Theme', themes, themes.light, 'GROUP-ID1')}>
      <ColoredDiv>
        <Heading1>Typography</Heading1>
        <Heading2>Font: Raleway</Heading2>
        <Heading2>Usage:</Heading2>
        <CodeBlock value={typographyUsage} />
        <Heading3>Override html element using the `as` prop of styled-compoenents.</Heading3>
        <Heading3>All the elements are using `theme.secondary` for color parameter.</Heading3>

        {Object.entries(TypographyStyles).map(([style, properties]) => (
          <TypographyItem key={style} name={style} Element={Typography[style]} properties={properties} />
        ))}
      </ColoredDiv>
    </ThemeProvider>
  ));