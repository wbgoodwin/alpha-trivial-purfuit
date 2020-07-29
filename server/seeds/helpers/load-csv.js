const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

module.exports.loadCsv = async function(file) {
  try {
    const filePath = path.join(__dirname, `../csvs/${file}`)

    const converter = csv({
      skip_lines_with_empty_values : true,
      skip_lines_with_errors: true,
      skip_empty_lines: true
    })

    const results = []

    return new Promise(function (resolve, reject) {
      fs.createReadStream(filePath)
        .pipe(converter)
        .on('data', function (data) { results.push(data) })
        .on('end', function (err) {
          if (err) return reject(err)
          resolve(results)
        })
    })
  }
  catch(e) {
    throw new Error(`Failed to load ${file}`)
  }
}
