import React from 'react';

const ResultsDisplay = ({ resumo, flashcards, themeStyles }) => {
  const { textColor, boxColor } = themeStyles;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      <div style={{
        flex: '1 1 600px', // Increased width
        backgroundColor: boxColor,
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        minWidth: '600px', // Adjusted minimum width
        maxWidth: '800px', // Adjusted maximum width
        textAlign: 'left', // Align text to the left
      }}>
        <h3 style={{
          marginBottom: '1rem',
          color: textColor,
          paddingBottom: '0.5rem',
          marginTop: '0', // Align title at the top
          textAlign: 'center', // Center the title
        }}>Resumo</h3>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5', color: textColor }}>{resumo}</p>
      </div>

      <div style={{
        flex: '1 1 600px', // Increased width
        backgroundColor: boxColor,
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        minWidth: '600px', // Adjusted minimum width
        maxWidth: '800px', // Adjusted maximum width
        textAlign: 'left', // Align text to the left
      }}>
        <h3 style={{
          marginBottom: '1rem',
          color: textColor,
          paddingBottom: '0.5rem',
          marginTop: '0', // Align title at the top
          textAlign: 'center', // Center the title
        }}>Flashcards</h3>
        <div style={{ color: textColor }}>
          {flashcards.map((flashcard, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '1.5rem',
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ marginTop: '0', marginBottom: '0.5rem' }}>Pergunta:</h4>
              <p style={{ marginTop: '0', marginBottom: '1rem' }}>{flashcard.pergunta}</p>
              
              <h4 style={{ marginTop: '0', marginBottom: '0.5rem' }}>Resposta:</h4>
              <p style={{ marginTop: '0', marginBottom: '0' }}>{flashcard.resposta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;