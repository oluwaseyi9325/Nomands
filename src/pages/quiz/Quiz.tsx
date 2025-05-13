


import { useState } from 'react';
import Timer from './Timer';
import axios from 'axios';
import { questions } from './questions';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (qId: any, option: any) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = async () => {
    let total = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) total += 2;
    });
    setScore(total);
    setSubmitted(true);

    if (email) {
      setIsLoading(true);
      try {
        await axios.post('https://babtech-server.onrender.com/send-score', {
          email,
          score: total,
        });
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">Test Submitted!</h2>
        <p className="text-lg mt-2">Your score: {score} / 30</p>
        <p className="mt-2">An email has been sent to {email}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 shadow rounded bg-white">
      <Timer duration={60 * 15} onTimeUp={handleSubmit} />

      {/* Email input */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Your Email</label>
        <input
          type="email"
          className="w-full border rounded p-2"
          placeholder="student@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Question navigation box */}
      <div className="mb-6 flex flex-wrap gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-8 text-sm font-bold rounded-full ${
              index === current ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Question box */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
        {q.options.map((opt, idx) => (
          <div key={idx} className="mb-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleAnswer(q.id, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation and Submit */}
      <div className="flex justify-between items-center mt-6 flex-wrap gap-2">
        <button
          onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
          disabled={current === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>

        <button
          onClick={() => setCurrent((prev) => Math.min(questions.length - 1, prev + 1))}
          disabled={current === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Loading message */}
      {isLoading && (
        <div className="mt-6 text-center text-blue-500 font-medium animate-pulse">
          Submitting your score...
        </div>
      )}
    </div>
  );
}
