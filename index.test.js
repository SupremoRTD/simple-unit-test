/*
Let's run some tests baby!!!
*/
import { describe, it, expects } from 'simple-unit-test'

describe('Random Math Tests', () => {
  it('1+3 should equal 4', () => {
    const sum = (a, b) => a + b
    expects(sum(1, 3)).toBe(4)
  })
  it('1+1 should equal 2', () => {
    const sum = (a, b) => a + b
    expects(sum(1, 1)).toBe(1)
  })
  it('1+1 should not equal 1', () => {
    const sum = (a, b) => a + b
    expects(sum(1, 1)).toNotBe(1)
  })
  it('10+1 should equal 11', () => {
    const sum = (a, b) => a + b
    expects(sum(10, 1)).toBe(9)
  })
})

describe('Random Object Tests', () => {
  console.log('You can run stuff before your test block start.')
  it('should return the object {test: true}', () => {
    console.log('Even do stuff before a test runs.')
    expects({ test: true }).toBe({ test: true })
  })
  it('should not return the object {test: true}', () => {
    expects({ test: true }).toNotBe({ test: false })
    console.log('Maybe do stuff after a test runs.')
  })
  it('should not return the object {test: true}', () => {
    console.log('You can even do stuff before the test...')
    expects({ test: true }).toNotBe({ test: true })
    console.log('...and then continue that stuff after the test.')
  })
  console.log(`Maybe do stuff after the test block runs, you do you.`)
})