import _ from 'lodash'

const SimpUnit = () => {
  let name
  let value
  let result
  let passCount = 0
  let failCount = 0

  const stringy = (value) => {
    return _.isObject(value)
      ? JSON.stringify(value)
      : value
  }

  const pass = (name) => {
    console.log('    \x1b[32m%s\x1b[0m', '✓ ' + name)
    passCount++
  }

  const fail = (name) => {
    console.error('    \x1b[31m%s\x1b[0m', '✗ ' + name)
    console.error(`      - Expected: ${stringy(result)}`)
    console.error(`      - Received: ${stringy(value)}`)
    failCount++
  }

  const simple = {
    describe(desc, func) {
      console.log(desc)
      func()
      console.log(`Passed: ${passCount}`)
      console.log(`Failed: ${failCount}\n`)
      name = value = result = ''
      passCount = failCount = 0
    },

    it(desc, func) {
      name = desc
      func()
      return simple
    },

    expects(x) {
      result = x
      return simple
    },

    toBe(x) {
      value = x
      try {
        if(!_.isEqual(result, value)) throw new Error()
        pass(name)
      } catch(e) {
        fail(name)
      }
    },

    toNotBe(x) {
      value = x
      try {
        if(_.isEqual(result, value)) throw new Error()
        pass(name)
      } catch(e) {
        fail(name)
      }
    }
  }
  return simple
}

export const {describe, it, expects} = SimpUnit()
export default SimpUnit()