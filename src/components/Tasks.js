import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {


    return (
        <>
            {tasks.map((task) => (
                //Looping through tasks and saving task as a prop
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
)
}

export default Tasks