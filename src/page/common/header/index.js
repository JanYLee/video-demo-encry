import intl from '@gem-mine/intl-pure'
import { $, html } from '../../../util/helper'
import './style.less'

export default function buildHeader() {
  $('#title').innerHTML = intl.get('title')

  $('#header-nav > nav').innerHTML = html(`
    <label id="language-label" for="language">${intl.get('language.label')}</label>
    <select id="language">
      <option value="zh-CN">中文</option>
      <option value="en">english</option>
    </select>
  `)

  const language = $('#language')
  language.value = intl.getLocale().currentLocale
  language.addEventListener('change', () => {
    const lang = language.value
    intl.setLocale(lang)
    document.cookie = `lang=${lang}`
  })
}
