


// import { useState,useEffect } from 'react';
// import Timer from './Timer';
// import axios from 'axios';
// import { questions } from './questions';
// import { useNavigate } from 'react-router-dom'

// export default function Quiz() {
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState<any>({});
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [score, setScore] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAnswer = (qId: any, option: any) => {
//     setAnswers({ ...answers, [qId]: option });
//   };

//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('Exam started');
//     const passcode = localStorage.getItem('exam_passcode');
//     console.log('Passcode:', passcode);
//     if (!passcode) {
//       navigate('/quiz-pass');
//     }
//   }, [navigate]);

//   const handleSubmit = async () => {
//     let total = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.answer) total += 2;
//     });
//     setScore(total);
//     setSubmitted(true);

//     if (email) {
//       setIsLoading(true);
//       try {
//         await axios.post('https://babtech-server.onrender.com/send-score', {
//           email,
//           score: total,
//         });
//       } catch (error) {
//         console.error('Error sending email:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="text-center mt-10">
//         <h2 className="text-xl font-bold">Test Submitted!</h2>
//         {/* <p className="text-lg mt-2">Your score: {score} / {questions.length * 2}</p> */}
//         <p className="text-lg mt-2">
//           Your score: {score} / {questions.length * 2} (
//           {Math.round((score / (questions.length * 2)) * 100)}%)
//         </p>
//         <p className="mt-2">An email has been sent to {email}</p>
//       </div>
//     );
//   }

//   const q = questions[current];

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 shadow rounded bg-white">
//       <Timer duration={60 * 22} onTimeUp={handleSubmit} />
//       {/* Email input */}
//       <div className="mb-4">
//         <label className="block mb-1 text-sm">Your Email</label>
//         <input
//           type="email"
//           className="w-full border rounded p-2"
//           placeholder="student@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       {/* Question navigation box */}
//       <div className="mb-6 flex flex-wrap gap-2">
//         {questions.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-8 h-8 text-sm font-bold rounded-full ${index === current ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
//               }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       {/* Question box */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
//         {q.options.map((opt, idx) => (
//           <div key={idx} className="mb-1">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name={`q${q.id}`}
//                 value={opt}
//                 checked={answers[q.id] === opt}
//                 onChange={() => handleAnswer(q.id, opt)}
//                 className="mr-2"
//               />
//               {opt}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Navigation and Submit */}
//       <div className="flex justify-between items-center mt-6 flex-wrap gap-2">
//         <button
//           onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
//           disabled={current === 0}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>

//         <button
//           onClick={handleSubmit}
//           className="px-4 py-2 bg-green-600 text-white rounded"
//         >
//           Submit
//         </button>

//         <button
//           onClick={() => setCurrent((prev) => Math.min(questions.length - 1, prev + 1))}
//           disabled={current === questions.length - 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {/* Loading message */}
//       {isLoading && (
//         <div className="mt-6 text-center text-blue-500 font-medium animate-pulse">
//           Submitting your score...
//         </div>
//       )}
//     </div>
//   );
// }




// import  { useState, useEffect } from 'react';
// import Timer from './Timer'; // Assume Timer props: duration (number), onTimeUp (fn)
// import { questions } from './questions'; // questions array type is defined below
// import { useNavigate } from 'react-router-dom';

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   answer: string;
// }

// type Answers = Record<number, string>;

// export default function Quiz() {
//   const [current, setCurrent] = useState<number>(0);
//   const [answers, setAnswers] = useState<Answers>({});
//   const [email, setEmail] = useState<string>('');
//   const [submitted, setSubmitted] = useState<boolean>(false);
//   const [score, setScore] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [animating, setAnimating] = useState<boolean>(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const passcode = localStorage.getItem('exam_passcode');
//     if (!passcode) {
//       navigate('/quiz-pass');
//     }
//   }, [navigate]);

//   const handleAnswer = (qId: number, option: string) => {
//     setAnswers({ ...answers, [qId]: option });
//   };

//   const handleSubmit = async () => {
//     let total = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.answer) total += 2;
//     });
//     setScore(total);
//     setSubmitted(true);

//     if (email) {
//       setIsLoading(true);
//       try {
//         await fetch('https://babtech-server.onrender.com/send-score', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email, score: total }),
//         });
//       } catch (error) {
//         console.error('Error sending email:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const changeQuestion = (newIndex: number) => {
//     if (newIndex === current) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrent(newIndex);
//       setAnimating(false);
//     }, 300); // animation duration matches CSS
//   };

//   if (submitted) {
//     return (
//       <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
//         <h2 className="text-2xl font-bold mb-4">Test Submitted!</h2>
//         <p className="text-lg mb-2">
//           Your score: {score} / {questions.length * 2} (
//           {Math.round((score / (questions.length * 2)) * 100)}%)
//         </p>
//         {email && <p className="text-gray-700">An email has been sent to {email}</p>}
//       </div>
//     );
//   }

//   const q: Question = questions[current];

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-md flex flex-col gap-6">
//       <Timer duration={60 * 20} onTimeUp={handleSubmit} />

//       {/* Email Input */}
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Your Email (optional)
//         </label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="student@example.com"
//           className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//       </div>

//       {/* Question Navigation */}
//       <div className="flex flex-wrap gap-2 justify-center">
//         {questions.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => changeQuestion(idx)}
//             className={`w-9 h-9 rounded-full text-sm font-semibold ${
//               idx === current ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
//             } transition-colors duration-300`}
//             aria-label={`Question ${idx + 1}`}
//           >
//             {idx + 1}
//           </button>
//         ))}
//       </div>

//       {/* Question Container with fade animation */}
//       <div
//         className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
//         aria-live="polite"
//         aria-atomic="true"
//       >
//         <h3 className="text-xl font-semibold mb-4">{q.question}</h3>
//         <form>
//           {q.options.map((opt, idx) => (
//             <label
//               key={idx}
//               className="flex items-center mb-3 cursor-pointer select-none"
//               htmlFor={`q${q.id}_opt${idx}`}
//             >
//               <input
//                 type="radio"
//                 id={`q${q.id}_opt${idx}`}
//                 name={`q${q.id}`}
//                 value={opt}
//                 checked={answers[q.id] === opt}
//                 onChange={() => handleAnswer(q.id, opt)}
//                 className="mr-3 accent-indigo-600"
//               />
//               <span className="text-gray-800">{opt}</span>
//             </label>
//           ))}
//         </form>
//       </div>

//       {/* Controls */}
//       <div className="flex flex-wrap justify-between gap-4">
//         <button
//           onClick={() => changeQuestion(Math.max(0, current - 1))}
//           disabled={current === 0 || animating}
//           className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
//         >
//           Previous
//         </button>

//         <button
//           onClick={handleSubmit}
//           disabled={animating}
//           className="px-6 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
//         >
//           Submit
//         </button>

//         <button
//           onClick={() => changeQuestion(Math.min(questions.length - 1, current + 1))}
//           disabled={current === questions.length - 1 || animating}
//           className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
//         >
//           Next
//         </button>
//       </div>

//       {/* Loading indicator */}
//       {isLoading && (
//         <div className="text-center text-indigo-600 font-semibold animate-pulse">
//           Submitting your score...
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import Timer from './Timer';
import axios from 'axios';
import { questions } from './questions';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Check if already submitted
  useEffect(() => {
    const passcode = localStorage.getItem('exam_passcode');
    const isSubmittedLocal = localStorage.getItem('isSubmitted');

    if (!passcode) {
      navigate('/quiz-pass');
    }

    if (isSubmittedLocal === 'true') {
      navigate('/quiz-unauthorized'); // Page for "You’ve already taken this test..."
    }
  }, [navigate]);

  const handleAnswer = (qId: number, option: string) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      alert('Please enter your email before submitting.');
      return;
    }

    let total = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) total += 2;
    });

    setIsLoading(true);
    try {
      await axios.post('https://babtech-server.onrender.com/send-score', {
        email,
        score: total,
      });

      setScore(total);
      setSubmitted(true);
      localStorage.setItem('isSubmitted', 'true');
    } catch (error) {
      alert('Error submitting score. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-10 p-6 max-w-xl mx-auto bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2">Test Submitted Successfully!</h2>
        <p className="text-lg mt-2 font-medium">
          Your score: {score} / {questions.length * 2} (
          {Math.round((score / (questions.length * 2)) * 100)}%)
        </p>
        <p className="mt-4 text-gray-600">
          Check your email <strong>{email}</strong> for more detailed analysis.
        </p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 sm:p-6 bg-white shadow rounded">
      <Timer duration={60 * import.meta.env.VITE_QUIZ_TIME} onTimeUp={handleSubmit} />

      {/* Email Input */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Your Email</label>
        <input
          type="email"
          className="w-full border rounded p-2"
          placeholder="student@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Question Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-8 text-sm font-bold rounded-full transition ${
              index === current
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Question Box */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
        {q.options.map((opt, idx) => (
          <label key={idx} className="block mb-2">
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
        ))}
      </div>

      {/* Navigation & Submit */}
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
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => Math.min(questions.length - 1, prev + 1))
          }
          disabled={current === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Loading message */}
      {isLoading && (
        <p className="mt-4 text-center text-blue-600 font-medium animate-pulse">
          Please wait, submitting your test...
        </p>
      )}
    </div>
  );
}
