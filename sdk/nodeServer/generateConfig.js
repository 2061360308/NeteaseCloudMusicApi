const fs = require('fs')
const path = require('path')
const { register_anonimous } = require('./main')
const { cookieToJson } = require('../../corejs/util/index')

const tmpPath = require('os').tmpdir()
async function generateConfig() {
  try {
    console.log(register_anonimous)
    const res = await register_anonimous()
    const cookie = res.body.cookie
    if (cookie) {
      const cookieObj = cookieToJson(cookie)
      fs.writeFileSync(
        path.resolve(tmpPath, 'anonymous_token'),
        cookieObj.MUSIC_A,
        'utf-8',
      )
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = generateConfig
