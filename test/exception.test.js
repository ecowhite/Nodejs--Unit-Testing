class MyException extends Error{

}

function callMe (name){
    if(name === "Eko"){
        throw new MyException("Ups my exception happens")
    }else{
        return "ok"
    }
}

test("exception", ()=>{
    expect(() => callMe("Eko")).toThrow()
    expect(() => callMe("Eko")).toThrow(MyException)
    expect(() => callMe("Eko")).toThrow("Ups my exception happens")
})