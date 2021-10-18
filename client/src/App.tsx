import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Login from './components/Login'
import useToken from './hooks/useToken'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
import { Dashboard } from './components/Dashboard';
import Admin from './components/Admin'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]) 
  const { token } = useToken();

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // if(!token) {
  //   return <Login/>;
  // }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Todo not saved')
        }
        setTodos(data.todos)
      })
      .catch((err) => console.log(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        setTodos(data.todos)
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted')
        }
        setTodos(data.todos)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App calculated-width'>
      <h1>Mampf</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Switch>
            <Route path="/">
              <AddTodo saveTodo={handleSaveTodo} />
              {todos.map((todo: ITodo) => (
                <TodoItem
                  key={todo._id}
                  updateTodo={handleUpdateTodo}
                  deleteTodo={handleDeleteTodo}
                  todo={todo}
                />
              ))}
            </Route>
          </Switch>
        </Switch>
      </BrowserRouter>

    </main>
  )
}

export default App
