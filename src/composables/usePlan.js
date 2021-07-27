import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

export function usePlans() {
  const state = reactive({
    plans: [],
  });
  onMounted(() => {
    setTimeout(() => {
      state.plans = [
        {
          id: 7,
          icon: 'light-rain',
          author: '肖申克的救赎',
          content: '那是一种内在的东西， 他们到达不了，也无法触及的~',
          color: '#2f54eb',
          status: 'TODO',
        },
      ];
    }, 3000);
  });
  return state;
}
