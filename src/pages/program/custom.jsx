import React, { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import DayComponent from '../../components/DayComponent';
import AddDayButtonComponent from '../../components/AddDayButtonComponent';
import { FiMoreHorizontal } from "react-icons/fi";
import { db, auth } from '../../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import '../../styles/program/custom.css';
import { useRouter } from 'next/router';

const CustomProgram = () => {
    const [days, setDays] = useState([{}]); // Start with two days by default
    const [programTitle, setProgramTitle] = useState("Untitled program");

    const handleAddDay = () => {
        setDays([...days, { dayLabel: '', muscleGroups: [] }]);
    };

    const handleDeleteDay = (index) => {
        const updatedDays = days.filter((_, i) => i !== index);
        setDays(updatedDays); 
    };

    const handleDayChange = (index, updatedDay) => {
        const updatedDays = [...days];
        updatedDays[index] = updatedDay;
        setDays(updatedDays);
    };

    const handleTitleChange = (e) => setProgramTitle(e.target.value);

    const router = useRouter();

    const handleCreateOrSave = async () => {
        try {
            const user = auth.currentUser; 
            console.log(auth.currentUser);
            if (user) {
                const programData = {
                    title: programTitle,
                    days: days,
                    createdAt: new Date(),
                };

                const docRef = await addDoc(collection(db, `users/${user.uid}/programs`), programData);
                console.log("Document ID:", docRef.id); // Check if the doc ID is valid
                toast.success("Program saved successfully!", {
                    autoClose: 1300,
                });
                // Navigate to dynamic volume page after save
                router.push(`/volume/${docRef.id}`);

            } else {
                toast.error("User not authenticated");
            }
        } catch (error) {
            toast.error("Error saving program:");
            console.error("Error saving program:", error);
        }
    };

    return (
        <>
            <ToastContainer />
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
                    {days.map((day, index) => (
                        <DayComponent 
                            key={index} 
                            dayIndex={index}
                            onDayChange={handleDayChange}
                            onDelete={() => handleDeleteDay(index)} 
                        />
                    ))}
                    <AddDayButtonComponent onAddDay={handleAddDay} />
                </div>
            </div>
        </>
    );
};

export default withAuth(CustomProgram);
