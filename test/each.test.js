import { sumAll } from "../src/sum"

test("test sumAll(10,10,10)", () =>{
    const result = sumAll([10,10,10])

    expect(result).toBe(30)
})

test("test sumAll(10,10,10,10,10)", () =>{
    const result = sumAll([10,10,10,10,10])

    expect(result).toBe(50)
})

const table = [
    {numbers: [10,10,10],expected: 30},
    {numbers: [10,10,10,10,10],expected: 50},
    {numbers: [10,10,10,10,10,10,10],expected: 70},
]

test.each(table)("test sumAll(%s) should result %i", ({numbers, expected})=>{
    expect(sumAll(numbers)).toBe(expected)
})

const table2 = [
    [[10,10,10], 30],
    [[10,10,10,10,10], 50],
    [[10,10,10,10,10,10,10], 70],
]

test.each(table2)("test sumAll(%s) should result %i", (numbers, expected2)=>{
    expect(sumAll(numbers)).toBe(expected2)
})