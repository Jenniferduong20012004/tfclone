// src/views/StoryMainList.jsx
import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
function StoryMainList() {
  const [storiesData, setStoriesData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchBook();
  }, []);
  const fetchBook = async () => {
    try {
      

      const response = await fetch("http://localhost:5000/getAllBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();

      if (data.success) {
        const stories = data.stories.map((story) => ({
          ...story,
          id: story.id,
          title: story.name,
        }));
        setStoriesData(stories);
        
      } else {
        toast.error(data.message || "Failed to fetch user", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Error: " + (error.message || "Unknown error"), {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };
  const storyData = {
    popular: [
      { title: "The Rise Of Sun", author: "Hana Kim", genre: "Fantasy" },
      { title: "The Rise Of Sun", author: "Hana Kim", genre: "Fantasy" },
      { title: "The Rise Of Sun", author: "Hana Kim", genre: "Fantasy" }
    ],
    fiction: [
      { title: "Black Panther", author: "Marvel Comics", views: "5k", genre: "Superhero" },
      { title: "Aqua man", author: "DC Comics", views: "8k", genre: "Adventure" },
      { title: "Avatar", author: "James Cameron", views: "15k", genre: "Sci-Fi" }
    ]
  };

  const cardStyle = (index) => ({
    background: [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #06beb6 0%, #48b1bf 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    ][index % 3],
    borderRadius: '16px',
    padding: '16px',
    color: 'white',
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '20px' }}>
      <h1 style={{ color: '#8b5cf6', fontSize: '16px' }}>Qunu,</h1>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Welcome Back</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>Top Stories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {storiesData?.map((story, index) => (
            <div key={index} style={cardStyle(index)}>
              <span style={{ fontSize: '10px', backgroundColor: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '20px', alignSelf: 'flex-start' }}>
                {story.views} views
              </span>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '4px 0' }}>{story.title}</h4>
                <p style={{ fontSize: '12px', opacity: '0.8', margin: '2px 0' }}>{story.author}</p>
                <p style={{ fontSize: '12px', opacity: '0.7', margin: '0' }}>{story.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryMainList;