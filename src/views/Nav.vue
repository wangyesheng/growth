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
      <el-button type="primary" size="medium" class="NewButton" @click="handleNew()">新增</el-button>
    </el-menu>
  </div>
  <el-dialog
      title="新增待办事项"
      v-model="dialogNew"
      width="30%">
    <span>先弹框出来</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import {computed, reactive, toRefs, watch} from "vue";
import {useRouter, useRoute} from "vue-router";

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

    // const handleNew =
    return {
      ...toRefs(state),
      handleNavTo,
    };
  },
  data() {
    return {
      dialogNew: false
    }
  },
  methods: {
    handleNew() {
      this.dialogNew = true
    },
    handleClose() {
      this.dialogNew = false
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-wrap .NewButton{
  margin: 10px 10px;
  float: right;
}
</style>