import styled from 'styled-components';

const ColoredDiv = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 8px;
`;

export default ColoredDiv;