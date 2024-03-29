import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
      e.preventDefault()
      await axios.post(URI, {email: email, password:password})
      navigate('/')
    }

return (
  <div>
    <h3>Vista Crear POST</h3>
    <form onSubmit={store}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          value={email}
          onChange={ (e)=> setEmail(e.target.value)}
          type="email"
          className="form-control"
        />
        </div>
         <div className="mb-3">
         <label className="form-label">Password</label>
        <input 
          value={password}
          onChange={ (e)=> setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Store</button>
    </form>
  </div>
)

}

export default CompCreateBlog
