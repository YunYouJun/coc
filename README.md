# coc

[![Build Status](https://www.travis-ci.org/YunYouJun/coc.svg?branch=master)](https://www.travis-ci.org/YunYouJun/coc)

> Coc Info Web

![野蛮人](https://raw.githubusercontent.com/YunYouJun/coc/master/assets/img/Clash_Barbarian.png)

## Intro


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
- Rank (MoreInfo)
  - Search
  - 琦开得胜&机智一族

### Other

- DEMO (use prism to highlight)
- i18n (use element & vue-i18n)
- Markdown => Html (use vue-markdown-loader)

## Intend

- PlayerInfo 继续拆分组件
- 图标素材完善(镜像法术、黑水药水、英雄图标)
- 国际化翻译(部分)
- 科技值权重计算  [TechValue](docs/TechValue.md)
- 使用 [qqbot](https://github.com/pandolia/qqbot) http API， 实现群内部落战提醒
- donate page

## Build Setup

若想要本地使用，请自行前往 [Clash Of Clans API](https://developer.clashofclans.com) 申请您 IP 地址对应的 `TOKEN` 。
并参考 `env.example.js` 配置于其中。

> 请将 `env.example.js` 重命名为 `env.js`

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

此项目为兴趣之作，不作盈利目的。
请勿恶意频繁刷新发送多次请求。(我的小水管服务器顶不住/(ㄒ^ㄒ)/~~)

---

[我们的故事-关于部落冲突的二三事儿](https://yunyoujun.cn/categories/%E4%BA%91%E6%B8%B8%E7%9A%84%E5%B0%8F%E5%9B%9E%E5%BF%86/%E5%85%B3%E4%BA%8E%E9%83%A8%E8%90%BD%E5%86%B2%E7%AA%81%E7%9A%84%E4%BA%8C%E4%B8%89%E4%BA%8B%E5%84%BF/)

## Contact


部落QQ群: 365376497

[![琦琦部落](https://pub.idqqimg.com/wpa/images/group.png)](https://shang.qq.com/wpa/qunwpa?idkey=343208cf41d8999818f1bc24b2e9ec87f9cf6d3d46613293e210a32df85d20d6)

## Donate

如果愿意赞助的话……

<details>
<summary>Ali Pay</summary>
<p><img src="https://yunyoujun.cn/images/donate/alipay.jpg"></p>
</details>

<details>
<summary>Wechat Pay</summary>
<p><img src="https://yunyoujun.cn/images/donate/wechatpay.png"></p>
</details>