import withAuth from '../hoc/withAuth'; 
import '../styles/program.css';
import React, { useState } from 'react';
import DaysAndMuscleGroups from '../components/DaysAndMuscleGroups';

const Program = () => {
  const [isCustomProgram, setIsCustomProgram] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [programData, setProgramData] = useState({});

  const handleSelectCustomProgram = () => {
    setIsCustomProgram(true);
  };

  const handleNextStep = (data) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="program-page">
      {!isCustomProgram ? (
        <div className="program-selection">
          <h2>Create a New Program</h2>
          <button onClick={handleSelectCustomProgram}>Create Custom Program</button>
          <button onClick={() => alert('Templates are coming soon!')}>Choose from Template</button>
        </div>
      ) : (
        <div className="custom-program-creation">
          {currentStep === 1 && <DaysAndMuscleGroups onNext={handleNextStep} />}
          {/* Future steps will go here */}
        </div>
      )}
    </div>
  );
};

export default withAuth(Program); 
