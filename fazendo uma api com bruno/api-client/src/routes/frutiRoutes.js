import express from 'express'
import {fruitService} from '../services/fruit.service.sj'

const route = express.Router()

route.get("/",(req,res)=>{
    const data = fruitService.getALL()
    res.json(data)
})

route.post("/",(req,res) => {
    console.log("cheguei aqui");

    const {nome} = req.body;
    if(!nome){
        return res.status(400).json({ message: "o nome da fruta e obrigatorio"})
    }
    const newFruit = fruitService.create(nome)
    res.status(201).json(newFruit)

})

route.get("/:id", (req,res) =>{
    const {id} = req.params
    const fruit = fruitService.getById(id)
    if(!fruits){
        return res.status(404).json({message:"fruta nao encontrada"})
    }
    res.json(fruit)
})
export default route