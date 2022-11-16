import React, { useState } from 'react';
import Form from '../Form/Form';
import Todo from '../Todo/Todo';
import ReactCalendar from '../ReactCalendar/ReactCalendar';
import './List.scss';

const List = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        console.log(...todos)
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item)))
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    console.log(todos)

    const [date, setDate] = useState(new Date());

    const onChange = date => {
    setDate(date)
    }

  return (
    <div className='list'>
        <ReactCalendar date={date} onChange={onChange} />
        <h1>What's the plan for Today?</h1>
        <div>{date.toString()}</div>
        <Form onSubmit={addTodo}/>
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default List
