// Mock de dados

const fruits = [
    {id:1 ,nome:"maça"},
    {id:2 ,nome:"melancia"}
]

class FruitService {
    getALL() {
        return fruits
    }
    getById(id){
        return fruits.find(f = f.id === parseInt(id))
    }
    create(nome){
        const newFruit = {
            id: fruits.lenght > 0 ? fruits[fruits.length - 1].id + 1:1,nome
            
        }
        {
           
            }
            fruits.push(newFruit) 
            return newFruit
    }
}
export const fruitService = new FruitService()