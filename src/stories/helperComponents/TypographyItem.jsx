import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Typography from '../../components/typography';

const { Heading3 } = Typography;

const Item = styled.div`
  display: flex;
  width: 100%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: left;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

class TypographyItem extends Component {
  render() {
    const {
      name,
      Element,
      properties: { description, fontSize }
     } = this.props;
    const elementName = `${name} (${fontSize}/${1.5*fontSize})`;
    return (
      <Item>
        <TextDiv>
          <Element>{elementName}</Element>
        </TextDiv>
        <DescriptionDiv>
          <Heading3>{description}</Heading3>
        </DescriptionDiv>
      </Item>
    );
  }
}

TypographyItem.propTypes = {
  name: PropTypes.string.isRequired,
  Element: PropTypes.element.isRequired,
  properties: PropTypes.shape({
    description: PropTypes.string,
    fontSize: PropTypes.number
  }).isRequired
};

export default TypographyItem;