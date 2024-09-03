import {formatDisplay} from "../src/utils/displayFormatter"

describe("displayFormat", () => {
  it("returns a string", () => {
    //arrange
    const number:string = "123"
    //act
    const actual:string = formatDisplay(number)
    //assert
    expect(typeof actual).toBe("string")
  })
  it("formats numbers with one comma required", () => {
    //arrange
    const number1:string = "1234"
    const number2:string = "12345"
    const number3:string = "123456"
    //act
    const actual1:string = formatDisplay(number1)
    const actual2:string = formatDisplay(number2)
    const actual3:string = formatDisplay(number3)
    //assert
    expect(actual1).toBe("1,234")
    expect(actual2).toBe("12,345")
    expect(actual3).toBe("123,456")
  })
  it("formats numbers with multiple commas", () => {
    //arrange
    const number:string = "1234567"
    //act
    const actual:string = formatDisplay(number)
    //assert
    expect(actual).toBe("1,234,567")
  })
  it("does not format a number with a decimal point", () => {
    //arrange
    const number:string = "1.23"
    //act
    const actual:string = formatDisplay(number)
    //assert
    expect(actual).toBe("1.23")
  })
})