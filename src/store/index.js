import { createStore } from 'vuex';

export default createStore({
  state: {
    plans: [
      {
        id: 1,
        icon: 'light-rain',
        author: '肖申克的救赎',
        content: '那是一种内在的东西， 他们到达不了，也无法触及的~',
        color: '#2f54eb',
        status: 'TODO',
      },
      {
        id: 2,
        icon: 'cloudy-and-sunny',
        author: '权力的游戏',
        content: '那时候我只会想自己想要什么，从不想自己拥有什么~',
        color: '#722ed1',
        status: 'TODO',
      },
      {
        id: 3,
        icon: 'heavy-rain',
        author: '阿甘正传',
        content: '生命就像一盒巧克力，结果往往出人意料~',
        color: '#1890ff',
        status: 'TODO',
      },
      {
        id: 4,
        icon: 'sunny',
        author: '卡萨布兰卡',
        content: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆~',
        color: '#fa541c',
        status: 'TODO',
      },
      {
        id: 5,
        icon: 'lightning',
        author: '肖申克的救赎',
        content: '希望是一个好东西，也许是最好的，好东西是不会消亡的~',
        color: '#eb2f96',
        status: 'TODO',
      },
      {
        id: 6,
        icon: 'moon',
        author: '天空之城',
        content: '如谷之歌，扎根土里。与风共存，与种子越冬，与鸟歌颂~',
        color: '#52c41a',
        status: 'TODO',
      },
    ],
  },

  mutations: {
    CHANGE_PLAN_STATUS(state, payload) {
      state.plans.find(x => x.id == payload.id).status = payload.status;
    },
  },

  actions: {},

  modules: {},
});
