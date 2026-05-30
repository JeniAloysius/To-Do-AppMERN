
import { useState , useEffect } from 'react';
export const Input =(props) =>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTask(enteredValue);
    };
    console.log(enteredValue);
    useEffect(() => {
        if (enteredValue.trim().length > 3) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
        }, [enteredValue]);
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter a new task" onChange={handleChange} />
            <button disabled={!isValid} className="add-task-button">Create</button>
        </form>
    );
};
