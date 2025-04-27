import React from 'react';

const RecordingButtons = ({ isRecording, isLoading, startRecording, stopRecording }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={startRecording}
          disabled={isRecording || isLoading}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: isRecording || isLoading ? '#888' : '#4CAF50',
            cursor: isRecording || isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          <span style={{ color: 'white', fontSize: '24px' }}>▶</span>
        </button>

        <button
          onClick={stopRecording}
          disabled={!isRecording || isLoading}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: !isRecording || isLoading ? '#888' : '#f44336',
            cursor: !isRecording || isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          <span style={{ color: 'white', fontSize: '24px' }}>■</span>
        </button>
      </div>
    </div>
  );
};

export default RecordingButtons;