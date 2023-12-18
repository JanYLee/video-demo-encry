import intl from '@gem-mine/intl-pure'
import request from '@gem-mine/request'
import '../../index'
import { $ } from '../../util/helper'
import buildHeader from '../common/header'

const { demo } = request

document.addEventListener('DOMContentLoaded', () => {
  buildHeader()

  $('#goHome').innerHTML = intl.get('inner.back')
  $('#get-user').innerHTML = intl.get('inner.getUser')

  $('#get-user').addEventListener('click', async () => {
    const id = Math.ceil(Math.random() * 100)
    const data = await demo.get(`/user/${id}`)
    $('#user').innerHTML = JSON.stringify(data)
  })
})
