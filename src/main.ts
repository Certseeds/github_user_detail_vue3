//
// @Github: https://github.com/Certseeds/github_user_detail_vue3
// @Organization: SUSTech
// @Author: nanoseeds
// @Date: 2021-01-02 00:23:17
// @LastEditors: nanoseeds
// @LastEditTime: 2021-01-02 01:24:12
// @License: AGPL3.0 or any later version
//
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
