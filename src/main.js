import { createApp } from "vue";
import App from "./App.vue";
//element-plus https://element-plus.gitee.io/#/zh-CN
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 1000 });
app.mount("#app");
