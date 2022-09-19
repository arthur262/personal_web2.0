<h1 align="center">✨  personal_web2.0</h1>

### 这是一个用于展示个人经历的VUE demo,关于本人在摄影计算力和学生时期的一些经历。相比于普通的网线更希望在动效方面能让人感觉更舒服
### This is a VUE demo to show my personal experience, which is about my experience in photography and computing power as a student. Compared with ordinary network cable, it is hoped that the dynamic effect can make people feel more comfortable
&emsp;
### 技术栈 Technology used: 
- Vue3.0 
- Vite
- TS
- Ant design.
- [网易云音乐 API][NetEase Cloud Music API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
- 其余皆为手写 All resest are handwritten.
&emsp;
## 项目目标 Project Task
前端目标: 实现苹果官网的大部分特效，更添加一些特效来怎加页面的动感. 同时内嵌网易云音乐的音乐小组件，让用户放松一些。  
后台目标: 完全拥有前后端和后台，能够通过提交一整个.vue页面去对布局进行重新修改.  
Front end goal: to achieve most of the effects of Apple official website, but also to add some effects to add dynamic page. At the same time, the music group embedded with NetEase Cloud music allows users to relax.  
Background objective: Full ownership of the front and back ends and background, and the ability to re-modify the layout by submitting an entire.vUE page.  
&emsp;
# 🚀 如何运行 How to run
## 准备工作 prepare
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

# 👋 Target function
- [x] Automatically adds out-of-order images to display
- [x] Basic music function, customize music components
- [x] Music lyrics to follow
- [] Initialization of the programmer page
- [] anchoring picture display
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
    |  |  ├─language_detech.ts //用于检测当前路径是否是相对应的语言 Used to check whether the current path is in the corresponding language
    |  |  ├─themechanger.ts //用于切换主题色 Used to switch theme colors
    |  |  ├─common.ts //用于储运一些常用的api,例如防抖和歌词分解。Used to store and transport some common API, such as anti - shake and lyrics decomposition.
    │  ├─css
    │  └─img
    ├─components //储存所有复用组件 Store all reusable components
    │  ├─CV 
    │  ├─Photo
    │  └─System
    |     ├─menu_tool.vue //系统组件负责切换语言 The system component is responsible for switching languages
    |     ├─musicBar.vue //负责播放音乐和连接到搜索音乐界面 Responsible for playing music and connecting to the search music interface
    ├─router
    ├─theme //用于储存主题 used to sore the theme css
    └─views
        ├─CN
        │  ├─Mobile //用于对应中文版手机界面[还未开发] For Chinese version of mobile phone interface [not yet developed]
        │  └─PC //用于对应中文版电脑界面 It corresponds to the Chinese version of the Browser interface
        └─ENG
            ├─Mobile //用于对应英文版手机界面[还未开发]For English version of mobile phone interface [not yet developed]
            └─PC //用于对应英文版电脑界面 It corresponds to the English version of the Browser interface
