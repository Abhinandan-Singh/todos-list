import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './MyComponents/About';

function App() {
  let initTodo;

  if(localStorage.getItem("todosarr")!==null){
    initTodo = JSON.parse(localStorage.getItem("todosarr"));
  }

  const [todosarr, setTodosarr] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todosarr", JSON.stringify(todosarr));
  },[todosarr]);
  
  const onDelete = (todo) => {
    setTodosarr(todosarr.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc, key) =>{
    let sno;
    if(!todosarr.length){
      sno = 1;
    }else{
      sno = todosarr[todosarr.length-1].sno + 1;
    }
    const newTodo = {
      key: key,
      sno: sno,
      title: title,
      desc: desc
    }
    setTodosarr([...todosarr, newTodo]);
  }

  return (
    <>
    <Router>
      <Header title="My todo"/>
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/" render={()=>{
            return(<>
              <AddTodo addTodo={addTodo}/>
              <Todos todo={todosarr} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
      </Switch>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
