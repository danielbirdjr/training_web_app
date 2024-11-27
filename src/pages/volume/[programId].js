import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase'; // Ensure auth is imported

const VolumeForm = () => {
  const router = useRouter();
  const { programId } = router.query; // Get programId from the dynamic route
  const [programData, setProgramData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgramData = async () => {
      if (programId && auth.currentUser) { // Ensure user is authenticated and programId exists
        try {
          const docRef = doc(db, `users/${auth.currentUser.uid}/programs/${programId}`);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProgramData(docSnap.data()); // Set the program data if document exists
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
        setLoading(false);
      }
    };

    fetchProgramData();
  }, [programId]);

  if (loading) return <p>Loading...</p>;
  if (!programData) return <p>No program data found.</p>;

  return (
    <div>
      <h1>{programData.title}</h1>
      {/* Add form here for sets, reps, volume */}
      <p>Add sets, reps, and intensity progression for each exercise</p>
      <pre>{JSON.stringify(programData, null, 2)}</pre> {/* Display program data for debugging */}
    </div>
  );
};

export default VolumeForm;
