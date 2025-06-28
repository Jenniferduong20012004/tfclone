import { Routes, Route } from "react-router-dom";
import StoryMainList from "./views/StoryMainList";
import React from 'react'; 

function App() {
  console.log("App component rendering");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StoryMainList />} />
      </Routes>
    </div>
  );
}

export default App;