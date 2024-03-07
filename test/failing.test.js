import { sayHello } from "../src/sayHello";

test("sayHello succes",()=>{
    expect(sayHello("Eko")).toBe("Hello Eko")
})

test.failing("sayHello failing", ()=>{
    sayHello(null)
})