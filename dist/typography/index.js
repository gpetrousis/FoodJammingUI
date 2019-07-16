import styled, { css } from 'styled-components';
import { Normal } from './Styles';
import { HeadingLarge, HeadingMedium, HeadingSmall, BodyRegular, BodySmall } from './Sizes';
const Color =
/*#__PURE__*/
css(["color:", ";"], props => props.theme.fontColorMain);
const BrandTitle =
/*#__PURE__*/
styled.h1.withConfig({
  componentId: "jlfqn3-0"
})(["", " ", " ", ""], Color, HeadingLarge, Normal);
const PageTitle =
/*#__PURE__*/
styled.h2.withConfig({
  componentId: "jlfqn3-1"
})(["", " ", " ", ""], Color, Normal, HeadingMedium);
const SectionTitle =
/*#__PURE__*/
styled.h3.withConfig({
  componentId: "jlfqn3-2"
})(["", " ", " ", ""], Color, Normal, HeadingSmall);
const Text =
/*#__PURE__*/
styled.p.withConfig({
  componentId: "jlfqn3-3"
})(["", " ", " ", ""], Color, Normal, BodyRegular);
const SubText =
/*#__PURE__*/
styled.p.withConfig({
  componentId: "jlfqn3-4"
})(["", " ", " ", ""], Color, Normal, BodySmall);
export { BrandTitle, PageTitle, SectionTitle, Text, SubText };