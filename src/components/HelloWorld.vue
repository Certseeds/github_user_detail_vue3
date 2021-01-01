<!--
 * @Github: https://github.com/Certseeds/github_user_detail_vue3
 * @Organization: SUSTech
 * @Author: nanoseeds
 * @Date: 2021-01-02 00:23:17
 * @LastEditors: nanoseeds
 * @LastEditTime: 2021-01-02 01:24:53
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const Helloworld = defineComponent({
  props: {
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>,
    },
  },
  data() {
    return {
      msg: "Vue3 code style",
    };
  },
  methods: {
    reversedMessage(): string {
      this.msg = this.msg.split(" ").reverse().join(" ");
      return this.msg;
    },
  },
});
export default Helloworld;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
