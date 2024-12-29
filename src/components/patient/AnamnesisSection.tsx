import React from 'react';

interface AnamnesisData {
  currentIssues: string;
  age: string;
  livingArrangement: string;
  occupation: string;
  workSchedule: string;
  workDetails: string;
  disabilityStatus: string;
  unemploymentHistory: string;
  presentIllness: string;
  lifeImpact: string;
  selfPerception: string;
}

interface AnamnesisSectionProps {
  data: AnamnesisData;
  onUpdate: (data: AnamnesisData) => void;
}

export function AnamnesisSection({ data, onUpdate }: AnamnesisSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Anamnez Formu
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Yaşadığınız sorunlar ya da güçlüklerle ilgili sorular soracağım ve bu sırada birtakım notlar alacağım. Başlamadan önce bir sorunuz var mı?
          </label>
          <textarea
            value={data.currentIssues}
            onChange={e => onUpdate({...data, currentIssues: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Kaç yaşındasınız?
          </label>
          <input
            type="text"
            value={data.age}
            onChange={e => onUpdate({...data, age: e.target.value})}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Kimle yaşıyorsunuz? (Ne gibi bir yerde yaşıyorsunuz?)
          </label>
          <textarea
            value={data.livingArrangement}
            onChange={e => onUpdate({...data, livingArrangement: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ne iş yapıyorsunuz?
          </label>
          <textarea
            value={data.occupation}
            onChange={e => onUpdate({...data, occupation: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Yarı zamanlı mı, yoksa tam zamanlı mı çalışıyorsunuz?
          </label>
          <textarea
            value={data.workSchedule}
            onChange={e => onUpdate({...data, workSchedule: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bu sıralar engelli ödeneği (özürlü maaşı) alıyor musunuz? Neden engelli olarak tanımlanıyorsunuz?
          </label>
          <textarea
            value={data.disabilityStatus}
            onChange={e => onUpdate({...data, disabilityStatus: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Çalışamadığınız ya da okula gidemediğiniz bir zaman dilimi oldu mu?
          </label>
          <textarea
            value={data.unemploymentHistory}
            onChange={e => onUpdate({...data, unemploymentHistory: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bu kez buraya gelmenizin nedeni ne? (Yaşadığınız başlıca sorun ne?)
          </label>
          <textarea
            value={data.presentIllness}
            onChange={e => onUpdate({...data, presentIllness: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bu sorunuz ortaya çıktığında yaşamınızda neler olup bitiyordu?
          </label>
          <textarea
            value={data.lifeImpact}
            onChange={e => onUpdate({...data, lifeImpact: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            En son ne zaman kendinizi (her zamanki gibi) iyi hissediyordunuz?
          </label>
          <textarea
            value={data.selfPerception}
            onChange={e => onUpdate({...data, selfPerception: e.target.value})}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
}