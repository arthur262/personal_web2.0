<h1 align="center">✨  personal_web2.0</h1>

### 这是一个用于展示个人经历的VUE demo,关于本人在摄影计算力和学生时期的一些经历。相比于普通的网线更希望在动效方面能让人感觉更舒服
&emsp;
### 技术栈: 
- Vue3.0 
- Vite
- TS
- Ant design.
- [网易云音乐 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
- 其余皆为手写.
&emsp;
## 项目目标
前端目标: 实现苹果官网的大部分特效，更添加一些特效来怎加页面的动感. 同时内嵌网易云音乐的音乐小组件，让用户放松一些。  
后台目标: 完全拥有前后端和后台，能够通过提交一整个.vue页面去对布局进行重新修改.

&emsp;
# 🚀 如何运行
## 准备工作
git clone https://github.com/powerdong/Music-player.git  
cd personal_web2.0  
cd vitePersonalweb

## 安装依赖
npm install
## 开启本地服务运行项目
npm run dev
&emsp;

# 👋目标功能  
- [x] 自增加乱序图片展示
- [x] 音乐基本功能，自定义音乐组件
- [x] 音乐歌词跟随
- [ ] 程序员页面的初始化
- [ ] 锚定化的图片展示

&emsp;
# 项目结构
```
├─public
│  ├─data
│  ├─Photo
│  └─video
└─src  
    ├─assets
    │  ├─api
    |  |  ├─language_detech.ts //用于检测当前路径是否是相对应的语言
    |  |  ├─themechanger.ts //用于切换主题色
    |  |  ├─common.ts //用于储运一些常用的api,例如防抖和歌词分解。
    │  ├─css
    │  └─img
    ├─components //储存所有复用组件
    │  ├─CV 
    │  ├─Photo
    │  └─System
    |     ├─menu_tool.vue //系统组件负责切换语言
    |     ├─musicBar.vue //负责播放音乐和连接到搜索音乐界面
    ├─router
    ├─theme //用于储存主题
    └─views
        ├─CN
        │  ├─Mobile //用于对应中文版手机界面[还未开发]
        │  └─PC //用于对应中文版电脑界面
        └─ENG
            ├─Mobile //用于对应英文版手机界面[还未开发]
            └─PC //用于对应英文版电脑界面
