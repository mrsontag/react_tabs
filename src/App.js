import React, { useState } from 'react';
import Tabs from './components/tabs';
import Content from "./components/content";
import './App.css';

function App() {
  const morestuffcallback = () => {
    alert("ran the more stuff callback!");
  }
  const lotsofstuffcallback = () => {
    alert("ran the lots of stuff callback!");
  }
  const tabscontent = [ 
    ["My","My content goes here"],
    [ "Stuff", "Stuff content"],
    [ "More Stuff", "More Stuff content",morestuffcallback],
    [ "Lots of Stuff", "Lost of Stuff content",lotsofstuffcallback],
    [ "Stuff", "Stuff content"],
  ]
  const [content, setContent] = useState(tabscontent[0][1]);
  const [activetab, setActiveTab] = useState(0);
  return (
    <div className="App">
      <Tabs tabs={ tabscontent } setContent={setContent} activetab={activetab} setActiveTab={setActiveTab}/>
      <Content content={content}/>
    </div>
  );
}

export default App;
