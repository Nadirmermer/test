import React from 'react';

export interface PatientInfo {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  gender: string;
  maritalStatus: string;
  address: string;
  medicalHistory: string;
  medicationHistory: string;
  familyHistory: string;
  notes: string;
}

interface PatientFormProps {
  onSubmit: (info: PatientInfo) => void;
}

export default function PatientForm({ onSubmit }: PatientFormProps) {
  const [info, setInfo] = React.useState<PatientInfo>({
    name: '',
    birthDate: '',
    phone: '',
    email: '',
    gender: '',
    maritalStatus: '',
    address: '',
    medicalHistory: '',
    medicationHistory: '',
    familyHistory: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Danışan Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={info.name}
              onChange={e => setInfo({...info, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={info.birthDate}
              onChange={e => setInfo({...info, birthDate: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={info.phone}
              onChange={e => setInfo({...info, phone: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={info.email}
              onChange={e => setInfo({...info, email: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sağlık Geçmişi</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={info.medicalHistory}
              onChange={e => setInfo({...info, medicalHistory: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">İlaç Kullanım Geçmişi</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={info.medicationHistory}
              onChange={e => setInfo({...info, medicationHistory: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Aile Öyküsü</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={info.familyHistory}
              onChange={e => setInfo({...info, familyHistory: e.target.value})}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Değerlendirmeye Başla
          </button>
        </div>
      </div>
    </form>
  );
}