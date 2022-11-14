import React, { useState } from 'react';
import Form from '../Form/Form';
import './Todo.scss';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    console.log(todos)

    console.log(typeof todos)

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    for (const key in todos) {
        console.log(`${key}: ${todos[key]}`)
    }


  return (
    <div>
    {todos.map((todo, index) => {
        return(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div className='text' key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
            </div>
            <div>
            <RiCloseCircleLine onClick={()=> removeTodo(todo.id)} />
            <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </div>
        </div>
        )
        })}
    </div>
  )
}

export default Todo