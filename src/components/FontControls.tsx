import React from 'react';
import { Type } from 'lucide-react';

interface FontControlsProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
}

export function FontControls({ fontSize, onFontSizeChange }: FontControlsProps) {
  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
      <Type className="w-5 h-5" />
      <select
        value={fontSize}
        onChange={(e) => onFontSizeChange(Number(e.target.value))}
        className="p-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
      >
        <option value={14}>Küçük</option>
        <option value={16}>Normal</option>
        <option value={18}>Büyük</option>
        <option value={20}>Çok Büyük</option>
      </select>
    </div>
  );
}