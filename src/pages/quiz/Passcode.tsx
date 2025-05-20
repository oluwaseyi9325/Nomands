import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Passcode = () => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

    const VALID_PASSCODE = import.meta.env.VITE_TEST_CODE; // Replace with your actual passcode

  const handleSubmit = () => {
    if (passcode === VALID_PASSCODE) {
      localStorage.setItem('exam_passcode', passcode);
      setIsAnimating(true);
      setTimeout(() => navigate('/quiz'), 500);
    } else {
      setError('Invalid passcode');
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4
        bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
        transition-opacity duration-500 ease-in-out
        ${isAnimating ? 'opacity-0' : 'opacity-100'}
      `}
    >
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Welcome to Nomands!</h1>
        <p className="text-gray-700 mb-6">
          This is a <strong>JavaScript</strong> test lasting <strong>20 minutes</strong>.
          <br />
          Enter the passcode to start.
        </p>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 outline-indigo-500 focus:ring-2 focus:ring-indigo-400 mb-4 transition"
          placeholder="Enter passcode"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          disabled={isAnimating}
          autoFocus
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          disabled={isAnimating}
        >
          Start Exam
        </button>

        <p className="text-red-600 text-xs mt-4">
          The test will auto-submit when time expires.
        </p>
      </div>
    </div>
  );
};

export default Passcode;
