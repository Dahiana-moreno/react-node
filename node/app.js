import express from 'express';
import cors from 'cors'

import db from "./database/db.js";

import blogRoutes from "./routes/routes.js"

const app = express()
//OJO
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
  await db.authenticate()
  console.log('conexion exitosa a la bd')
} catch (error) {
  console.log(`Error ce conexion a la db se debe a: ${error}`)
}
/*
app.get('/',(req, res)=>{
  res.send('Hola Mundo')
})
*/

app.listen(8000, ()=>{
  console.log('server up running in http://localhost:8000/')
})