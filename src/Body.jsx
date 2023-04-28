import {useState} from 'react'

export default function Body() {

    const [todo, setTodo] = useState([])
    const [type, setType] = useState()


    function resultText(e){
        setType(prevType => prevType = e.target.value)
    }

    function saveText(){
        setTodo(prevTodo => [...prevTodo, prevTodo = type])
        setType('')
    }

    function deleteTodo(id) {
        setTodo(prevTodo => prevTodo.filter((item, index) => index !== id));
    }


    const showResults = todo.map((item, index) => {
        return <div className="result-section">
            <li className="result">{item}</li>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>X</button>
        </div>
    })


  return (
    <div className="body">
        <div className="add-section">
            <input className='inputSection' type="text" value={type} onChange={(e) => resultText(e)} />
            <button onClick={() => saveText()}>ADD</button>
        </div>
        <br/>
        {showResults}
    </div>
  )
}
