import React from 'react';

interface Treatment {
  date: string;
  diagnosis: string;
  treatmentAndOutcome: string;
}

interface TreatmentHistoryData {
  treatmentPurpose: string;
  previousTreatments: string;
  hospitalizations: string;
  hospitalizationReason: string;
  treatments: Treatment[];
}

interface TreatmentHistorySectionProps {
  data: TreatmentHistoryData;
  onUpdate: (data: TreatmentHistoryData) => void;
}

export function TreatmentHistorySection({ data, onUpdate }: TreatmentHistorySectionProps) {
  const addTreatment = () => {
    onUpdate({
      ...data,
      treatments: [
        ...data.treatments,
        { date: '', diagnosis: '', treatmentAndOutcome: '' }
      ]
    });
  };

  const updateTreatment = (index: number, field: keyof Treatment, value: string) => {
    const newTreatments = [...data.treatments];
    newTreatments[index] = { ...newTreatments[index], [field]: value };
    onUpdate({ ...data, treatments: newTreatments });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Tedavi Öyküsü
      </h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-normal">
            <strong>Not:</strong> Genel değerlendirmenin bu bölümünün amacı, kişinin yaşam boyu psikopatolojisinin genel bir görünümünü belirlemektir. Aşırı ayrıntılara girmekten kaçının. Geçmiş yeğin dönemler için belirtileri, kullanılan ilaçları, uygulanan diğer tedavileri (<strong>"Bunun için ne gibi bir tedavi uygulandı?"</strong>) ve yatışları belirleyip ve bize zamanlarını (<strong>"Ne zaman başladı? Ne zaman kendinizi daha iyi hissetiyordunuz?"</strong>) belirleyin.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ruhsal sorunlarınız için ilk kez ne zaman başvuruda bulundunuz? (Ne içindi? Ne gibi tedavi[ler] aldınız? Hangi ilaçlar?)
          </label>
          <textarea
            value={data.previousTreatments}
            onChange={e => onUpdate({...data, previousTreatments: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Psikiyatri hastanesine yatışınız oldu mu?
          </label>
          <div className="space-y-2">
            <textarea
              value={data.hospitalizations}
              onChange={e => onUpdate({...data, hospitalizations: e.target.value})}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              rows={2}
              placeholder="YANIT EVETSE: Ne için yattınız? (Kaç kez?)"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              YETERSİZ BİR YANIT VERİLDİYSE, İNCELİKLE ÜZERİNE GİDİN-örn. Başka bir şey olmasın? İnsanlar, psikiyatri hastanelerine, yalnızca (yorgun/gergin/KENDİ SÖZCÜKLER) oldukları için gitmezler.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Alkol ya da madde tedavisi gördünüz mü?
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Yaş (ya da tarih)
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tanımlama (belirtiler, tetikleyici olaylar)
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tedavi ve sonlanma
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.treatments.map((treatment, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 dark:border-gray-600 p-2">
                      <input
                        type="text"
                        value={treatment.date}
                        onChange={e => updateTreatment(index, 'date', e.target.value)}
                        className="w-full bg-transparent text-gray-700 dark:text-gray-200"
                      />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2">
                      <input
                        type="text"
                        value={treatment.diagnosis}
                        onChange={e => updateTreatment(index, 'diagnosis', e.target.value)}
                        className="w-full bg-transparent text-gray-700 dark:text-gray-200"
                      />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-2">
                      <input
                        type="text"
                        value={treatment.treatmentAndOutcome}
                        onChange={e => updateTreatment(index, 'treatmentAndOutcome', e.target.value)}
                        className="w-full bg-transparent text-gray-700 dark:text-gray-200"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={addTreatment}
            className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            + Yeni Tedavi Ekle
          </button>
        </div>
      </div>
    </div>
  );
}