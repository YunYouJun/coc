# coc

[![Build Status](https://www.travis-ci.org/YunYouJun/coc.svg?branch=master)](https://www.travis-ci.org/YunYouJun/coc)

> Coc Info Web

![野蛮人](https://raw.githubusercontent.com/YunYouJun/coc/master/assets/img/Clash_Barbarian.png)

Use Coc API to display and analyze

线上可直接访问 [Online](https://coc.yunyoujun.cn)

## Base

- [Clash Of Clans API](https://developer.clashofclans.com)
- [API Address](https://api.clashofclans.com/v1/)
- [Fan Kit](https://forum.supercell.com/showthread.php/1548105-Updated-Fan-Kit-now-available%21)
- [Nuxt](https://nuxtjs.org)

## Function

### Main

- Clan
  - Search
  - 琦开得胜
  - 机智一族
  - 琦开得胜&机智一族
- Player
  - Search
- Rank
  - MoreInfo

### Other

- DEMO (use prism to highlight)
- i18n (use element & vue-i18n)

## Intend

- Markdown 解析 （/about）
- 大本营等级图标 （playerInfo 组件）
- hamburger 菜单
- PlayerInfo 继续拆分组件
- 图标素材完善
- 国际化翻译(部分)
- 科技值权重计算  [TechValue](docs/TechValue.md)
- 使用 [qqbot](https://github.com/pandolia/qqbot) http API， 实现群内部落战提醒
- donate

## Build Setup

若想要本地使用，请自行前往 [Clash Of Clans API](https://developer.clashofclans.com) 申请您 IP 地址对应的 `TOKEN` 。
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

## About

部落QQ群: 365376497

[![琦琦部落](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=343208cf41d8999818f1bc24b2e9ec87f9cf6d3d46613293e210a32df85d20d6)

---

此项目为兴趣之作，不作盈利目的。
请勿恶意频繁刷新发送多次请求。(我的小水管服务器顶不住/(ㄒ^ㄒ)/~~)