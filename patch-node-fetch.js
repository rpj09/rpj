// patch-node-fetch.js
require = require('esm')(module);
const fetch = require('node-fetch');
globalThis.fetch = fetch;
