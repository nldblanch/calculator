import {add, divide, multiply, subtract} from "../src/utils/basicOperations"
describe("basicOperations", () => {
    describe("add", () => {
      it("returns strings added together", () => {
        //arrange
        const num1:string = "1" 
        const num2:string = "3"
        //act
        const actual:string = add(num1, num2)
        //assert
        expect(actual).toBe("4")
      })
    })
    describe("subtract", () => {
        it("returns strings subtracted", () => {
          //arrange
          const num1:string = "1" 
          const num2:string = "3"
          //act
          const actual:string = subtract(num1, num2)
          //assert
          expect(actual).toBe("-2")
        })
      })
      describe("multiply", () => {
        it("returns strings multiplied", () => {
          //arrange
          const num1:string = "2" 
          const num2:string = "3"
          //act
          const actual:string = multiply(num1, num2)
          //assert
          expect(actual).toBe("6")
        })
      })
      describe("divide", () => {
        it("returns strings divided", () => {
          //arrange
          const num1:string = "10" 
          const num2:string = "5"
          //act
          const actual:string = divide(num1, num2)
          //assert
          expect(actual).toBe("2")
        })
      })
})