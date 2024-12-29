import React from 'react';
import { Question } from '../types/questions';
import { ArrowLeft } from 'lucide-react';

interface BeckQuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function BeckQuestionCard({
  question,
  onAnswer,
  onBack,
  canGoBack,
}: BeckQuestionCardProps) {
  if (!question.options) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
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

      {question.infoText && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {question.infoText}
          </p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {question.text}
        </h3>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.score)}
            className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <span className="text-gray-700 dark:text-gray-300">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
