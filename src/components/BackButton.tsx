import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string; // Opsiyonel olarak 'to' prop'u alabiliriz
}

export function BackButton({ to }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to, { replace: true }); // 'replace' parametresi ile geçmişi geçersiz kılıyoruz
    } else {
      navigate('/', { replace: true }); // Ana sayfaya yönlendiriyoruz
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Geri</span>
    </button>
  );
}
