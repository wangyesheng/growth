<script>
import {
  reactive,
  ref,
  onMounted,
  toRefs,
  getCurrentInstance,
  watchEffect,
} from "vue";
export default {
  props: ["id"],

  setup(props, ctx) {
    const state = reactive({
      label: "creation",
    });

    const count = ref(0);
    const num = ref(0);
    
    setTimeout(() => {
      count.value = 1;
      num.value = 1;
    }, 1000);

    watchEffect(() => {
      console.log(count.value);
      console.log(num.value);
    });

    const createRef = ref(null);

    onMounted(() => {
      console.log(createRef.value);
    });

    return {
      ...toRefs(state),
      createRef,
    };
  },

  render() {
    return (
      <>
        <div ref="createRef">{this.label}</div>
      </>
    );
  },

  mounted() {
    // console.log(this.$refs.createRef);
  },
};
</script>