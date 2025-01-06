import React from 'react';
import QuestionCard from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import CountrySelect from '@/components/questions/CountrySelect';
import RadioQuestion from '@/components/questions/RadioQuestion';
import TextQuestion from '@/components/questions/TextQuestion';
import { Checkbox } from '@/components/ui/checkbox';

interface QuestionRendererProps {
  question: any;
  formData: any;
  handleInputChange: (id: string, value: string | boolean) => void;
  handleNext: () => void;
  handleBack: () => void;
  currentStep: number;
  totalSteps: number;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  formData,
  handleInputChange,
  handleNext,
  handleBack,
  currentStep,
  totalSteps,
}) => {
  if (question.type === 'final') {
    return (
      <QuestionCard 
        title={question.title}
        className="min-h-[400px] flex flex-col"
      >
        <div className="flex-grow space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Important things to know</h3>
            {question.disclaimers.map((disclaimer: string, index: number) => (
              <p key={index} className="text-muted-foreground">{disclaimer}</p>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="disclaimers" 
              checked={formData.disclaimerAccepted}
              onCheckedChange={(checked) => 
                handleInputChange('disclaimerAccepted', checked === true)
              }
            />
            <label 
              htmlFor="disclaimers" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and understood the above disclaimers
            </label>
          </div>
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
            Complete
          </Button>
        </div>
      </QuestionCard>
    );
  }

  return (
    <QuestionCard 
      title={question.title}
      subtitle={question.subtitle}
      className="min-h-[400px] flex flex-col"
    >
      <div className="flex-grow">
        {question.type === 'country-select' && (
          <CountrySelect
            value={formData[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        )}

        {question.type === 'radio' && (
          <RadioQuestion
            options={question.options || []}
            value={formData[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
          />
        )}

        {question.type === 'text' && (
          <TextQuestion
            value={formData[question.id]}
            onChange={(value) => handleInputChange(question.id, value)}
            placeholder={question.placeholder}
          />
        )}
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="secondary"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === totalSteps - 1 ? 'Submit' : 'Next step'}
        </Button>
      </div>
    </QuestionCard>
  );
};

export default QuestionRenderer;
