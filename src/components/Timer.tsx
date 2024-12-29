import React, { useState, useEffect } from 'react';
import { Clock, Pause, Play, RotateCcw } from 'lucide-react';

export function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Varsayılan olarak duraklatılmış

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    if (window.confirm('Süreyi sıfırlamak istediğinizden emin misiniz?')) {
      setTime(0);
      setIsRunning(false); // Sıfırlandıktan sonra otomatik olarak durur
    }
  };

  return (
    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <Clock className="w-5 h-5" />
      <span className="font-mono">{formatTime(time)}</span>
      <div className="flex gap-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={isRunning ? 'Duraklat' : 'Başlat'}
        >
          {isRunning ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
        <button
          onClick={handleReset}
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Sıfırla"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
