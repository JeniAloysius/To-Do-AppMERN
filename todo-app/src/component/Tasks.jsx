import { Card } from './Card';
import { useState, useEffect } from 'react';
import { Input } from './input';
import axios from 'axios';


export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const addTaskHandler = async (newTask) => {
        try {
            const body = {
                activity_id: Math.random(),
                todo_description: newTask,
            };
            await axios.post('http://localhost:8080/create', body);
            await fetchTasks();
        }
        catch (err) {
            console.log(err);
        }
    };
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/');
            console.log(response.data);
            setTasks(response.data);
        }
        catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);
    const deleteTaskHandler = (completedId) => {
        setTasks((prev) => {
            return prev.filter(task => task.activity_id !== completedId);
        });
    };
    return (
        <div className="tasks">
            <h1>Tasks</h1>
            <Input onAddTask={addTaskHandler} />
            {tasks.map((task) => {
                return <Card key={task.activity_id}
                    id={task.activity_id}
                    text={task.todo_description}
                    onTaskComplete={deleteTaskHandler} />;
            })}
        </div>
    );
};
