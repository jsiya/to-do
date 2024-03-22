import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface Task {
    taskName: string;
    dueDate: string;
    isCompleted: boolean;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (taskName: string, dueDate: string) => void;
    removeTask: (taskName: string) => void;
    markTaskAsCompleted: (taskName: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        if(tasks.length > 0)
        {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = (taskName: string, dueDate: string) => {
        setTasks([...tasks, { taskName, dueDate, isCompleted: false }]);
    };

    const removeTask = (taskName: string) => {
        setTasks(tasks.filter(task => task.taskName !== taskName));
    };

    const markTaskAsCompleted = (taskName: string) => {
        setTasks(tasks.map(task => {
            if (task.taskName === taskName) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        }));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, markTaskAsCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};
