import smart from './node_modules/address-smart-parse/smart.js'
import addressCode from './node_modules/address-smart-parse/lib/addressCode.js';
import zipCode from './node_modules/address-smart-parse/lib/zipCode.js';

let address = '陕西省西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810'

const result = smart(address, addressCode)

console.log(result);