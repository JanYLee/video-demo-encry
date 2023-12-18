import intl from '@gem-mine/intl-pure'
import LANGUAGE from './language'

const locales = {}
Object.keys(LANGUAGE).forEach((key) => {
  // 如果语言包很小，建议全部使用本地化
  // eslint-disable-next-line global-require
  locales[key] = require(`./${key}`)
})

intl.init({ locales })
