import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, FileText, CreditCard } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome back, Lng</h1>
          <p className="text-gray-600">Important tasks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Practice interviews card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">Practice interviews</h2>
                <p className="text-gray-600 text-sm">
                  Prepare for your next job with 150+ live interviews ready to take
                </p>
              </div>
              <Video className="text-gray-400" />
            </div>
            <Button className="bg-primary">Start now</Button>
          </div>

          {/* Interview Performance card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">Interview Performance</h2>
                <p className="text-gray-600 text-sm">
                  We've scored your interview and left suggestions for improvement
                </p>
              </div>
              <Video className="text-gray-400" />
            </div>
            <Button className="bg-primary">View feedback</Button>
          </div>

          {/* Resume Improvement card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">Resume Improvement</h2>
                <p className="text-gray-600 text-sm">
                  We've graded your resume and left suggestions to help you improve it.
                </p>
              </div>
              <FileText className="text-gray-400" />
            </div>
            <Button className="bg-primary">Improve now</Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">My jobs</h2>
            <Button variant="ghost" className="text-primary">Work preferences</Button>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center space-y-2">
            <h3 className="font-semibold">Your application is being reviewed by our talent team</h3>
            <p className="text-gray-600">It may take up to 48 hours to evaluate your application</p>
          </div>

          <div className="text-center py-12 space-y-2">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold">You don't have any jobs just yet</h3>
            <p className="text-gray-600">You'll be notified when companies reach out to you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;