import React from 'react'

import Header from "./components/Header"
import Jobs from "./components/Jobs"
import "./App.sass"

function App(props) {

  return (
    <>
      <Header showBar={true}/>
      <Jobs/>
    </>
  );
}

export default App;
