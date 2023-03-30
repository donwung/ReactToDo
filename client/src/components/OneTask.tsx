import axios from 'axios';

//TODO: refactor to stop using props.task.etc
const OneTask = (props: any) => {
    // sends a PUT request and triggers an "updated" flag to rerender component
    // 
    const handleToggleCompletion = () => {
        console.log(`submitting PUT request to http://localhost:8000/api/todo-list/${props.task._id}`)
        axios.put(`http://localhost:8000/api/todo-list/${props.task._id}`,
            {
                task: props.task.task,
                completed: !props.task.completed
            })
        props.setUpdated(true);
    }

    // sends a DELETE request and triggers an "updated" flag to rerender component
    // 
    const handleDeleteTask = () => {
        console.log(`submitting DELETE request to http://localhost:8000/api/todo-list/${props.task._id}`)
        axios.delete(`http://localhost:8000/api/todo-list/${props.task._id}`);
        props.setUpdated(true);
    }

    return (
        <div>
            <div onClick={() => handleToggleCompletion()}>
                {props.task.task}
                <input type="checkbox" checked={props.task.completed} ></input>
                <button onClick={() => handleDeleteTask()}>Delete</button>
            </div>
        </div>
    )
}

export default OneTask;