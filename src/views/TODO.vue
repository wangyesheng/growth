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
        font-size: 15px;
        margin-bottom: 5px;
        color: #333;
      }

      .label {
        font-size: 13px;
        color: #666;
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
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "TODO",

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

    // const obj = { id: 1, name: "eos" };
    // const effectFn = () => {};
    // let targetMap = new WeakMap();
    // function track(target, key) {
    //   let depsMap = targetMap.get(target);
    //   if (!depsMap) {
    //     targetMap.set(target, (depsMap = new Map()));
    //   }
    //   let deps = depsMap.get(key);
    //   if (!deps) {
    //     depsMap.set(key, (deps = new Set()));
    //   }
    //   if (effectFn && !deps.has(effectFn)) {
    //     deps.add(effectFn);
    //   }
    //   console.log(targetMap);
    // }
    // track(obj, "id");

    return {
      ...toRefs(state),
      handleProcessing,
      handleCompleted,
    };
  },
};
</script>
