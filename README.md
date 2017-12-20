# material-random-color-picker
this is for material design's color library.  

## motivation
sometimes, I need a color when I make mock design or framework in markup. it's slightly troublesome to choose color and check design. additionally, I'm usually using React.js or lit-html or something which generates HTML from javascript.  
if it can be used like uuid, that would be nice, so I made it!

## USAGE
first, you need below.
```
$ yarn or npm i
```
and then, you need to import `mrcp()`.
```javascript
import mrcp from 'material-random-color-picker';

mrcp() // it will be rendered color randamly like #FFFFFF;
```

### API  
```
mrcp(option)
```
- `option`: type is object
  - `color`: default is `null` and type is string
  - `type`: default is `null` and type is string
  - `level`: default is `null` and type is number
  - `isObject`: default is false and type is boolean

```javascript
mrcp({color: 'red', type: 'lighten'})
// #ef9a9a

mrcp({isObject: true, level: 1})
// { code: "#84ffff", color: "cyan", id: 109, level:1, type: "accent" }
// just in case, id is a internal id. you don't need to care of it.
```
