import React, { useState } from 'react'
import '../styles/ToDoApp.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/todo_app/todoAction';

export default function ToDoApp() {
    const taskList = useSelector(state => state.task.taskList);
    const dispatch = useDispatch();

    const [inputText, setInpuText] = useState('')
    const handleChange = (e) => {
        setInpuText(e.target.value)
    }
    const handleClick = () => {
        dispatch(addTask(inputText));
        // console.log(inputText)
        setInpuText('')

    }
    const handleKeyPress = (event) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
            handleClick()
        }
    }

    return (
        <>
        <div className='task-input'>
        <input placeholder='Enter a task here ..'
                    value={inputText}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
                   {/* <button onClick={handleClick}
               onKeyDown={e => e.key === 'Enter' ? handleClick :
                   ''}>+</button> */}
                <div className='task-container'>

                 
                
                {taskList.map((task, index) => (
                    <div key={index} className='task-item'>
                        {task}
                    </div>
                ))}
            </div>
        </>

    )
}
