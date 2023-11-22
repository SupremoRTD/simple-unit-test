import { readdirSync, statSync } from 'fs'
import { join, basename } from 'path'
import { pathToFileURL } from 'url'

function runTests(testDir) {
  const testFiles = findTestFiles(testDir)

  // run each test file
  testFiles.forEach(async file => {
    const filePath = pathToFileURL(file).toString()
    await import(filePath)
  })
}

function findTestFiles(currentDir) {
  let testFiles = []

  readdirSync(currentDir).forEach(file => {
    const filePath = join(currentDir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory() && basename(currentDir) !== 'node_modules') {
      // recursively find test files in subdirectories
      testFiles = testFiles.concat(findTestFiles(filePath))
    } else if (file.endsWith('.test.js')) {
      // add .test.js files to the list
      testFiles.push(filePath)
    }
  })

  return testFiles
}

runTests(process.cwd())