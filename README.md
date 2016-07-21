# my-node-pattern

2016年Q2，我司的 Node 项目已开始逐步往 Docker 上部署，有部分多年积累下的老套路也用不上啦，所以想趁着这个时期，用这个项目梳理下这些年俺对 Node 项目的一点想法与理解。

这篇是套路版，可以理解这是个依赖黑洞，利用 Node 生态来玩转服务端开发。当然，作为一枚偏执的程序员，光把各种包揉一起再塞给大家不是偶的初衷，所以还会配合偶的博客 **[fefork](http://www.fefork.com/)** 介绍些包的源码分析，把更本质的思考分享给大家。

当然，这篇套路也仅仅只包含 Node 层。希望后续还会有数据层的套路；会有数据层应对国际化的思考；会有做海量数据分析的技术选择、会有 NoSQL 各种维度的权衡等等...管他呢，反正活到老学到老嘛~ #论如何优雅的装逼#

> 当前时间为 2016/07/13，看看 2016/09/30 之前能否完成这篇 Node 套路。

### 目录一览

Node 项目搞了不少，不管是基于 koa 还是 express，反正初衷都是做好项目，目标都是让项目好维护。

下面是俺 Node 项目的目录结构，仅供参考：

```
$ tree -L 1
.
├── README.md // 友情提示：更新信息可以列在上面，方便查看升级历史
├── conf/
├── bin/ // 各种可执行的脚本
├── data/ // 存放些静态数据，如银行信息、城市信息、国家信息等
├── index.js
├── lib/ // 和 backend 相关的公共方法
├── logs/
├── middlewares/ // 大量中间件
├── node_modules/
├── package.json
├── pm2/
├── public/ // 静态文件根目录
├── routes/
├── shipitfile.js // 因为没用 gitlab, 所以上线/回滚依靠 Shipit 搞定
├── src/ // 原始的静态文件存放目录。如 img/css/js/tpl/gulpfile
├── test/ // 如果是纯接口的服务，那么单测肯定得有
├── tools/ // 和 backend 不相关的公共方法
└── views/ // 编译、压缩后的模板文件
```

### 环境介绍



koa 本身需要 >=0.11.x 版本的 Node 环境。

有关 Node 版本多说一句，我司去年上半年的 Node 环境是0.11.x，下半年升级至 4.3.2，近期升级至 6.0。为了升级至 6.0 确实还改了不少地方，每次大升级的背后都是程序员的血和泪呀...推荐阅读：[Breaking changes between v5 and v6](https://github.com/nodejs/node/wiki/Breaking-changes-between-v5-and-v6)

### Node包的解析

作为 **套路** 肯定得有套路的要求嘛，所以在这所依赖的包都是比较知名，有不错的文档和用户基数，有问题就怒上 stackoverflow 搞定。

下面是主要依赖的 Node 包：
- Koa
- PM2
- Winston
- Shipit
- AVA
- QConf

### 配置

### 日志

### 测试

### 发布
