import { Routes, Route } from "react-router-dom";
import StoryMainList from "./views/StoryMainList";
import ChapterList from "./views/ChapterList"
import StoryDetail from "./views/StoryDetail"
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
      <Route
        path="/story/:id/:nameStory"
        element={
            <ChapterList />
        }
        
      />
      <Route
        path="/story/:id/:nameStory/chapter/:chapterId"
        element={
            <StoryDetail/>
        }
        
      />
      </Routes>
    </div>
  );
}

export default App;