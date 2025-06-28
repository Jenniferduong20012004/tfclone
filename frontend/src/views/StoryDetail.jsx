import React from 'react';

function StoryDetail() {
  const storyContent = `Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ut Ligula Vel Ipsum Ullamcorper Malesuada. Nullam Non Purus Eget Mi Tincidunt Tincidunt. Vivamus Eu Aliquet Ex, Vel Varius Tellus. Quisque Interdum Bibendum Arcu, Non Consequat Nisl Porta Eu. Sed Elementum Varius Risus, A Luctus Justo Congue In. Praesent Congue Justo Nullam Non Purus Eget Mi Tincidunt Tincidunt. Vivamus Eu Aliquet Ex, Vel Varius Tellus. Quisque Interdum Bibendum Arcu, Non Consequat Nisl Porta Eu. Sed Elementum Varius Risus, A Luctus Justo Congue In. Praesent Congue JustoNullam Non Purus Eget Mi Tincidunt Tincidunt. Vivamus Eu Aliquet Ex, Vel Varius Tellus. Quisque Interdum Bibendum Arcu, Non Consequat Nisl Porta Eu. Sed Elementum Varius Risus, A Luctus Justo Congue In. Praesent Congue Justoget Mi Tincidunt Tincidunt. Vivamus Eu Aliquet Ex, Vel Varius Tellus. Quisque Interdum Bibendum Arcu, Non Consequat Nisl Porta Eu. Sed Elementum Varius Risus, A Luctus Justo Congue In. Praesent Congue Justo`;

  const paragraphs = storyContent.split('. ').map((sentence, index) => {
    if (sentence.trim()) {
      return sentence.trim() + (index < storyContent.split('. ').length - 1 ? '.' : '');
    }
    return '';
  }).filter(p => p);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Status Bar */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '44px',
        background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)',
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

      {/* Hero Section with Wolf Image */}
      <div style={{
        height: '300px',
        background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '44px'
      }}>
        {/* Back Arrow */}
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '20px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </div>

        {/* Wolf Illustration */}
        <div style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          border: '2px solid rgba(255,255,255,0.2)'
        }}>
          {/* Simple Wolf Icon */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white" opacity="0.9">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1s1-.45 1-1v-1.26C11.24 15.92 12 16 12 16s.76-.08 2-.26V17c0 .55.45 1 1 1s1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
          </svg>
        </div>

        {/* Title and Genre */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
          textAlign: 'center'
        }}>The Rise Of Sun</h1>
        <p style={{
          fontSize: '16px',
          opacity: '0.8',
          margin: '0'
        }}>Fiction</p>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '20px',
          height: '20px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '15px',
          height: '15px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '10px',
          height: '10px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          borderRadius: '50%'
        }}></div>
      </div>

      {/* Content Section */}
      <div style={{
        backgroundColor: 'white',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        marginTop: '-20px',
        minHeight: 'calc(100vh - 280px)',
        padding: '30px 20px 100px 20px',
        position: 'relative',
        zIndex: '5'
      }}>
        {/* Content Text */}
        <div style={{
          lineHeight: '1.6',
          fontSize: '16px',
          color: '#333',
          textAlign: 'justify'
        }}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} style={{
              marginBottom: '16px',
              textIndent: '20px'
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Home Indicator */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '134px',
        height: '5px',
        backgroundColor: '#000',
        borderRadius: '3px',
        opacity: '0.3'
      }}></div>
    </div>
  );
}

export default StoryDetail;