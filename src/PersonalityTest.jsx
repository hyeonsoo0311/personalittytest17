
import React, { useState } from 'react';
import questions from './questions';
import { calculateResultType } from './calculateresult';
import results from './results';

export default function TestPage() {
  const [answers, setAnswers] = useState(Array(60).fill(0));
  const [step, setStep] = useState(0);
  const [resultType, setResultType] = useState(null);

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[step] = value;
    setAnswers(updated);
    if (step < 59) {
      setStep(step + 1);
    } else {
      const type = calculateResultType(updated);
      console.log("🎯 계산된 결과유형:", type);
      setResultType(type);
    }
  };

  if (resultType) {
    const result = results[resultType];

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">당신의 유형: {resultType}</h2>

        {result ? (
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {result.rawText}
          </pre>
        ) : (
          <div className="text-red-500 mt-4">
            ❗ 결과 데이터를 찾을 수 없습니다.<br />
            <strong>resultType:</strong> {resultType} <br />
            <strong>results.js</strong> 파일의 키를 다시 확인해보세요.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">성격유형 테스트</h1>
      <p className="mb-4">문항 {step + 1}/60</p>
      <p className="mb-6">{questions[step]}</p>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map(val => (
          <button
            key={val}
            onClick={() => handleAnswer(val)}
            className="py-2 px-3 rounded bg-blue-100 hover:bg-blue-300"
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">성격유형 테스트</h1>
      <p className="mb-4">문항 {step + 1}/60</p>
      <p className="mb-6">{questions[step]}</p>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map(val => (
          <button
            key={val}
            onClick={() => handleAnswer(val)}
            className="py-2 px-3 rounded bg-blue-100 hover:bg-blue-300"
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

