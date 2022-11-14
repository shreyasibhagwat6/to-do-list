import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(()=> {
      inputRef.current.focus()
    })

    const handleChange = (e) => {
      setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
          id: Math.floor(Math.random()*10000),
          text: input
        })

        setInput('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='add a to-do' value={input} name="text" onChange={handleChange} ref={inputRef}></input>
            <button>Add To-Do</button>
        </form>
    </div>
  )
}

export default Form