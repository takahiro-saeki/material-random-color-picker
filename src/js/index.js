import colors from '../../node/color.js';
import shuffle from 'lodash-es/shuffle'
import isEmpty from 'lodash-es/isEmpty'

const mrcp = (option) => {
  if(isEmpty(option)) {
    const render = shuffle(colors)
    return render[0]
  }
  
  const { color, type, level } = option;
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
  return render[0]
}

export default mrcp;