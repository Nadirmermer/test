import React, { useState } from 'react';
import { X, Mail, Phone, Check, Copy, Link } from 'lucide-react';
import { tests } from '../../data/tests';
import { usePatientStore } from '../../stores/patientStore';
import { copyToClipboard } from '../../utils/clipboard';

interface ShareTestModalProps {
  patientId: string;
  onClose: () => void;
}

export function ShareTestModal({ patientId, onClose }: ShareTestModalProps) {
  const [selectedTest, setSelectedTest] = useState('');
  const [shareMethod, setShareMethod] = useState<'email' | 'sms' | 'link'>('email');
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { getPatient, updatePatient } = usePatientStore();
  const patient = getPatient(patientId);

  const handleShare = async () => {
    if (!selectedTest || !patient) return;

    const sharedTest = {
      id: crypto.randomUUID(),
      testType: selectedTest,
      patientId,
      token: crypto.randomUUID(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    const updatedSharedTests = [...(patient.sharedTests || []), sharedTest];
    await updatePatient(patientId, { sharedTests: updatedSharedTests });

    const testUrl = `${window.location.origin}/shared-test/${sharedTest.token}`;
    
    if (shareMethod === 'link') {
      const copied = await copyToClipboard(testUrl);
      setIsCopied(copied);
      setTimeout(() => setIsCopied(false), 2000);
    } else {
      // Simüle edilmiş gönderim
      const recipient = shareMethod === 'email' ? patient.email : patient.phone;
      console.log(`Sending test link to ${recipient}: ${testUrl}`);
      setIsSent(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Test Paylaş - {patient.firstName} {patient.lastName}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Test Seç
            </label>
            <select
              value={selectedTest}
              onChange={(e) => setSelectedTest(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="">Test seçin</option>
              {tests.map((test) => (
                <option key={test.id} value={test.id}>
                  {test.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gönderim Yöntemi
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setShareMethod('email')}
                disabled={!patient.email}
                className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-lg border ${
                  shareMethod === 'email'
                    ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-400'
                    : 'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400'
                } ${!patient.email && 'opacity-50 cursor-not-allowed'}`}
              >
                <Mail className="w-4 h-4" />
                E-posta
              </button>
              <button
                onClick={() => setShareMethod('sms')}
                disabled={!patient.phone}
                className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-lg border ${
                  shareMethod === 'sms'
                    ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-400'
                    : 'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400'
                } ${!patient.phone && 'opacity-50 cursor-not-allowed'}`}
              >
                <Phone className="w-4 h-4" />
                SMS
              </button>
              <button
                onClick={() => setShareMethod('link')}
                className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-lg border ${
                  shareMethod === 'link'
                    ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:border-blue-400 dark:text-blue-400'
                    : 'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-400'
                }`}
              >
                <Link className="w-4 h-4" />
                Link
              </button>
            </div>
          </div>

          {shareMethod === 'email' && patient.email && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {patient.email}
            </p>
          )}

          {shareMethod === 'sms' && patient.phone && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {patient.phone}
            </p>
          )}

          <button
            onClick={handleShare}
            disabled={!selectedTest || (shareMethod === 'email' && !patient.email) || (shareMethod === 'sms' && !patient.phone)}
            className={`w-full flex items-center justify-center gap-2 p-2 rounded-lg ${
              isSent || isCopied
                ? 'bg-green-500 dark:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
            } text-white transition-colors ${
              (!selectedTest || (shareMethod === 'email' && !patient.email) || (shareMethod === 'sms' && !patient.phone)) && 
              'opacity-50 cursor-not-allowed'
            }`}
          >
            {isSent ? (
              <>
                <Check className="w-4 h-4" />
                Gönderildi
              </>
            ) : isCopied ? (
              <>
                <Check className="w-4 h-4" />
                Kopyalandı
              </>
            ) : (
              <>
                {shareMethod === 'link' ? (
                  <>
                    <Copy className="w-4 h-4" />
                    Linki Kopyala
                  </>
                ) : (
                  'Testi Paylaş'
                )}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}