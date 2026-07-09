// Mock de dados

const fruits = [
    {id:1 ,nome:"maça"},
    {id:2 ,nome:"melancia"}
]

class FruitService {
    getALL() {
        return fruits
    }
}
export const fruitService = new FruitService()