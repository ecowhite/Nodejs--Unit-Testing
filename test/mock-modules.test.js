import { getAllProducts, getProductById } from "../src/database";
import { ProductsService } from "../src/product-services";

jest.mock("../src/database.js")

test("mock modules getProductById", ()=>{
    getProductById.mockImplementation((id) =>{
        return {id:id, name: "Product Mock"}
    })

    const product = ProductsService.findById(1)
    expect(product).toEqual({id: 1, name:"Product Mock"})
})

test("mock modules getAllProducts", ()=>{
    const products = [
        {id: 1, name: "Product Mock 1"},
        {id: 2, name: "Product Mock 1"}
    ]
    getAllProducts.mockReturnValue(products)

    expect(ProductsService.findAll()).toEqual(products)
})

