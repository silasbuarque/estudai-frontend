import React from 'react';
import RecordingButtons from './RecordingButtons';
import ResultsDisplay from './ResultsDisplay';

const Header = ({ themeStyles, isRecording, isLoading, startRecording, stopRecording, resumo, flashcards }) => {
  const [showResults, setShowResults] = React.useState(false);

  const handleStopRecording = () => {
    stopRecording();
    setShowResults(true);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: themeStyles.backgroundColor,
      color: themeStyles.textColor,
      padding: '2rem',
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
    }}>
      {/* Seção fixa para o título e botões */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          textAlign: 'center',
          margin: '1rem 0',
        }}>EstudAI</h2>

        <RecordingButtons
          isRecording={isRecording}
          isLoading={isLoading}
          startRecording={startRecording}
          stopRecording={handleStopRecording}
        />

        {isLoading && <p style={{ textAlign: 'center', marginTop: '1rem' }}>Estamos criando um resumo e gerando os flashcards. Aguarde um instante.</p>}
      </div>

      {/* Seção para exibição dos resultados */}
      <div style={{
        marginTop: '1rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {showResults && !isLoading && (
          <ResultsDisplay
            resumo={resumo}
            flashcards={flashcards}
            themeStyles={themeStyles}
          />
        )}
      </div>
    </div>
  );
};

export default Header;