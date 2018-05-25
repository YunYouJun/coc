import Vue from 'vue'
import Element from 'element-ui'

import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

import en from '~/locales/en'
import zh from '~/locales/zh'

Vue.use(VueI18n)
Vue.use(Element)

const messages = {
  en: Object.assign(en, enLocale),
  zh: Object.assign(zh, zhLocale)
}

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh',
    messages
  })
  ElementLocale.i18n((key, value) => app.i18n.t(key, value))
}
