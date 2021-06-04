<script>
import { reactive, toRefs } from "vue";
export default {
  setup(props, ctx) {
    const state = reactive({
      label: "creation",
    });
    return () => {
      return (
        <>
          <div>{state.label}</div>
        </>
      );
    };
  },
};
</script>