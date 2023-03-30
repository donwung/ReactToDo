import axios from 'axios';

const OneTask = (props: any) => {
    // TODO: delete button
    // TODO: update button
    // console.log(props.task)

    const handleToggleCompletion = () => {
        console.log(`submitting PUT request to http://localhost:8000/api/todo-list/${props.task._id}`)
        axios.put(`http://localhost:8000/api/todo-list/${props.task._id}`,
            {
                task: props.task.task,
                completed: !props.task.completed
            })
        props.setUpdated(true);
    }

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