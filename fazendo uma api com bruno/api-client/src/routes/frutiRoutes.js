import express from 'express'
import {fruitService} from '../services/fruit.service.js' 

const route = express.Router()

route.get("/",(req,res) => {
    const data = fruitService.getAll()
    res.json(data)
})

route.post("/", (req,res) => {
    console.log("cheguei aqui");

    const {nome} = req.body; 
    if(!nome){
        return res.status(400).json({ message: "o nome da fruta é obrigatorio"})
    }
    const newFruit = fruitService.create(nome)
    res.status(201).json(newFruit)
})

route.get("/:id", (req, res) => {
    const {id} = req.params
    const fruit = fruitService.getById(id)
    if(!fruit){
        return res.status(404).json({message: "Fruta não Encontrada"})
    }
    res.json(fruit)
})

//criar route.put("/:id")
    route.put("/:id", (req,res)=>{
        const {id} = req.params
        const {nome} = req.body

        if(!nome){
            return res.status(400).json ({message: "tem nada não"})
        }

        const updatedFruite = fruitService.update(id,nome)
        if(!updatedFruite){
            return res.status(404).json({message:"ta dando certo não"})
        }
        res.json(updatedFruite)
    });

//criar route.delete("/:id")
route.delete("/:id",(req,res)=>{
    const {id} = req.params
    const deletedFruit = fruitService.delete(id)

    if(!deletedFruit){
        return res.status(404).json({message:"essa fruita não existe ou ja foi apagada"})
    }
    res.status(200).json({message:"fruta removida com sucesso",fruit: deletedFruit})
})


export default route