import express from 'express'
import fruitRoutes from './routes/frutiRoutes.js'

const app = express()
const PORT = 3000

app.use(express.json())

// rotas
app.use("/fruits",fruitRoutes)

app.listen(PORT, () =>{
    console.log(`ó seu servidor esta rodando em http://localhost:${PORT}`)
    
}
)
