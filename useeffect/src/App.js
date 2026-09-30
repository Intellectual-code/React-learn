import { useEffect, useState } from "react";


function App() {
  const [todos, setTodos] = useState([{name: "maga"}])
   const [text, setText] = useState("")


  return(
    <div className="App"> 
        <h3>TodoList</h3>
        <div className="form_list">
          <div className="add_date">
            <input value={text} onChange={(e)=> setText(e.target.value)} placeholder="Новая задача..."/>
            <button>Добавить</button>
              
          </div>
          <div>
            <h1>Список задач</h1>
              <ul>
                {todos.map((todo)=>{
                    <li key="1">
                      
                    </li>
                })}
                  



              </ul>


          </div>

        </div>
    </div>
  )
  
}

export default App;