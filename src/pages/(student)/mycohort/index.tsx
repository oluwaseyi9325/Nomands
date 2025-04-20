'use client';

import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { GraduationCap, Layers3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const allCohorts = [
    {
      id: 'FE-APR25',
      name: 'Frontend Engineering - April 2025',
      startDate: '2025-04-01',
      mentor: 'Mr. Adewale',
      description: 'Learn how to build stunning web interfaces using HTML, CSS, and React.',
      modules: 8,
    },
    {
      id: 'BE-MAY25',
      name: 'Backend Engineering - May 2025',
      startDate: '2025-05-05',
      mentor: 'Mrs. Kemi',
      description: 'Master the server side with Node.js, Express, and database integration.',
      modules: 10,
    },
    {
      id: 'DS-JUN25',
      name: 'Data Science - June 2025',
      startDate: '2025-06-10',
      mentor: 'Dr. Smith',
      description: 'Dive into data analysis, machine learning, and data visualization.',
      modules: 12,
    },
    {
      id: 'AI-JUL25',
      name: 'AI Engineering - July 2025',
      startDate: '2025-07-15',
      mentor: 'Prof. Akin',
      description: 'Explore deep learning, natural language processing, and AI systems.',
      modules: 15,
    },
    {
      id: 'UI-UX-AUG25',
      name: 'UI/UX Design - August 2025',
      startDate: '2025-08-05',
      mentor: 'Ms. Grace',
      description: 'Understand user behavior and craft intuitive design experiences.',
      modules: 7,
    },
  ];
  

// Enrolled cohort IDs
const registeredCohortIds = ['FE-APR25', 'UI-UX-AUG25'];

const AllCohortsPage = () => {
    // Sort so enrolled cohorts appear first
    const sortedCohorts = [...allCohorts].sort((a, b) => {
        const aEnrolled = registeredCohortIds.includes(a.id);
        const bEnrolled = registeredCohortIds.includes(b.id);
        return aEnrolled === bEnrolled ? 0 : aEnrolled ? -1 : 1;
    });

    return (
        <div className="p-6 min-h-screen bg-gray-50 space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <GraduationCap className="w-7 h-7 text-blue-600" />
                    All Cohorts
                </h1>
                <p className="text-gray-600 text-sm">
                    Showing {allCohorts.length} cohort{allCohorts.length > 1 ? 's' : ''}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                {sortedCohorts.map((cohort) => {
                    const isEnrolled = registeredCohortIds.includes(cohort.id);
                    const borderColor = isEnrolled ? 'border-green-500' : 'border-gray-200';

                    return (
                        <div key={cohort.id} className="relative">
                            {/* Enrolled badge */}
                            {isEnrolled && (
                                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Enrolled
                                </div>
                            )}

                            <Card className={`p-5 rounded-xl border-2 ${borderColor} bg-white flex flex-col justify-between h-full`}>
                                <div className="space-y-2 flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">{cohort.name}</h2>
                                    <p className="text-sm text-gray-600">{cohort.description}</p>

                                    <div className="text-sm text-gray-700 space-y-1">
                                        <p><strong>Cohort ID:</strong> {cohort.id}</p>
                                        <p><strong>Start Date:</strong> {format(new Date(cohort.startDate), 'MMM d, yyyy')}</p>
                                        <p><strong>Mentor:</strong> {cohort.mentor}</p>
                                        <p className="flex items-center gap-1">
                                            <Layers3 className="w-4 h-4 text-blue-500" />
                                            <strong>Modules:</strong> {cohort.modules}
                                        </p>
                                    </div>
                                </div>

                                <Link to={`${cohort.id}`}
                                    className={`mt-4 px-4 py-2 text-center text-sm rounded-md font-medium ${isEnrolled
                                            ? 'bg-green-600 text-white hover:bg-green-700'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {isEnrolled ? 'Continue Cohort' : 'View'}
                                </Link>
                            </Card>
                        </div>
                    );
                })}

          
            </div>
        </div>
    );
};

export default AllCohortsPage;
