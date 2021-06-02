<style lang="scss" scoped>
.processing-wrap {
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

  .processing-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      margin-left: 20px;
      display: flex;
      flex-direction: column;

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
  <div class="processing-wrap">
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item, idx) in processings" :key="idx">
        <el-card shadow="hover">
          <div class="extra-link">
            <el-dropdown>
              <span style="font-size: 20px"> ... </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleTodo(item.id)">
                    TODO
                  </el-dropdown-item>
                  <el-dropdown-item @click="handleCompleted(item.id)">
                    Completed
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="processing-item">
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
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "Processing",

  setup(props, ctx) {
    const store = useStore();
    const state = reactive({
      processings: computed(() =>
        store.state.plans.filter((x) => x.status == "PROCESSING")
      ),
    });

    const handleTodo = (id) => {
      store.commit("CHANGE_PLAN_STATUS", { id, status: "TODO" });
    };

    const handleCompleted = (id) => {
      store.commit("CHANGE_PLAN_STATUS", { id, status: "COMPLETED" });
    };

    return {
      ...toRefs(state),
      handleTodo,
      handleCompleted,
    };
  },
};
</script>
