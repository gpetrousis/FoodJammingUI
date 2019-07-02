import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../../components/typography'

const Item = styled.div`
  display: flex;
  width: 100%;
`;
  // margin-bottom: 32px;

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
      item: { Element, name, description }
     } = this.props;
    return (
      <Item>
        <TextDiv>
          <Element>{name}</Element>
        </TextDiv>
        <DescriptionDiv>
          <Text>{description}</Text>
        </DescriptionDiv>
      </Item>
    );
  }
}

TypographyItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    example: PropTypes.string,
    element: PropTypes.element
  }).isRequired,
};

export default TypographyItem;