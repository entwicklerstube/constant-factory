# Constant Factory

> Stop rewriting the constant name in each entry use a factory for this job

[![Zero Dependencies](https://img.shields.io/badge/zero-dependencies-brightgreen.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/entwicklerstube/constant-factory/badge.svg?branch=master)](https://coveralls.io/github/entwicklerstube/constant-factory?branch=master)
[![Build Status](https://travis-ci.org/entwicklerstube/constant-factory.svg?branch=master)](https://travis-ci.org/entwicklerstube/constant-factory)
[![devDependencies Status](https://david-dm.org/entwicklerstube/constant-factory/dev-status.svg)](https://david-dm.org/entwicklerstube/constant-factory?type=dev)
[![greenkeeper badge](https://badges.greenkeeper.io/entwicklerstube/constant-factory.svg)](https://greenkeeper.io/)

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

export const { MY_CONSTANT, ANOTHER_CONSTANT } = c({
  'MY_CONSTANT': [
    'TODO', 'ISSUES'
  ],
  'ANOTHER_CONSTANT': [
    'DATES'
  ]
})

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

Expert:
> Add additional subs in subs
```js
import c from 'constant-factory'

export const { MY_CONSTANT, ANOTHER_CONSTANT } = c({
  'MY_CONSTANT': [
    'TODO',
    {
      'STATUS': [
        'DONE',
        'OPEN',
      ]
    }
  ],
})

// returns
// {
//   MY_CONSTANT: {
//     TODO: 'MY_CONSTANT_TODO',
//     STATUS: [
//       'MY_CONSTANT_STATUS_DONE',
//       'MY_CONSTANT_STATUS_OPEN'
//     ]
//   }
// }
```
