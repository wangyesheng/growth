<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      appName: "Growth",
    });

    return () => {
      return (
        <>
          <div class="header-wrap">
            <div class="inner flex">
              <div class="logo">{state.appName}</div>
              <div class="user">
                <img src={require("../assets/images/user-avatar.jpg")} />
              </div>
            </div>
          </div>
        </>
      );
    };
  },
};
</script>

<style lang="scss" scoped>
.header-wrap {
  height: 80px;
  line-height: 80px;
  width: 100%;
  box-shadow: 0 2px 8px #f0f1f2;
  .logo {
    display: inline-block;
    color: #fa8c16;
    font-size: 28px;
    font-style: italic;
    font-weight: 600;
  }

  .user {
    cursor: pointer;
    transition: all .3s;
    img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>