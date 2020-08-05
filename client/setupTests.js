const fetchPolifill = require('whatwg-fetch')

global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response

process.env.REACT_APP_SERVER_HOST = 'http://server:3001'
