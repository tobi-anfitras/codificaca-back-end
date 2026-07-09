import express from 'express'
import {fruitService} from '../services/fruit.service.sj'

const route = express.Router()

route.get("/",(req,res)=>{
    const data = fruitService.getALL()
    res.json(data)
})