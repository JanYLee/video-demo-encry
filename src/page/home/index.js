import '../../index'
import buildHeader from '../common/header'
import { buildGoto, buildContent } from './data'

document.addEventListener('DOMContentLoaded', () => {
  buildHeader()
  buildGoto()
  buildContent()
})
