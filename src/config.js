const config = {
  site: {
    title: "WitchElaina's Blog",
    description: 'My site description',
    avatar: './public/ava.png',
    social: [
      {
        name: 'Github',
        icon: 'fa-brands fa-github',
        link: 'https://github.com/witchelaina/',
      },
      {
        name: 'Twitter',
        icon: 'fa-brands fa-twitter',
        link: 'https://twitter.com/Mszook2002',
      },
    ],
  },
  plugin: {
    hitokoto: {
      api: 'https://international.v1.hitokoto.cn/',
      type: ['a'], // https://developer.hitokoto.cn/sentence/#句子类型-参数
    },
  },
};

export const useConfig = () => config;
