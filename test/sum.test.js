import {sum, sumAll} from "../src/sum.js";

test("test sum function", () =>{

    const result = sum(1, 2)

    expect(result).toBe(3)

})

test("test sum function2", () =>{

    const result = sum(1, 2)

    expect(result).toBe(3)

})

test("test sum function3", () =>{

    const result = sum(1, 2)

    expect(result).toBe(3)

})

test("test sumAll", () =>{
    const result = sumAll([1,2,3,4])

    expect(result).toBe(10)
})

test("test sumAll", () =>{
    const result = sumAll([1,2,3,4])

    expect(result).toBe(10)
})
