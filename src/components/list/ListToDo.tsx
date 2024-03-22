import React from 'react';
import './ListStyles.css';
import trash from '../../assets/images/icons8-trash-96.png';
import { useTaskContext } from '../../contexts/TaskContext'; 

// interface Task {
//     taskName: string;
//     dueDate: string;
//     isCompleted: boolean;
// }

// interface ListToDoProps {
//     tasks: Task[];
//     removeTask: (taskName: string) => void;
//     markTaskAsCompleted: (taskName: string) => void;
// }

// const ListToDo: React.FC<ListToDoProps> = ({ tasks, removeTask, markTaskAsCompleted }) => {
//     const handleRemoveTask = (event: React.MouseEvent<HTMLButtonElement>, taskName: string) => {
//         event.stopPropagation();
//         removeTask(taskName);
//     };

//     return (
//         <div className="tasks">
//             <ul id="task-list">
//                 {tasks.map((task, index) => (
//                     <li key={index} className={task.isCompleted ? 'task checked' : 'task'} onClick={() => markTaskAsCompleted(task.taskName)}>
//                         {task.taskName} - {task.dueDate}
//                         <button className="remove-btn" onClick={(event) => handleRemoveTask(event, task.taskName)}>
//                             <img src={trash} alt="Trash Icon" />
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

const ListToDo: React.FC = () => {
    const { tasks, removeTask, markTaskAsCompleted } = useTaskContext();

    const handleRemoveTask = (event: React.MouseEvent<HTMLButtonElement>, taskName: string) => {
        event.stopPropagation();
        removeTask(taskName);
    };

    return (
        <div className="tasks">
            <ul id="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.isCompleted ? 'task checked' : 'task'} onClick={() => markTaskAsCompleted(task.taskName)}>
                        {task.taskName} - {task.dueDate}
                        <button className="remove-btn" onClick={(event) => handleRemoveTask(event, task.taskName)}>
                            <img src={trash} alt="Trash Icon" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ListToDo;
