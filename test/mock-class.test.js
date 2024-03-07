import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/class-user-service";

jest.mock('../src/user-repository.js')

const repository = new UserRepository()
const service = new UserService(repository)

test("test mock class save", ()=>{
    const user = {id: 1, name: "Eko"}
    service.save(user)
    expect(repository.save).toHaveBeenCalled()
})

test("test mock class findById", ()=>{
    const user = {id: 1, name : "Eko"}
    repository.findById.mockReturnValueOnce(user)
    expect(service.findById(1)).toEqual(user)
    expect(repository.findById).toHaveBeenCalled()
})

test("test mock class findAll", ()=>{
    const users = [{id: 1, name: "Eko"}, {id: 2, name: "Kurniawan"}]
    repository.findAll.mockReturnValueOnce(users)
    expect(service.findAll()).toEqual(users)
    expect(repository.findAll).toHaveBeenCalled()
})

test("test mock class findById spyOn", ()=>{
    const user = {id: 1, name: "Eko"}
    const findByIdMock = jest.spyOn(repository, "findById")
    findByIdMock.mockReturnValueOnce(user)

    expect(service.findById(1)).toEqual(user)
    expect(repository.findById).toHaveBeenCalled()
})