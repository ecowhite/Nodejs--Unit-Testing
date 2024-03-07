test("array", ()=>{
    const names = ["Eko", "Kurniawan", "Khannedy"]
    expect(names).toContain("Kurniawan")
    expect(names).toEqual(["Eko", "Kurniawan", "Khannedy"])

    const persons = [{name: "Eko"}, {name: "Khannedy"}]
    expect(persons).toContainEqual({name: "Khannedy"})
    expect(persons).toEqual([{name: "Eko"}, {name: "Khannedy"}])
})