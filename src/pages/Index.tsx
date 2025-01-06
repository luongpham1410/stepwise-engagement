import React, { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/Button';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
  citizenship: string;
  availability: string;
  startTime: string;
  salary: string;
  englishLevel: string;
}

const questions = [
  {
    id: 'citizenship',
    title: "Which country or countries do you currently hold citizenship in?",
    subtitle: "You can change this anytime.",
    type: 'select',
    options: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Other']
  },
  {
    id: 'availability',
    title: "What's your work availability?",
    subtitle: "You can change this anytime.",
    type: 'radio',
    options: [
      {
        label: 'Full time',
        description: 'I can start working at least 8 hours per day as my primary job.',
        value: 'full-time'
      },
      {
        label: 'Part time',
        description: 'I can start working at least 4 hours per day.',
        value: 'part-time'
      },
      {
        label: "I'm flexible",
        description: 'I can work both full time or part time.',
        value: 'flexible'
      }
    ]
  },
  {
    id: 'startTime',
    title: "If accepted, when can you start the position?",
    subtitle: "Please specify the notice period required.",
    type: 'text',
    placeholder: 'Enter number of weeks'
  },
  {
    id: 'salary',
    title: "Please set your desired monthly salary",
    subtitle: "Enter your expected salary in USD.",
    type: 'text',
    placeholder: 'USD'
  },
  {
    id: 'englishLevel',
    title: "What is your level of English proficiency?",
    type: 'radio',
    options: [
      { label: 'Native', value: 'native' },
      { label: 'Full Professional Proficiency', value: 'full' },
      { label: 'Minimum Professional Proficiency', value: 'minimum' },
      { label: 'Limited Working Proficiency', value: 'limited' },
      { label: 'Elementary Proficiency', value: 'elementary' }
    ]
  }
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    citizenship: '',
    availability: '',
    startTime: '',
    salary: '',
    englishLevel: ''
  });
  const { toast } = useToast();

  const handleInputChange = (id: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    const currentQuestion = questions[currentStep];
    if (!formData[currentQuestion.id as keyof FormData]) {
      toast({
        title: "Please answer the question",
        description: "This field is required to proceed.",
        variant: "destructive"
      });
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      toast({
        title: "Success!",
        description: "Your responses have been submitted.",
      });
      console.log('Form submitted:', formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentStep];

    return (
      <QuestionCard 
        title={question.title}
        subtitle={question.subtitle}
        className="min-h-[400px] flex flex-col"
      >
        <div className="flex-grow">
          {question.type === 'select' && (
            <select
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={formData[question.id as keyof FormData]}
              onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
            >
              <option value="">Select a country</option>
              {question.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          )}

          {question.type === 'radio' && (
            <div className="space-y-4">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-start p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={formData[question.id as keyof FormData] === option.value}
                    onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
                    className="mt-1 mr-4"
                  />
                  <div>
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-gray-500">{option.description}</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          )}

          {question.type === 'text' && (
            <input
              type="text"
              placeholder={question.placeholder}
              value={formData[question.id as keyof FormData]}
              onChange={(e) => handleInputChange(question.id as keyof FormData, e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          )}
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="secondary"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {currentStep === questions.length - 1 ? 'Submit' : 'Next step'}
          </Button>
        </div>
      </QuestionCard>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-2xl mx-auto pt-12">
        <ProgressBar currentStep={currentStep + 1} totalSteps={questions.length} />
        {renderQuestion()}
      </div>
    </div>
  );
};

export default Index;