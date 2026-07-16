// Mock de dados
const fruits = [
    {id:1 ,nome: "Maça" },
    {id:2 ,nome: "Pera"}
]
class FruitService {
    getAll() {
       return fruits 
    }
    getById(id){
        return fruits.find(f => f.id === parseInt(id))
    }
   create(nome) {
    const newFruit = {
        id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
        nome
    }
        fruits.push(newFruit)
        return newFruit
    }
   
// criar update(id,nome)
    updated(id,nome){
        const fruit = fruits.find(f => f.id === parseInt(id))
        if(!fruit){
            return null
        }
        fruit.nome = nome
        return fruit
    }

//criar  delete(id)
    apagado(id){
        const index = fruits.findIndex(f => f.id === parseInt(id))

        if(index === -1){
            return null
        }
        const[deletedFruit] = fruits.splice(index,1)
        return deletedFruit

    }

}     
export const fruitService = new FruitService()