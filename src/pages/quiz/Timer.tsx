import { useEffect, useState } from 'react';
export default function Timer({ duration, onTimeUp }:any) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const format = (s:any) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  return <div className="text-right text-red-600 font-bold">Time Left: {format(timeLeft)}</div>;
}
