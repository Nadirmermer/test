import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { usePatientStore } from '../stores/patientStore';

export function useTestResults() {
  const { state, selectedTest, setState, setSelectedTest } = useApp();
  const { id: patientId } = useParams();
  const navigate = useNavigate();
  const { updatePatient, getPatient } = usePatientStore();

  const hasAnswers = Object.keys(state.answers).length > 0;
  const hasNotes = Object.keys(state.answers).some(id => state.answers[id].note);
  
  const totalScore = selectedTest?.startsWith('beck') 
    ? Object.values(state.answers).reduce((sum, answer) => sum + (answer.score || 0), 0)
    : null;

  const handleComplete = async () => {
    if (!selectedTest) {
      console.error('Selected test is missing');
      return;
    }

    if (!patientId) {
      console.error('Patient ID is missing');
      return;
    }

    const patient = getPatient(patientId);
    if (!patient) {
      console.error('Patient not found');
      return;
    }

    try {
      const testResult = {
        id: crypto.randomUUID(),
        testType: selectedTest,
        answers: state.answers,
        diagnosis: state.diagnoses,
        date: new Date().toISOString(),
      };

      const updatedTestResults = [...(patient.testResults || []), testResult];
      await updatePatient(patientId, { testResults: updatedTestResults });

      // Reset the app state
      setState({
        currentQuestionId: '',
        previousQuestions: [],
        answers: {},
        diagnoses: [],
        notes: {}
      });
      
      // Clear the selected test
      setSelectedTest(null);

      // Navigate back to test selection
      navigate(`/patients/${patientId}/reports`, { replace: true });
    } catch (error) {
      console.error('Error completing test:', error);
    }
  };

  return {
    hasAnswers,
    hasNotes,
    totalScore,
    handleComplete
  };
}