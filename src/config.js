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
      {
        name: 'Mail',
        icon: 'fa-solid fa-envelope',
        link: 'mailto:mail@mszook.art',
      },
    ],
    nav: {
      home: {
        text: '主页',
        link: '/',
        icon: 'fa-solid fa-home',
      },
      catalog: {
        text: '目录',
        link: '/catalog',
        icon: 'fa-solid fa-book',
      },
      archive: {
        text: '归档',
        link: '/archive',
        icon: 'fa-solid fa-archive',
      },
      anime: {
        text: '追番',
        link: '/anime',
        icon: 'fa-brands fa-bilibili',
      },
      friends: {
        text: '友链',
        link: '/friends',
        icon: 'fa-solid fa-link',
      },
    },
  },
  plugin: {
    hitokoto: {
      api: 'https://international.v1.hitokoto.cn/',
      type: ['a'], // https://developer.hitokoto.cn/sentence/#句子类型-参数
    },
  },
};

export const useConfig = () => config;
