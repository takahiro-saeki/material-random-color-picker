# material-random-color-picker
[![Build Status](https://travis-ci.org/takahiro-saeki/material-random-color-picker.svg?branch=master)](https://travis-ci.org/takahiro-saeki/material-random-color-picker)
[![Dependency Status](https://gemnasium.com/badges/github.com/takahiro-saeki/material-random-color-picker.svg)](https://gemnasium.com/github.com/takahiro-saeki/material-random-color-picker)
[![Maintainability](https://api.codeclimate.com/v1/badges/41bcc12073cd3557e55f/maintainability)](https://codeclimate.com/github/takahiro-saeki/material-random-color-picker/maintainability)
[![Inline docs](http://inch-ci.org/github/takahiro-saeki/material-random-color-picker.svg?branch=master)](http://inch-ci.org/github/takahiro-saeki/material-random-color-picker)
[![npm version](https://badge.fury.io/js/material-random-color-picker.svg)](https://badge.fury.io/js/material-random-color-picker)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)  
this is for material design's color library.  

## motivation
sometimes, I need a color when I make mock design or framework in markup. it's slightly troublesome to choose color and check design. additionally, I'm usually using React.js or lit-html or something which generates HTML from javascript.  
if it can be used like uuid, that would be nice, so I made it!

## Example
Example page is [here](https://takahiro-saeki.github.io/material-random-color-picker/dist/index.html)  
and Example code is [here](https://github.com/takahiro-saeki/material-random-color-picker/tree/master/dev)  

## USAGE
first, you need below.
```
$ yarn add material-random-color-picker 
or 
$ npm i material-random-color-picker
```
and then, you need to import `mrcp()`.
```javascript
import mrcp from 'material-random-color-picker';

mrcp() // it will be rendered color randamly like #FFFFFF;
```

### API  
Basically, I refered to material design's color. Especially [this page](http://materializecss.com/color.html)  
if you got confused how to set option such as `color` , `type` , and `level` , please refer above page.  

```javascript
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

### LICENSE
[MIT](https://github.com/takahiro-saeki/material-random-color-picker/blob/master/LICENSE)