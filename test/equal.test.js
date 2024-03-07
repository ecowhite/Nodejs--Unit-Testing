test("test toBe", () => {
    const name = "Eko"
    const hello = `Hello ${name}`

    expect(hello).toBe('Hello Eko')
})

test("test toEquals", ()=>{
    let person = {id: "eko"}
    Object.assign(person, {name: "Eko"})

    expect(person).toEqual({id: "eko", name: "Eko"})
})

test("truthiness", ()=>{
    let value = null
    expect(value).toBeNull()
    expect(value).toBeDefined()
    expect(value).toBeFalsy()

    value = undefined
    expect(value).toBeUndefined()
    expect(value).toBeFalsy()

    value = "eko"
    expect(value).toBeTruthy()
})
