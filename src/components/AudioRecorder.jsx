import React, { useRef, useState } from 'react';
import useTheme from '../hooks/useTheme';
import Header from './Header';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [resumo, setResumo] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { darkMode, toggleTheme, themeStyles } = useTheme();

  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const sendAudioToBackend = async (audioBlob) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', audioBlob, 'audio.webm');

      const response = await fetch('http://localhost:8000/transcrever', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Erro ao enviar áudio para transcrição');

      const data = await response.json();
      setTranscription(data.transcricao || 'Transcrição não disponível');

      const resumoResponse = await fetch('http://localhost:8000/resumir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: data.transcricao }),
      });

      if (resumoResponse.ok) {
        const resumoData = await resumoResponse.json();
        setResumo(resumoData.resumo || 'Resumo não disponível');
        setFlashcards(resumoData.flashcards || []);
      } else {
        setResumo('Erro ao gerar resumo');
        setFlashcards([]);
      }
    } catch (error) {
      console.error('Erro:', error);
      setTranscription('Erro ao transcrever o áudio');
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });

      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunks.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunks.current.push(event.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        await sendAudioToBackend(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Erro ao iniciar gravação:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        themeStyles={themeStyles}
        isRecording={isRecording}
        isLoading={isLoading}
        startRecording={startRecording}
        stopRecording={stopRecording}
        transcription={transcription}
        resumo={resumo}
        flashcards={flashcards}
      />
    </>
  );
};

export default AudioRecorder;
