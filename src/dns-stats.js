const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach(item => {
      let itemSplit = item.split('.');
      let domainPart = itemSplit[itemSplit.length - 1];
      let keyName = '.' + itemSplit[itemSplit.length - 1];
      for (let i = itemSplit.length - 2; i >= -1; i--) {
          let count = 0;
          if (result.keyName === undefined) {
              domains.forEach(item => {
                  if (item.includes(domainPart)) {
                      count += 1;
                  }
              })
              console.log(keyName)
              result[keyName] = count;
              domainPart = itemSplit[i] + '.' + domainPart;
              keyName = keyName + '.' + itemSplit[i];
          }
      }
  }); 
  return result
}

module.exports = {
  getDNSStats
};
