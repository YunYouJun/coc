# coc

[![Build Status](https://www.travis-ci.org/YunYouJun/coc.svg?branch=master)](https://www.travis-ci.org/YunYouJun/coc)

> Coc Info Web

![野蛮人](https://raw.githubusercontent.com/YunYouJun/coc/master/assets/img/Clash_Barbarian.png)

Use Coc API to display and analyze

[Online](https://coc.yunyoujun.cn)

线上可直接访问 <https://coc.yunyoujun.cn>

## Base

- [Clash Of Clans API](https://developer.clashofclans.com)
- [API Address](https://api.clashofclans.com/v1/)
- [Nuxt](https://nuxtjs.org)

## Function

- DEMO (use prism to highlight)
- i18n (use element & vue-i18n)

## Intend

- 大本营等级图标 （playerInfo 组件）
- PlayerInfo 拆分组件
- 图标素材完善
- 国际化翻译
- 使用 [qqbot](https://github.com/pandolia/qqbot)， 实现群内部落战提醒

## Build Setup

若想要本地使用，请自行前往 [Clash Of Clans API](https://developer.clashofclans.com) 申请您 IP 地址对应的 TOKEN 。
并参考 `env.js` 配置于其中。

此处默认您了解 `git` 与 `npm`/`yarn` 命令行的基本使用。（若不了解，请参考其他教程。）

``` bash
# clone project
$ git clone https://github.com/YunYouJun/coc

# install dependencies
$ yarn # Or npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

## BackUp

- [heroku](https://coc-api.herokuapp.com) (No Token)
