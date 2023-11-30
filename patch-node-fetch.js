// patch-node-fetch.js
const fetch = require('node-fetch');
globalThis.fetch = fetch;
