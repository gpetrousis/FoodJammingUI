import { css } from 'styled-components';

const calculateSize = size => {
  return `
    font-size: ${size}px;
    line-height: ${1.5 * size}px;
  `
}

const HeadingLarge = css`
  ${calculateSize(60)}
`;

const HeadingMedium = css`
  ${calculateSize(48)}
`;

const HeadingSmall = css`
  ${calculateSize(32)}
`;

const BodyRegular = css`
  ${calculateSize(20)}
`;

const BodySmall = css`
  ${calculateSize(16)}
`;

export {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  BodyRegular,
  BodySmall,
}