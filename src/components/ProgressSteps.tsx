import React from 'react';

interface Step {
  label: string;
  duration: string;
  isActive: boolean;
}

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { label: 'Upload Resume', duration: '2 mins', isActive: currentStep >= 0 },
    { label: 'Complete Profile', duration: '5 mins', isActive: currentStep >= 1 },
  ];

  return (
    <div className="w-full flex gap-4 mt-8">
      {steps.map((step, index) => (
        <div key={step.label} className="flex-1">
          <div
            className={`h-2 rounded-full ${
              step.isActive ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm font-medium">{step.label}</span>
            <span className="text-sm text-muted-foreground">{step.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;