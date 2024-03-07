import {sum} from "../src/sum"

beforeEach(() =>{
    console.info("Before Each")
})
afterEach(() =>{
    console.info("After Each")
})

test("first test", () =>{expect(sum(10, 10)).toBe(20)})
test("second test", () =>{expect(sum(10,10)).toBe(20)})

beforeAll(()=>{console.info("Before All 1")})
afterAll(()=>{console.info("After All 1")})