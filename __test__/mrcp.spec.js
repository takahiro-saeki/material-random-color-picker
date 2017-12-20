import mrcp from '../src/js/mrcp';

describe('mrcp test', () => {
  test('No arguement', () => {
    expect(mrcp()).toBeString()
  })
  
  test('argument has isObject which is true', () => {
    expect(mrcp({isObject: true})).toBeObject()
  })
  
  test('argument has isObject which is false which is default param', () => {
    expect(mrcp({isObject: false})).toBeString()
  })
  
  test('argument has object which has params', () => {
    expect(mrcp({isObject: true})).toContainKeys(['type', 'color', 'code', 'level', 'id'])
  })
  
  test('to specify level', () => {
    expect(mrcp({isObject: true, level: 1})).toContainValues([1]);
    expect(mrcp({isObject: true, level: 2})).toContainValues([2]);
    expect(mrcp({isObject: true, level: 3})).toContainValues([3]);
    expect(mrcp({isObject: true, level: 4})).not.toContainAllValues([100, 1]);
  })
  
  test('to specify color', () => {
    expect(mrcp({isObject: true, color: 'red'})).toContainValues(['red']);
    expect(mrcp({isObject: true, color: 'blue'})).toContainValues(['blue']);
    expect(mrcp({isObject: true, color: 'red'})).not.toContainAllValues(['blue']);
  })
  
  test('to specify type', () => {
    expect(mrcp({isObject: true, type: 'normal'})).toContainValues(['normal']);
    expect(mrcp({isObject: true, type: 'darken'})).toContainValues(['darken']);
    expect(mrcp({isObject: true, type: 'lighten'})).toContainValues(['lighten']);
    expect(mrcp({isObject: true, type: 'lighten'})).not.toContainAllValues(['darken']);
  })
})