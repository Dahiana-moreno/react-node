import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
  const [blogs, setBlog] = useState([])
  useEffect( ()=>{
    getBlogs() 
  },[])

  //procedimientos mostrar todos los blogs
  const getBlogs = async () => {
   const res = await axios.get(URI)
   setBlog(res.data)
  }

  //procedimientos mostrar todos los blogs
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`)
    getBlogs()
  }

  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {/*mt-2 mb-2 = margin top y margin botton de 2 */}
          <Link to="/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus fa-beat" Style="color: #FFD43B;"></i></Link>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { blogs.map ( (blog) => (
                <tr key={ blog.id}>
                  <td> { blog.email }</td>
                  <td> { blog.password}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info">Editar</Link> 
                    <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'>Delete</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CompShowBlogs