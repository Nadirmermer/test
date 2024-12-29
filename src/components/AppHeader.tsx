import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { Timer } from './Timer';
import { Settings } from './Settings';
import { useApp } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

export function AppHeader() {
  const { fontSize, setFontSize, isDark, setIsDark, handleReset, state } =
    useApp();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (
      window.confirm(
        'Ana sayfaya dönmek istediğinizden emin misiniz? Tüm ilerlemeniz silinecektir.'
      )
    ) {
      handleReset();
      navigate('/');
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:1nadirmermer@gmail.com';
  };

  return (
    <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between mb-8">
      <div className="flex items-center">
        <button
          onClick={handleLogoClick}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
            Tanı Değerlendirme Sistemi
          </h1>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Timer />
        <Settings
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
      </div>
      <button
        onClick={handleEmailClick}
        className="fixed bottom-2 right-4 text-sm text-gray-600 dark:text-gray-400 opacity-75 hover:opacity-100 transition-opacity"
      >
        Psk. Nadir MERMER © 2025
      </button>
    </div>
  );
}
