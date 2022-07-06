import { useEffect, useState } from 'react'
import './index.scss'

function index() {
  const [form, setForm] = useState({
    name: "",
    password: ""
  });
  useEffect(()=>{
    
  }, [form])
  const handleClick = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div id='nuevo'>
      <h1>Nuevo</h1>
      <form >
        <input required type='text' placeholder='name' name='name' onChange={handleChange} />
        <input required type='password' placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleClick}>Buscar</button>

      </form>

    </div>
  )
}

export default index