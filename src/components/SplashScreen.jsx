import React from 'react';

const SplashScreen = ({ visible, message = "Loading Quiz...", animation, onFinish }) => {
  React.useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1200); // show splash for 1.2 seconds
      return () => clearTimeout(timer);
    }
  }, [visible, onFinish]);

  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(255,255,255,0.95)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      transition: 'opacity 0.3s',
    }}>
      {animation && <div style={{ marginBottom: 24 }}>{animation}</div>}
      <div style={{ fontSize: 28, color: '#FB923C', fontWeight: 600 }}>{message}</div>
    </div>
  );
};

export default SplashScreen;
