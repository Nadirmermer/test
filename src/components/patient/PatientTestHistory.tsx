import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClipboardList, FileDown } from 'lucide-react';
import { usePatientStore } from '../../stores/patientStore';
import { BackButton } from '../BackButton';
import { tests } from '../../data/tests';
import { generateShortReport, generateDetailedReport } from '../../utils/reports/scidReports';

export function PatientTestHistory() {
  const { id: patientId } = useParams();
  const navigate = useNavigate();
  const patient = usePatientStore(state => state.getPatient(patientId!));
  const testResults = patient?.testResults || [];

  const getTestName = (testType: string) => {
    return tests.find(t => t.id === testType)?.name || testType;
  };

  const calculateTotalScore = (answers: Record<string, any>) => {
    return Object.values(answers).reduce((sum, answer) => sum + (answer.score || 0), 0);
  };

  const handleDownloadReport = async (result: any, type: 'short' | 'detailed') => {
    if (!patient) return;

    try {
      const report = type === 'short' 
        ? await generateShortReport({ 
            currentQuestionId: '',
            previousQuestions: [],
            answers: result.answers,
            diagnoses: result.diagnosis || [],
            notes: {}
          }, `${patient.firstName} ${patient.lastName}`)
        : await generateDetailedReport({
            currentQuestionId: '',
            previousQuestions: [],
            answers: result.answers,
            diagnoses: result.diagnosis || [],
            notes: {}
          }, `${patient.firstName} ${patient.lastName}`);

      const blob = await report.toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `SCID-5_${type === 'short' ? 'Kisa' : 'Detayli'}_Rapor_${patient.firstName}_${patient.lastName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  if (!patient) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">Danışan bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <BackButton to="/patients" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Test Geçmişi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {patient.firstName} {patient.lastName}
          </p>
        </div>
        <button
          onClick={() => navigate(`/patients/${patientId}/tests`)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <ClipboardList className="w-5 h-5" />
          Yeni Test
        </button>
      </div>

      {testResults.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            Henüz test sonucu bulunmamaktadır.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {testResults.map((result) => (
            <div
              key={result.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {getTestName(result.testType)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(result.date).toLocaleDateString('tr-TR')}
                  </p>
                  
                  {/* Beck testleri için puan gösterimi */}
                  {(result.testType === 'beck-depression' || result.testType === 'beck-anxiety') && (
                    <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                      Toplam Puan: {calculateTotalScore(result.answers)}
                    </p>
                  )}

                  {result.diagnosis && result.diagnosis.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Sonuçlar:
                      </h4>
                      <ul className="mt-1 list-disc list-inside">
                        {result.diagnosis.map((d: string, i: number) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* SCID-5 için rapor indirme butonları */}
                {result.testType === 'scid-5-cv' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownloadReport(result, 'short')}
                      className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                    >
                      <FileDown className="w-4 h-4" />
                      Kısa Rapor
                    </button>
                    <button
                      onClick={() => handleDownloadReport(result, 'detailed')}
                      className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
                    >
                      <FileDown className="w-4 h-4" />
                      Detaylı Rapor
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}