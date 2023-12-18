import request from '@gem-mine/request'
import intl from '@gem-mine/intl-pure'
import { $, html } from '../../util/helper'
import style from './style.module.less'

export function buildGoto() {
  $('#goto').innerHTML = intl.get('home.goto')
}

export async function buildContent() {
  const data = await request.get('https://mock.gem-mine.tech/mock/74/marketing')
  $('#list').innerHTML = data
    .map(({ href, title, introduce }) => {
      const item = html(`<li class="${style.item}">
        <a href="${href}" title="${introduce}">
          <span class="${style.title}">${title}</span>
          <p class="${style.introduce}">${introduce}</p>
        </a>
      </li>`)
      return item
    })
    .join('')
}
