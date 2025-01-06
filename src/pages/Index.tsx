import React, { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import Button from '@/components/Button';
import { useToast } from '@/components/ui/use-toast';
import CountrySelect from '@/components/questions/CountrySelect';
import RadioQuestion from '@/components/questions/RadioQuestion';
import TextQuestion from '@/components/questions/TextQuestion';

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
    type: 'country-select'
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
      },
      {
        label: "I can start within 24 hours",
        description: 'I am available to begin work immediately.',
        value: 'immediate'
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
          {question.type === 'country-select' && (
            <CountrySelect
              value={formData[question.id as keyof FormData]}
              onChange={(value) => handleInputChange(question.id as keyof FormData, value)}
            />
          )}

          {question.type === 'radio' && (
            <RadioQuestion
              options={question.options || []}
              value={formData[question.id as keyof FormData]}
              onChange={(value) => handleInputChange(question.id as keyof FormData, value)}
            />
          )}

          {question.type === 'text' && (
            <TextQuestion
              value={formData[question.id as keyof FormData]}
              onChange={(value) => handleInputChange(question.id as keyof FormData, value)}
              placeholder={question.placeholder}
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