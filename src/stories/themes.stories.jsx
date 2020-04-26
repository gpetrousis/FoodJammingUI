import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { ColorPaletteItem }  from './helperComponents';

import themes from '../themes';
import Typography from '../components/typography';

const { Heading2 } = Typography;

const ThemeTitle = styled(Heading2)`
  text-transform: capitalize;
`;

const ThemeDiv = styled.div`
  display: flex;
  text-transform: capitalize;
`;

function printColors(themeName, colors) {
  return Object.entries(colors).map(([name, colorCode]) => (
    <ColorPaletteItem key={`${themeName}-${name}`} item={{ name, colorCode }} />
  ));
}

function printTheme(name, colors) {
  return (
    <React.Fragment key={name}>
      <ThemeTitle>{name}</ThemeTitle>
      <ThemeDiv>
        { printColors(name, colors) }
      </ThemeDiv>
    </React.Fragment>
  );
}

storiesOf('Design System', module)
  .add('Themes', () => (
    <React.Fragment>
      {Object.entries(themes).map(([themeName, colors]) => {
        return printTheme(themeName, colors);
      })}
    </React.Fragment>
  ));
