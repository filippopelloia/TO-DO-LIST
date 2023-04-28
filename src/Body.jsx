import {useState} from 'react'

export default function Body() {

    const [type, setType] = useState('')
    const [todo, setTodo] = useState([])


    function resultText(e){
        setType(prevType => prevType = e.target.value)
    }


    console.log(type)

    function saveText(){
        if(type == ''){
            alert('Insert text into the input section')
        }else{
            setTodo(prevTodo => [...prevTodo, prevTodo = type])
            setType('')
        }
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

            <input placeholder="Insert activity" 
                   className='inputSection' 
                   type="text" 
                   value={type} 
                   onChange={(e) => resultText(e)} 
                   required/>

            <button className="add-btn" 
                    onClick={() => saveText()}
            >ADD</button>

        </div>
        <br/>
        {showResults}
    </div>
  )
}
