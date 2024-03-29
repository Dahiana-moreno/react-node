import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"




const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  //procedimiento guardar
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI+id, {
      email: email, 
      password:password
    })
    navigate('/')
  }
  useEffect( ()=>{
    getBlogById()
  },[])

  const getBlogById = async () => {
    const res = await axios.get(URI+id)
    setEmail(res.data.email)
    setPassword(res.data.password)

  }
  return(

    <div>
    <h3>Vista Edit POST</h3>
    <form onSubmit={update}>
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
      <button type="submit" className="btn btn-primary">update</button>
    </form>
  </div>

  )
}

export default CompEditBlog