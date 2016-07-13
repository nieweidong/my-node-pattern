# my-node-pattern

2016年Q2，我司的 Node 项目已开始逐步往 Docker 上部署，有部分多年积累下的老套路也用不上啦，所以想趁着这个时期，用这个项目梳理下这些年俺对 Node 项目的一点想法与理解。

这篇是套路版，可以理解这是个依赖黑洞，利用 Node 生态来玩转服务端开发。当然，我自认算是个偏执的程序员，所以还会配合偶的博客 **[fefork](http://www.fefork.com/)** 介绍些包的源码分析。

> 当前时间为 2016/07/13，看看 2016/09/30 之前能否全部完成。

### 环境

koa本身需要 >=0.11.x 版本的 Node 环境。

有关 Node 版本多说一句，我司去年上半年的 Node 环境是0.11.x，下半年升级至 4.3.2，近期升级至 6.0。为了升级至 6.0 确实还改了不少地方，每次大升级的背后都是程序员的血和泪呀...推荐阅读：[Breaking changes between v5 and v6](https://github.com/nodejs/node/wiki/Breaking-changes-between-v5-and-v6)

### 目录

### 包

作为 **套路** 肯定得有套路的要求嘛，所以在这所依赖的包都是比较知名，有不错的文档和用户基数，有问题就怒上 stackoverflow 搞定。

下面是主要依赖的 Node 包.
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
