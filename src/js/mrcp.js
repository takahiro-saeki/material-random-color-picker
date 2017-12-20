import colors from './color.js';
import shuffle from 'lodash-es/shuffle'
import isNull from 'lodash-es/isEmpty'

const mrcp = (option = { color: null, type: null, level: null, isObject: false }) => {
  const {color, type, level, isObject} = option;
  if(isNull(color) && isNull(type) && isNull(level)) {
    const render = shuffle(colors)
    if(isObject) {
      return render[0]
    }
    return render[0].code 
  }

  let box = colors;
  if(color) {
    box = box.filter(item => item.color === color)
  }
  
  if(type) {
    box = box.filter(item => item.type === type)
  }

  if(level) {
    box = box.filter(item => item.level === level)
  }

  const render = shuffle(box)
  
  if(isObject) {
    return render[0]
  }
  return render[0].code
}

export default mrcp;