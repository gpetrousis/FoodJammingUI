import { css } from 'styled-components';

const Font = css`
  font-family: Raleway, 'Open Sans', sans-serif;
`;

const Normal = css`
  ${Font}
  font-weight: 300;
`;

const Bold = css`
  ${Font}
  font-weight: 500;
`;

const Muted = css`
  opacity: 0.6;
`;

export {
  Normal,
  Bold,
  Muted
};