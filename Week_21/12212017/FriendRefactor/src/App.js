import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
render() {
return (<Wrapper>
  <h1 className="title">Friends List</h1>
  {
    friends.map((item) => {
      return (<FriendCard
        key={item.id}
        name={item.name}
        image={item.image}
        occupation={item.occupation}
        location={item.location}/>)
    })
  }
</Wrapper>)
}
  
}

export default App;
