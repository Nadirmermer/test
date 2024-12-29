import React from 'react';
import { Settings as SettingsIcon, X } from 'lucide-react';

interface SettingsProps {
  isDark: boolean;
  onToggleTheme: () => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

export function Settings({ isDark, onToggleTheme, fontSize, onFontSizeChange }: SettingsProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Ayarlar"
      >
        <SettingsIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">Ayarlar</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Tema</span>
                <button
                  onClick={onToggleTheme}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isDark ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDark ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="space-y-2">
                <span className="text-gray-700 dark:text-gray-300">Yazı Boyutu</span>
                <select
                  value={fontSize}
                  onChange={(e) => onFontSizeChange(Number(e.target.value))}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                  <option value={7}>Küçük</option>
                  <option value={10}>Normal</option>
                  <option value={16}>Büyük</option>
                  <option value={25}>Çok Büyük</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}