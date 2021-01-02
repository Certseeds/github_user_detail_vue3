<!--
 * @Github: https://github.com/Certseeds/github_user_detail_vue3
 * @Organization: SUSTech
 * @Author: nanoseeds
 * @Date: 2021-01-02 00:23:17
 * @LastEditors: nanoseeds
 * @LastEditTime: 2021-01-02 22:27:26
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    ref="RefChilde"
    @click="fnCallChild"
    msg_in="Welcome to Your Vue.js + TypeScript App"
  />
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
//export default class App extends Vue {}
const AppMain = defineComponent({
  name: "father",
  components: { HelloWorld },
  setup(): {
    RefChilde: Ref<unknown>;
    fnCallChild: () => void;
  } {
    const RefChilde = ref(); //RefChilde 要和Son组件上的class名相同
    const fnCallChild = () => {
      RefChilde.value.reversedMessage();
    };
    return { RefChilde, fnCallChild };
  },
});
export default AppMain;
</script>
<style scoped></style>
