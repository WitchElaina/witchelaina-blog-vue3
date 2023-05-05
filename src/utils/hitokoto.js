// 每日一言 hitokoto
// 链接 https://developer.hitokoto.cn/

import { useConfig } from '../config';

const config = useConfig().plugin.hitokoto;

export const getHitokoto = async () => {
  console.log(`Sending request to ${config.api}`);
  let url = config.api;
  if (config.type !== []) {
    url += '?';
    config.type.forEach((type) => {
      url += `c=${type}&`;
    });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
      content: data.hitokoto,
      from: data.from,
      author: data.from_who,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
