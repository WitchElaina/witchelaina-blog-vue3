const config = {
  site: {
    title: "WitchElaina's Blog",
    description: 'My site description',
    avatar: './ava.png',
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
      friends: {
        text: '友链',
        link: '/friends',
        icon: 'fa-solid fa-link',
      },
    },
    toc: {
      number: true,
      level: 2,
    },
  },
  plugin: {
    hitokoto: {
      api: 'https://v1.hitokoto.cn/',
      type: ['a', 'i'], // https://developer.hitokoto.cn/sentence/#句子类型-参数
    },
  },
  public: {
    prefix:
      'https://raw.githubusercontent.com/WitchElaina/witchelaina-blog-vue3/gh-pages/post',
  },
};

export const useConfig = () => config;
