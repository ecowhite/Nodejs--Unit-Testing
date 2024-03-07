test("string", ()=>{
    const name = "Eko Kurniawan Khannedy"

    expect(name).toBe("Eko Kurniawan Khannedy")
    expect(name).toEqual("Eko Kurniawan Khannedy")
    expect(name).toMatch(/awan/)
})