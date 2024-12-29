import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, PenSquare, ClipboardList, Trash2 } from 'lucide-react';
import { usePatientStore } from '../../stores/patientStore';
import { BackButton } from '../BackButton';

export function PatientList() {
  const navigate = useNavigate();
  const { patients, deletePatient } = usePatientStore();

  const handleDelete = (id: string, name: string) => {
    if (
      window.confirm(
        `${name} ${name} isimli danışanyı silmek istediğinizden emin misiniz?`
      )
    ) {
      deletePatient(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <BackButton />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Danışan Listesi
        </h2>
        <button
          onClick={() => navigate('/patients/new')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Yeni danışan
        </button>
      </div>

      {patients.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            Henüz kayıtlı danışan bulunmamaktadır.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {[...patients].reverse().map((patient) => (
            <div
              key={patient.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {patient.phone && (
                      <span className="mr-3">{patient.phone}</span>
                    )}
                    {patient.email && <span>{patient.email}</span>}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/patients/${patient.id}/tests`)}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg"
                    title="Testler"
                  >
                    <ClipboardList className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate(`/patients/${patient.id}/reports`)}
                    className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-gray-700 rounded-lg"
                    title="Raporlar"
                  >
                    <FileText className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/patients/${patient.id}/anamnesis`)
                    }
                    className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                    title="Anamnez Düzenle"
                  >
                    <PenSquare className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(
                        patient.id,
                        `${patient.firstName} ${patient.lastName}`
                      )
                    }
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg"
                    title="danışanyı Sil"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
