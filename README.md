# personal_web2.0

### 这是一个用于展示个人经历的VUE demo,更多关注在动效方面,在api方面目前还没使用node作为后端
技术栈: Vue3.0 +Vite+TS(尝试)+Ant design.其余皆为手写.

## 项目目标
完全拥有前后端和后台，能够通过提交一整个.vue页面去对布局进行重新修改.

&emsp;
# 如何运行
## 准备工作
git clone https://github.com/powerdong/Music-player.git  
cd personal_web2.0  
cd vitePersonalweb

## 安装依赖
npm install
## 开启本地服务运行项目
npm run dev

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
    |  |  ├─language_detech.js //用于检测当前路径是否是相对应的语言
    |  |  ├─themechanger.js //用于切换主题色
    │  ├─css
    │  └─img
    ├─components //储存所有复用组件
    │  ├─CV 
    │  ├─Photo
    │  └─System
    |     ├─menu_tool.vue //系统组件负责切换语言
    ├─router
    ├─theme //用于储存主题
    └─views
        ├─CN
        │  ├─Mobile //用于对应中文版手机界面
        │  └─PC //用于对应中文版电脑界面
        └─ENG
            ├─Mobile //用于对应英文版手机界面
            └─PC //用于对应英文版电脑界面
