import React from 'react';
import { FileDown } from 'lucide-react';
import { generateShortReport, generateDetailedReport } from '../../utils/reports/scidReports';
import { QuestionState } from '../../types/questions';

interface ScidReportButtonProps {
  state: QuestionState;
  patientName: string;
}

export function ScidReportButton({ state, patientName }: ScidReportButtonProps) {
  const handleDownload = async (type: 'short' | 'detailed') => {
    const report = type === 'short' ? 
      await generateShortReport(state, patientName) :
      await generateDetailedReport(state, patientName);

    const blob = await report.toBlob();
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `SCID-5_${type === 'short' ? 'Kisa' : 'Detayli'}_Rapor_${patientName.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleDownload('short')}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        <FileDown className="w-4 h-4" />
        <span>Kısa Rapor</span>
      </button>
      <button
        onClick={() => handleDownload('detailed')}
        className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
      >
        <FileDown className="w-4 h-4" />
        <span>Detaylı Rapor</span>
      </button>
    </div>
  );
}