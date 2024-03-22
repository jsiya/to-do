import React, { useState } from 'react';
import './TitleStyles.css';
import { useTaskContext } from '../../contexts/TaskContext';

interface TitleProps {
    addTask: (a: string, b: string) => void;
}

// const Title: React.FC<TitleProps> = ({ addTask }) => {
//     const [title, setTitle] = useState('');
//     const [date, setDate] = useState(new Date());

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(event.target.value);
//     };
//     const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDate(new Date(event.target.value));
//     };

//     const handleSubmit = () => {
//         if (title.trim() !== '') {
//             addTask(title, date.toLocaleDateString());
//             setTitle('');
//             setDate(new Date);
//         }
//     };

//     return (
//         <div className='new-task-sec'>
//             <input type='date' defaultValue={date.toISOString().substring(0,10)} onChange={handleChangeDate}/>
//             <section className="add-new-element-section">
//                 <input id="task" type="text" placeholder="New Title..." required value={title} onChange={handleChange}/>
//                 <button className="add-btn" onClick={handleSubmit}>+</button>
//             </section>
//         </div>
//     );
// };

const Title: React.FC = () => {
    const { addTask } = useTaskContext(); 
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(event.target.value));
    };

    const handleSubmit = () => {
        if (title.trim() !== '') {
            addTask(title, date.toLocaleDateString());
            setTitle('');
            setDate(new Date());
        }
    };

    return (
        <div className='new-task-sec'>
            <input type='date' defaultValue={date.toISOString().substring(0,10)} onChange={handleChangeDate}/>
            <section className="add-new-element-section">
                <input id="task" type="text" placeholder="New Title..." required value={title} onChange={handleChange}/>
                <button className="add-btn" onClick={handleSubmit}>+</button>
            </section>
        </div>
    );
};


export default Title;
