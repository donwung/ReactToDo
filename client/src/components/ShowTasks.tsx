import axios from 'axios';
import { useState, useEffect } from 'react'
import OneTask from './OneTask';

const ShowTasks = (props: any) => {
    const [tasks, setTasks] = useState<any[]>([]);

    // grabbing all tasks from db on component render
    // using axios.get alone will result in an infinite GET loop
    // refer to axios documentation
    // *all* tasks will be grabbed - there is no memoization of any sort
    // any update to tasks will result in rerender and GETing all tasks again
    useEffect(() => {
        props.updated && props.setUpdated(false);
        axios.get("http://localhost:8000/api/todo-list/")
            .then(res => {
                console.log(res.data)
                setTasks(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [props.updated])



    return (
        <div>
            {/* renders each task in tasks array */}
            {tasks.map((task) => {
                return (
                    <OneTask task={task} key={task._id} setUpdated={props.setUpdated}></OneTask>
                )
            })}
        </div>
    )
}

export default ShowTasks;