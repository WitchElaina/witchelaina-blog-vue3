// 获取定义变量的hex值
const getHex = (name) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const hex = rootStyles.getPropertyValue(name).trimStart();
  console.log(hex);
  return hex;
};

// hex转换成rgba
const hexToRgba = (hex, alpha) => {
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  console.log(`rgba(${r},${g},${b},${alpha})`);
  return `rgba(${r},${g},${b},${alpha})`;
};

const hexVarToRgba = (name, alpha) => {
  return hexToRgba(getHex(name), alpha);
};

export { getHex, hexToRgba, hexVarToRgba };
