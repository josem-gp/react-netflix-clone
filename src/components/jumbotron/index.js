import React from "react";
import { Container, Inner, Item, Title, SubTitle } from "./styles/Jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  <Item>
    <Inner direction={direction}>{children}</Inner>
  </Item>;
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
