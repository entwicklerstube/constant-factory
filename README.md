# Constant Factory
> Stop rewriting the constant name in each entry use a factory for this job

[![Zero Dependencies](https://img.shields.io/badge/zero-dependencies-green.svg)]()

### Install
**npm**
```
npm install constant-factory --save-dev
```

**yarn**
```
yarn add constant-factory --dev
```

### Usage
```js
// normal
constant(CONSTANT_NAME<STRING>, CONSTANT_ENTRIES<ARRAY>)

// advanced
constant(CONSTANT_COLLETION<ARRAY>)
```

### Example
Before:
```js
export const MY_CONSTANT = {
  TODO: 'MY_CONSTANT_TODO',
  ISSUES: 'MY_CONSTANT_ISSUES',
}
```

Now:
```js
import c from 'constant-factory'

export const MY_CONSTANT = c('MY_CONSTANT', [
  'TODO',
  'ISSUES'
])

// returns
// {
//   TODO: 'MY_CONSTANT_TODO',
//   ISSUES: 'MY_CONSTANT_ISSUES'
// }
```

Advanced:
```js
import c from 'constant-factory'

export const { MY_CONSTANT, ANOTHER_CONSTANT } = c([
  'MY_CONSTANT': [
    'TODO', 'ISSUES'
  ],
  'ANOTHER_CONSTANT': [
    'DATES'
  ],
])

// returns
// {
//   MY_CONSTANT: {
//     TODO: 'MY_CONSTANT_TODO',
//     ISSUES: 'MY_CONSTANT_ISSUES'
//   },
//   ANOTHER_CONSTANT: {
//     DATES: 'ANOTHER_CONSTANT_DATES'
//   }
// }
```
