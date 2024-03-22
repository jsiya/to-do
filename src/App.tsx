import './App.css';
import Title from './components/title/Title';
import ListToDo from './components/list/ListToDo';
import { TaskProvider } from './contexts/TaskContext';

// interface Task {
//     taskName: string;
//     dueDate: string;
//     isCompleted: boolean;
// }

// const App: React.FC = () => {
//     const [tasks, setTasks] = useState<Task[]>([]);

//     useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
//         setTasks(storedTasks);
//     }, []);

//     useEffect(() => {
//         console.log('Saving local storage:', tasks);
//         if(tasks.length > 0)
//         {
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//         }
//     }, [tasks]);

//     const addTask = (taskName: string, dueDate: string) => {
//         setTasks([...tasks, { taskName, dueDate, isCompleted: false }]);
//     };

//     const removeTask = (taskName: string) => {
//         setTasks(tasks.filter(task => task.taskName !== taskName));
//     };

//     const markTaskAsCompleted = (taskName: string) => {
//         setTasks(tasks.map(task => {
//             if (task.taskName === taskName) {
//                 return { ...task, isCompleted: !task.isCompleted };
//             }
//             return task;
//         }));
//     };

//     return (
//         <div className="App">
//             <header>
//                 <p className="header-p">To-Do List</p>
//             </header>
//             <main>
//                 <Title addTask={addTask} />
//                 <ListToDo tasks={tasks} removeTask={removeTask} markTaskAsCompleted={markTaskAsCompleted} />
//             </main>
//             <footer>
//                 <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/13086/trash">Trash</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
//                 <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/91310/create">Edit</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
//                 <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/103200/unchecked-checkbox">Unchecked Checkbox</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
//                 <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/103200/unchecked-checkbox">Unchecked Checkbox</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>
//             </footer>
//         </div>
//     );
// };

const App: React.FC = () => {
    return (
        <TaskProvider> 
            <div className="App">
                <header>
                    <p className="header-p">To-Do List</p>
                </header>
                <main>
                    <Title />
                    <ListToDo />
                </main>
                <footer>
                   
                </footer>
            </div>
        </TaskProvider>
    );
};

export default App;
