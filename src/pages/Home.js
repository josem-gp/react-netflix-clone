import React from "react";
import Jumbotron from "../components/jumbotron";

const Home = () => {
  return (
    <div>
      <Jumbotron.Container>
        <Jumbotron.Title>Title</Jumbotron.Title>
        <Jumbotron.SubTitle>Subtitle</Jumbotron.SubTitle>
      </Jumbotron.Container>
    </div>
  );
};

export default Home;
