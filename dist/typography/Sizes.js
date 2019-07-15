import { css } from 'styled-components';

const calculateSize = size => {
  return `
    font-size: ${size}px;
    line-height: ${1.5 * size}px;
  `;
};

const HeadingLarge =
/*#__PURE__*/
css(["", ""], calculateSize(60));
const HeadingMedium =
/*#__PURE__*/
css(["", ""], calculateSize(48));
const HeadingSmall =
/*#__PURE__*/
css(["", ""], calculateSize(32));
const BodyRegular =
/*#__PURE__*/
css(["", ""], calculateSize(20));
const BodySmall =
/*#__PURE__*/
css(["", ""], calculateSize(16));
export { HeadingLarge, HeadingMedium, HeadingSmall, BodyRegular, BodySmall };