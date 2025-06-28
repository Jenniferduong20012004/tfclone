import { Routes, Route } from "react-router-dom";
import StoryMainList from "./views/StoryMainList";
import ChapterList from "./views/ChapterList"
import React from 'react'; 

function App() {
  console.log("App component rendering");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StoryMainList />} />
        <Route
        path="/story/:id/:nameStory"
        element={
            <ChapterList />
        }
      />
      </Routes>
    </div>
  );
}

export default App;