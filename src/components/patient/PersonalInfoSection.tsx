import React from 'react';

interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
}

interface PersonalInfoSectionProps {
  personalInfo: PersonalInfo;
  onUpdate: (info: PersonalInfo) => void;
}

export function PersonalInfoSection({ personalInfo, onUpdate }: PersonalInfoSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Kişisel Bilgiler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ad Soyad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={personalInfo.fullName}
            onChange={e => onUpdate({...personalInfo, fullName: e.target.value})}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            value={personalInfo.phone}
            onChange={e => onUpdate({...personalInfo, phone: e.target.value})}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            E-posta
          </label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={e => onUpdate({...personalInfo, email: e.target.value})}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Cinsiyet
          </label>
          <select
            value={personalInfo.gender}
            onChange={e => onUpdate({...personalInfo, gender: e.target.value})}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Seçiniz</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
            <option value="other">Diğer</option>
          </select>
        </div>
      </div>
    </div>
  );
}