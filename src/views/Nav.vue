<template>
  <div class="nav-wrap">
    <el-menu
      mode="horizontal"
      :default-active="activeKey"
      @select="handleNavTo"
    >
      <el-menu-item index="/todo">待处理</el-menu-item>
      <el-menu-item index="/processing">处理中</el-menu-item>
      <el-menu-item index="/completed">已处理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(props, ctx) {
    const state = reactive({
      activeKey: "",
    });

    const router = useRouter();
    const route = useRoute();

    watch(
      () => route.path,
      (newVal, oldVal) => {
        state.activeKey = newVal;
      },
      {
        immediate: true,
      }
    );

    // const activeKey = computed(() => {
    //   return route.path;
    // });

    const handleNavTo = (key, keyPath) => {
      router.push(key);
    };

    return {
      ...toRefs(state),
      handleNavTo,
    };
  },
};
</script>