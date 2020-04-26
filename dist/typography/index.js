import styled, { css } from 'styled-components';
import typographyStyles from './typographyStyles';
const base = /*#__PURE__*/css(["font-family:Raleway,'Open Sans',sans-serif;font-weight:300;"]);
const Color = /*#__PURE__*/css(["color:", ";"], props => props.theme.secondary);

function fontSize(size) {
  return `
    font-size: ${size}px;
    line-height: ${1.5 * size}px;
  `;
}

const typographyCss = size => css(["", " ", " ", ""], base, Color, fontSize(size));

const elements = Object.entries(typographyStyles).reduce((acc, [name, {
  element,
  size
}]) => {
  acc[name] = styled[element].withConfig({
    componentId: "jlfqn3-0"
  })(["", ""], typographyCss(size));
  return acc;
}, {});
export default elements;