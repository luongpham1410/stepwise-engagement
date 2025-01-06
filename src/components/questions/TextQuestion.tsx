import React from 'react';

interface TextQuestionProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextQuestion: React.FC<TextQuestionProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
    />
  );
};

export default TextQuestion;