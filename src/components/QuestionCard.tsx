import React from 'react';
import { Question } from '../types/questions';
import { BeckQuestionCard } from './BeckQuestionCard';
import { ScidQuestionCard } from './ScidQuestionCard';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: number | boolean, note?: string) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      {props.question.type === 'beck' ? (
        <BeckQuestionCard {...props} onAnswer={(score, note) => props.onAnswer(score, note)} />
      ) : (
        <ScidQuestionCard {...props} onAnswer={(answer, note) => props.onAnswer(answer, note)} />
      )}
    </div>
  );
}