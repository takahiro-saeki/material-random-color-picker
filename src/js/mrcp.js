import colors from './color';
import { random, isNumber, isString } from './utils';
import colorList from './colorList';
import colorType from './colorType';

const mrcp = (option = {
  color: null,
  type: null,
  level: null,
  isObject: false,
}) => {
  const {
    color, type, level, isObject,
  } = option;
  if (!isString(color) && !isString(type) && !isNumber(level)) {
    const render = random(colors);
    if (isObject) {
      return render;
    }
    return render.code;
  }

  let box = colors;
  if (color && isString(color) && colorList.includes(color)) {
    box = box.filter(item => item.color === color);
  }

  if (type && isString(type) && colorType.includes(type)) {
    box = box.filter(item => item.type === type);
  }

  if (level && isNumber(level) && level < 6) {
    box = box.filter(item => item.level === level);
  }

  const render = random(box);

  if (isObject) {
    return render;
  }
  return render.code;
};

export default mrcp;
