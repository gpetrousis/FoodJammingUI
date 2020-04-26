import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../components/typography';

const { Heading3 } = Typography;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 128px;
  padding: 0px 16px;
`;

const TextDiv = styled.div`
  width: 100%;
  text-align: left;
`;

const colorDiv = colorCode => styled.div`
	border-radius: 100%;
  background-color: ${colorCode};
  height: 128px;
  width: 128px;
  margin: auto;
`;

class ColorPaletteItem extends Component {
  render() {
    const {
      item: { name, colorCode }
     } = this.props;
    const ColorDiv = colorDiv(colorCode);
    return (
      <Item>
        <ColorDiv />
        <TextDiv>
          <Heading3>{name}</Heading3>
          <Heading3>{colorCode}</Heading3>
        </TextDiv>
      </Item>
    );
  }
}

ColorPaletteItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    colorCode: PropTypes.string
  }).isRequired
};

export default ColorPaletteItem;