'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function ViewCohortPage() {
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const cohortDetails = {
    id: 'FE-APR25',
    name: 'Frontend Engineering - April 2025',
    startDate: '2025-04-01',
    mentor: 'Mr. Adewale',
    description: 'Learn to build stunning web interfaces using HTML, CSS, and React.',
    modules: Array.from({ length: 10 }, (_, i) => {
        const id = `mod${i + 1}`;
        const titles = [
          'HTML & Semantics',
          'CSS & Layouts',
          'JavaScript Basics',
          'DOM Manipulation',
          'React Fundamentals',
          'State & Props',
          'React Hooks',
          'API Integration',
          'Testing & Debugging',
          'Deployment & Optimization',
        ];
      
        const taken = i < 5; // First 5 modules are taken
        const questions = Array.from({ length: 20 }, (_, qIdx) => ({
          id: `q${qIdx + 1}`,
          question: `Question ${qIdx + 1} for ${titles[i]}`,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: Math.floor(Math.random() * 4),
        }));
      
        const score = taken ? Math.floor(Math.random() * 21) : null;
      
        return {
          id,
          title: titles[i],
          description: `Module ${i + 1} on ${titles[i]}`,
          taken,
          score,
          total: 20,
          questions: taken ? questions : [],
        };
      })
      
  };

  const cohort = cohortDetails;

  const handleNext = () => {
    if (selectedModule && currentQ < selectedModule.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (selectedModule && currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
    }
  };

  const handleOptionClick = (index: number) => {
    setAnswers({ ...answers, [currentQ]: index });
  };

  const handleQuestionJump = (index: number) => {
    setCurrentQ(index);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (selectedModule) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [selectedModule]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const optionPrefix = ['a.', 'b.', 'c.', 'd.'];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Left side - Cohort & Modules */}
      <div className="lg:w-2/5 space-y-4">
        <div className="bg-white rounded-xl border p-5 shadow-sm">
          <h2 className="text-2xl font-bold">{cohort.name}</h2>
          <p className="text-gray-600 text-sm">{cohort.description}</p>
          <p className="text-sm mt-2 text-gray-500">
            Start Date: {format(new Date(cohort.startDate), 'PPP')} | Mentor: {cohort.mentor}
          </p>
        </div>

        {/* Modules */}
        <div className="grid gap-4">
          {cohort.modules.map((mod) => (
            <div
              key={mod.id}
              className={`p-4 rounded-lg border flex justify-between items-start cursor-pointer transition
                ${mod.taken ? 'hover:shadow' : ''}
                ${
                  selectedModule?.id === mod.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'bg-white'
                }`}
              onClick={() => mod.taken && setSelectedModule(mod)}
            >
              <div>
                <h3 className="font-semibold text-lg">{mod.title}</h3>
                <p className="text-sm text-gray-600">{mod.description}</p>
                <div className="text-sm mt-2">
                  {mod.taken ? (
                    <span className="text-green-600 font-semibold">
                      ✅ Taken — Score: {mod.score}/{mod.total}
                    </span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">⏳ Not Taken</span>
                  )}
                </div>
              </div>
              <button
                className={`px-3 py-1 text-sm rounded-md ${
                  mod.taken ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {mod.taken ? 'View' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - Questions */}
      {selectedModule && selectedModule.taken && (
              <div className="lg:w-3/5 flex flex-col">
                   <div className=" bg-white rounded-xl p-6 border shadow-md  gap-5">
          {/* Header */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>
              Question {currentQ + 1} of {selectedModule.questions.length}
            </span>
            <span className="text-red-500 font-bold">⏳ {formatTime(timeLeft)}</span>
          </div>

          {/* Question */}
          <div className="font-semibold text-gray-800 text-lg">
            {selectedModule.questions[currentQ].question}
          </div>

          {/* Options */}
          <div className="space-y-2">
            {selectedModule.questions[currentQ].options.map((opt: string, idx: number) => (
              <div
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`border px-3 py-2 rounded-md text-sm cursor-pointer transition
                  ${
                    answers[currentQ] === idx
                      ? 'bg-blue-100 border-blue-600 text-blue-800'
                      : 'hover:bg-gray-100'
                  }`}
              >
                <span className="font-semibold mr-2">{optionPrefix[idx] || `${String.fromCharCode(97 + idx)}.`}</span>
                {opt}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={currentQ === 0}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentQ === selectedModule.questions.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Question Number Grid */}
          <div className="mt-6 grid grid-cols-10 gap-2">
            {selectedModule.questions.map((_:any, idx:any) => (
              <div
                key={idx}
                onClick={() => handleQuestionJump(idx)}
                className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-full border cursor-pointer transition
                  ${
                    currentQ === idx
                      ? 'bg-blue-600 text-white border-blue-600'
                      : answers[idx] !== undefined
                      ? 'bg-green-100 text-green-800 border-green-400'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
       </div>
      )}
    </div>
  );
}
