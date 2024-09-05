import React from 'react';
import withAuth from '../../hoc/withAuth'; 
import '../../styles/program/new.css'

const NewProgram = () => {
    return (
        <div>
            <h1>Start a New Program</h1>
            <div>
                <div>
                    <button>Create a custom program</button>
                    <p>If you know how to create a good program, use this option to create a new program from a blank canvas.</p>
                </div>
                <div>
                    <button>Choose from a preset program</button>
                    <p>If you are looking for a quick and easy start but still some level of specialization, choose this.</p>
                </div>
            </div>
        </div>
    );
};

export default withAuth(NewProgram); 
