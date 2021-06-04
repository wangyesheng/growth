<style lang="scss" scoped>
.todo-wrap {
  ::v-deep(.el-col) {
    margin-bottom: 10px;

    .el-card {
      min-height: 100px;
      cursor: pointer;
      position: relative;
    }
    .extra-link {
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }

  .todo-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      width: 290px;

      .author {
        font-size: 14px;
        margin-bottom: 5px;
        color: #666;
      }

      .label {
        font-size: 13px;
        color: #333;
      }
    }
  }
}
</style>

<template>
  <div class="todo-wrap">
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item, idx) in todos" :key="idx">
        <el-card shadow="hover">
          <div class="extra-link">
            <el-dropdown>
              <span style="font-size: 20px"> ... </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleProcessing(item.id)">
                    开始处理
                  </el-dropdown-item>
                  <el-dropdown-item @click="handleCompleted(item.id)">
                    已经完成
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="todo-item">
            <div class="icon">
              <i
                :class="`el-icon-${item.icon}`"
                :style="{ color: item.color, fontSize: '22px' }"
              />
            </div>
            <div class="content">
              <span class="author">{{ item.author }}</span>
              <span class="label">{{ item.content }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <Create /> -->
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

// import Create from "./Create";

export default {
  name: "TODO",

  // components: {
  //   Create,
  // },

  setup(props, ctx) {
    const store = useStore();
    const state = reactive({
      todos: computed(() =>
        store.state.plans.filter((x) => x.status == "TODO")
      ),
    });

    const handleProcessing = (id) => {
      store.commit("CHANGE_PLAN_STATUS", { id, status: "PROCESSING" });
    };

    const handleCompleted = (id) => {
      store.commit("CHANGE_PLAN_STATUS", { id, status: "COMPLETED" });
    };

    return {
      ...toRefs(state),
      handleProcessing,
      handleCompleted,
    };
  },
};
</script>
