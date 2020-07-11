import React from "react";
import CardList from "./components/CardList";

//Styling
import { Title } from "./styles";

// import CardItem from './components/CardItem';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div>
      <Title> Do You Remember? </Title>

      <div>
        <CardList />
        {/* <CardItem/> */}
      </div>
    </div>
  );
}

export default App;
