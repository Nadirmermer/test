import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '../types/questions';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface ScidQuestionCardProps {
  question: Question;
  onAnswer: (answer: boolean, note?: string) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function ScidQuestionCard({
  question,
  onAnswer,
  onBack,
  canGoBack,
}: ScidQuestionCardProps) {
  const [note, setNote] = useState('');
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const handleAnswer = useCallback(
    (answer: boolean) => {
      onAnswer(answer, note.trim() || undefined);
      setNote('');
      setIsNoteOpen(false);
    },
    [note, onAnswer]
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '2') {
        handleAnswer(true);
      } else if (e.key === '1') {
        handleAnswer(false);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleAnswer]);

  const renderText = (text: string = '') => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
      {/* Soru ID'si */}
      <div className="mb-4 text-sm font-mono text-gray-500 dark:text-gray-400">
        Soru ID: {question.id}
      </div>

      <div className="flex justify-between items-center mb-6">
        {canGoBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Önceki Soru</span>
          </button>
        )}
      </div>

      <div
        className="text-lg text-gray-800 dark:text-gray-200 mb-8"
        dangerouslySetInnerHTML={{ __html: renderText(question.text) }}
      />

      {question.infoText && (
        <div
          className="text-sm text-gray-600 dark:text-gray-400 mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800"
          dangerouslySetInnerHTML={{ __html: renderText(question.infoText) }}
        />
      )}

      <div className="space-y-4">
        <button
          onClick={() => setIsNoteOpen(!isNoteOpen)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mb-2"
        >
          {isNoteOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
          Not Ekle
        </button>

        {isNoteOpen && (
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            rows={3}
            placeholder="Notunuzu buraya yazın..."
          />
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <button
            onClick={() => handleAnswer(false)}
            className="w-full sm:w-48 bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition-colors"
          >
            Hayır (1)
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="w-full sm:w-48 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg transition-colors"
          >
            Evet (2)
          </button>
        </div>
      </div>
    </div>
  );
}