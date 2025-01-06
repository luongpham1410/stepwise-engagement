import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface WelcomeScreenProps {
  onNext: () => void;
  totalSteps: number;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext, totalSteps }) => {
  return (
    <div className="max-w-4xl mx-auto pt-12">
      <ProgressBar currentStep={1} totalSteps={totalSteps} />
      <div className="min-h-[500px] flex flex-col items-center justify-center space-y-8 bg-white rounded-lg p-8 shadow-lg">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Get hired for <span className="text-primary">operation</span><br />
            with Mercor.
          </h1>
          <p className="text-gray-600 text-lg">
            Join 300,000+ professionals in landing your remote dream job.
          </p>
        </div>

        <div className="w-full max-w-md bg-card rounded-lg p-8 text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Get started</h2>
          <p className="text-gray-500">
            Get considered for hundreds of opportunities<br />with one application
          </p>
          <Button 
            onClick={onNext}
            className="w-full"
            size="lg"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;