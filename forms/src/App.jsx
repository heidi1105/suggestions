import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './pages/UserForm'
import OneStateForm from './pages/OneStateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserForm /> */}
      <OneStateForm />
    </>
  )
}

export default App
