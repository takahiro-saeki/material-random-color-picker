module.exports = {
  "extends": [
    "prettier",
    "airbnb-base"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "rules": {
    "import/no-duplicates": 0
  },
};