import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard name={`${friends[0].name}`} />
  </Wrapper>
);

export default App;
