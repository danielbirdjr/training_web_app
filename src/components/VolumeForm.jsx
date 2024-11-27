import React, { useState } from 'react';

const VolumeForm = ({ program }) => {
    const [volumeData, setVolumeData] = useState([]);

    const handleVolumeChange = (dayIndex, field, value) => {
        const updatedVolumeData = [...volumeData];
        updatedVolumeData[dayIndex] = {
            ...updatedVolumeData[dayIndex],
            [field]: value,
        };
        setVolumeData(updatedVolumeData);
    };

    const handleSubmit = () => {
        // Handle the submission of the volume data to Firestore
        console.log('Volume Data Saved:', volumeData);
    };

    return (
        <div>
            <h2>Enter Volume Data</h2>
            {program.days.map((day, index) => (
                <div key={index}>
                    <h3>Day {index + 1}</h3>
                    <input
                        type="number"
                        placeholder="Sets"
                        onChange={(e) => handleVolumeChange(index, 'sets', e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Reps"
                        onChange={(e) => handleVolumeChange(index, 'reps', e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Intensity"
                        onChange={(e) => handleVolumeChange(index, 'intensity', e.target.value)}
                    />
                </div>
            ))}
            <button onClick={handleSubmit}>Save Volume Data</button>
        </div>
    );
};

export default VolumeForm;
