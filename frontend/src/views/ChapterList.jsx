import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
function ChapterList() {
  const { id, nameStory} = useParams();
  const [chaptersData, setChaptersData] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      fetchBookChapter();
    }, []);
    const fetchBookChapter = async () => {
      try {
        
        const response = await fetch("http://localhost:5000/getBookChapter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          storyId: id,
        }),
        });
  
        const data = await response.json();
  
        if (data.success) {
          const chapters = data.chapter.map((chapter) => ({
            ...chapter,
            id: chapter.id,
            title: `Chapter ${chapter.id}`,
            content: chapter.content,
          }));
          chapters.sort((a, b) => a.id - b.id);
          setChaptersData(chapters);
          
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
  
  // Mock data - in real app, this would come from your API based on storyId
  const storyData = {
    title: "The Rise Of Sun",
    author: "Hana Kim",
    genre: "Fantasy",
    description: "An epic fantasy tale of courage, magic, and destiny in a world where the sun has stopped rising.",
    totalChapters: 24,
    views: "21k",
    rating: 4.8,
    status: "Ongoing"
  };

  const handleChapterClick = (chapterId) => {
    navigate(`/story/${id}/${nameStory}/chapter/${chapterId}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Status Bar */}
      <div style={{
        position: 'sticky',
        top: '0',
        left: '0',
        right: '0',
        height: '44px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white',
        fontSize: '16px',
        fontWeight: '600',
        zIndex: '10'
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          <div style={{ width: '4px', height: '4px', backgroundColor: 'white', borderRadius: '50%' }}></div>
          <div style={{ width: '18px', height: '10px', border: '1px solid white', borderRadius: '2px', marginLeft: '4px' }}>
            <div style={{ width: '70%', height: '100%', backgroundColor: 'white', borderRadius: '1px' }}></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        color: 'white',
        position: 'relative'
      }}>
        {/* Back Button */}
        <button 
          onClick={handleBackClick}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Story Info */}
        <div style={{ paddingLeft: '60px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0 0 8px 0'
          }}>{nameStory}</h1>
          <p style={{
            fontSize: '14px',
            opacity: '0.9',
            margin: '0 0 4px 0'
          }}>by {storyData.author}</p>
          <div style={{
            display: 'flex',
            gap: '16px',
            fontSize: '12px',
            opacity: '0.8'
          }}>
            <span>{storyData.genre}</span>
            <span>★ {storyData.rating}</span>
            <span>{storyData.views} views</span>
            <span>{storyData.status}</span>
          </div>
        </div>
      </div>

      {/* Story Description */}
      <div style={{
        backgroundColor: 'white',
        margin: '16px',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          margin: '0 0 12px 0',
          color: '#1f2937'
        }}>About this story</h3>
        <p style={{
          fontSize: '14px',
          lineHeight: '1.5',
          color: '#6b7280',
          margin: '0'
        }}>{storyData.description}</p>
      </div>

      {/* Chapters Section */}
      <div style={{
        backgroundColor: 'white',
        margin: '0 16px 16px 16px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '20px 20px 16px 20px',
          borderBottom: '1px solid #f3f4f6'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '0',
            color: '#1f2937'
          }}>Chapters ({chaptersData?.length})</h3>
        </div>

        {/* Chapter List */}
        <div>
          {(chaptersData || []).map((chapter, index) => (
            <div
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
              style={{
                padding: '16px 20px',
                borderBottom: index < chaptersData?.length - 1 ? '1px solid #f3f4f6' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: chapter.isRead ? '#f8fafc' : 'white',
                transition: 'background-color 0.2s ease'
              }}
              // onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f5f9'}
              // onMouseLeave={(e) => e.target.style.backgroundColor = chapter.isRead ? '#f8fafc' : 'white'}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#6b7280',
                    minWidth: '60px'
                  }}>
                    Chapter {chapter.id}
                  </span>
                  {/* {chapter.isNew && (
                    <span style={{
                      fontSize: '10px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '8px',
                      fontWeight: '500'
                    }}>
                      NEW
                    </span>
                  )} */}
                </div>
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  margin: '0 0 4px 0',
                  color: chapter.isRead ? '#6b7280' : '#1f2937'
                }}>{chapter.title}</h4>
                {/* <p style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  margin: '0'
                }}>{chapter.readTime} read</p> */}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {chapter.isRead && (
                  <div style={{
                    width: '18px',
                    height: '18px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                )}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Reading Button */}
      <div style={{ padding: '0 16px 32px 16px' }}>
        <button
          onClick={() => handleChapterClick(4)} // Next unread chapter
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
          }}
        >
          Continue Reading - Chapter 4
        </button>
      </div>
    </div>
  );
}

export default ChapterList;