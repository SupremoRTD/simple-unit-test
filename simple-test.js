/*
Test if this even works
*/
import {describe, it, expects} from 'simple-unit-test'

describe('Random Math Tests', ()=>{
  it('1+3 should equal 4', ()=>{
    const sum = (a, b) => a + b
    expects(sum(1,3)).toBe(4)
  })
  it('1+1 should equal 2', ()=>{
    const sum = (a, b) => a + b
    expects(sum(1,1)).toBe(1)
  })
  it('1+1 should not equal 1', ()=>{
    const sum = (a, b) => a + b
    expects(sum(1,1)).toNotBe(1)
  })
  it('10+1 should equal 11', ()=>{
    const sum = (a, b) => a + b
    expects(sum(10,1)).toBe(9)
  })
})

describe('Random Object Tests', ()=>{
  it('should return the object {test: true}', ()=>{
    expects({test: true}).toBe({test: true})
  })
  it('should not return the object {test: true}', ()=>{
    expects({test: true}).toNotBe({test: false})
  })
  it('should not return the object {test: true}', ()=>{
    expects({test: true}).toNotBe({test: true})
  })
})
