import React, { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import DayComponent from '../../components/DayComponent';
import AddDayButtonComponent from '../../components/AddDayButtonComponent';
import { FiMoreHorizontal } from "react-icons/fi";
import { db, auth } from '../../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';
import '../../styles/program/custom.css';

const CustomProgram = () => {
    const [days, setDays] = useState([{}]); // Start with two days by default
    const [programTitle, setProgramTitle] = useState("Untitled program");

    const handleAddDay = () => {
        setDays([...days, {}]);
    };

    const handleDeleteDay = (index) => {
        const updatedDays = days.filter((_, i) => i !== index);
        setDays(updatedDays); 
    };

    const handleTitleChange = (e) => setProgramTitle(e.target.value);

    const handleCreateOrSave = async () => {
        try {
            const user = auth.currentUser; 
            if (user) {
                const programData = {
                    title: programTitle,
                    days: days,
                    createdAt: new Date(),
                };
                await addDoc(collection(db, `users/${user.uid}/programs`), programData);
                console.log("Program saved successfully!");
            } else {
                console.log("User not authenticated");
            }
        } catch (error) {
            console.error("Error saving program:", error);
        }
    };

    return (
        <>
            <div className="top-bar">
                <input 
                    className="program-title-input" 
                    value={programTitle} 
                    onChange={handleTitleChange}
                />
                <div className='top-bar-button-and-options'>
                    <button onClick={handleCreateOrSave} className="create-button">Create program</button>
                    <button className="options-button">
                        <FiMoreHorizontal />
                    </button>
                </div>
            </div>

            <div className="custom-program-creation-page">
                <div className="days-container">
                    {days.map((_, index) => (
                        <DayComponent key={index} onDelete={() => handleDeleteDay(index)} />
                    ))}
                    <AddDayButtonComponent onAddDay={handleAddDay} />
                </div>
            </div>
        </>
    );
};

export default withAuth(CustomProgram);
