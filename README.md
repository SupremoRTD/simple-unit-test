# Simple Unit Test

Simple unit tests, for simple people like me.

<img src="https://i.imgur.com/IQRi78U.jpg" alt="terminal-output" width="200"/>

## Note:

You're probably better off using a real testing suite.
I just wanted to see if I can write my own since I've never really thought about
how these things are made.

I'm going to also write a little something to run all "-test.js" files because
I'm tired of doing it manually. That'll happen sometime soon-ish-y, unless you
want to do it, then that's cool too, pull it baby, pull it.

With that being said, if you insist on using this, then read on my adventurous
friends...

### Here's some examples:

```javascript
/*
Let's run some tests baby!!!
*/
import { describe, it, expects } from 'simple-unit-test'
import simpleSum from './simpleSum.js'

describe('Random Math Tests', () => {
  it('1+3 should equal 4', () => {
    // you can use that sweet, sweet function you made
    expects(simpleSum(1, 3)).toBe(4)
  })
  it('1+1 should equal 2', () => {
    expects(simpleSum(1, 1)).toBe(1)
  })
  it('1+1 should not equal 1', () => {
    // or you can make a new function here and never use it again anywhere
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
```

<img src="https://i.imgur.com/F8wjXSx.png" alt="terminal-output" width="500"/>
