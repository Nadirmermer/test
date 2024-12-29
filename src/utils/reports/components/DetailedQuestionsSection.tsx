import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles';
import { questions } from '../../../data/questions';
import { QuestionState } from '../../../types/questions';

interface DetailedQuestionsSectionProps {
  answers: QuestionState['answers'];
}

export const DetailedQuestionsSection: React.FC<DetailedQuestionsSectionProps> = ({ answers }) => {
  const answeredQuestions = Object.entries(answers).filter(
    ([_, answer]) => answer.answer !== undefined
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Detaylı Değerlendirme:</Text>
      {answeredQuestions.map(([id, answer]) => {
        const question = questions[id];
        if (!question) return null;

        return (
          <View key={id} style={{ marginBottom: 10 }}>
            <Text style={styles.text}>
              Soru: {question.text}
              {'\n'}Yanıt: {answer.answer ? 'Evet' : 'Hayır'}
              {answer.note ? `\nNot: ${answer.note}` : ''}
            </Text>
          </View>
        );
      })}
    </View>
  );
};