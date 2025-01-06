import React from 'react';

interface Option {
  label: string;
  value: string;
  description?: string;
}

interface RadioQuestionProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const RadioQuestion: React.FC<RadioQuestionProps> = ({ options, value, onChange }) => {
  return (
    <div className="space-y-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-start p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <input
            type="radio"
            name="radio-option"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
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
  );
};

export default RadioQuestion;