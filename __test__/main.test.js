const main = require ('../src/main')

describe('pruebas', () => {
test('1+2 is 3', () =>{
    expect(main(1,2)).toBe(3)
})
it('should return 3 with 1+2', () =>{
    expect(main(1,2)).toBe(3) 
    })
test('1 + (-2) is -1', () =>{
    expect(main(1, -2)).toBe(-1)
    })  
test('-1 + (-2) is -3', () =>{
    expect(main(-1, -2)).toBe(-3)  
    })  
})
