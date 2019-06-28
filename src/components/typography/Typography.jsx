import styled, { css } from 'styled-components'

import { Normal } from './Styles'
import { HeadingLarge, HeadingMedium, HeadingSmall, BodyRegular, BodySmall } from './Sizes'

const Color = css`
  color: ${props => props.color};
`;

const BrandTitle = styled.h1`
  ${Color}
  ${HeadingLarge}
  ${Normal}
`

const PageTitle = styled.h2`
  ${Color}
  ${Normal}
  ${HeadingMedium}
`

const SectionTitle = styled.h3`
  ${Color}
  ${Normal}
  ${HeadingSmall}
`

const Text = styled.p`
  ${Color}
  ${Normal}
  ${BodyRegular}
`;

const SubText = styled.p`
  ${Color}
  ${Normal}
  ${BodySmall}
`;

export {
  BrandTitle,
  PageTitle,
  SectionTitle,
  Text,
  SubText
}