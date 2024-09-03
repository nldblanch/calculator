import {add, divide, multiply, subtract} from "../src/utils/basicOperations"
describe("basicOperations", () => {
    describe("add", () => {
      it("returns strings added together", () => {
        //arrange
        const num1:number = 1
        const num2:number = 3
        //act
        const actual:number = add(num1, num2)
        //assert
        expect(actual).toBe(4)
      })
    })
    describe("subtract", () => {
        it("returns strings subtracted", () => {
          //arrange
          const num1:number = 1
          const num2:number = 3
          //act
          const actual:number = subtract(num1, num2)
          //assert
          expect(actual).toBe(-2)
        })
      })
      describe("multiply", () => {
        it("returns strings multiplied", () => {
          //arrange
          const num1:number = 2
          const num2:number = 3
          //act
          const actual:number = multiply(num1, num2)
          //assert
          expect(actual).toBe(6)
        })
      })
      describe("divide", () => {
        it("returns strings divided", () => {
          //arrange
          const num1:number = 10
          const num2:number = 5
          //act
          const actual:number = divide(num1, num2)
          //assert
          expect(actual).toBe(2)
        })
      })
})