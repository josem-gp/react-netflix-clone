import React from "react";
import { Container, Inner, Item } from "./styles/Jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  <Item>
    <Inner direction={direction}>{children}</Inner>
  </Item>;
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
