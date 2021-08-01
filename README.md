# Logic Test

js file for logic test provided below or at file `logictest.js`.

```js
// to sort word based on alphabetical
function sortWord(word = '') {
  const arr = word.split('');
  const { length } = arr;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - i - 1; j += 1) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr.join('');
}

// SOLUTION for LOGIC TEST ANAGRAM
function groupingAnagram(data) {
  const groupAnagram = {};
  const { length } = data;

  // create group of anagrams
  for (let i = 0; i < length; i += 1) {
    const sortedWord = sortWord(data[i]);
    if (groupAnagram[sortedWord]) {
      groupAnagram[sortedWord].push(data[i]);
    } else {
      groupAnagram[sortedWord] = [data[i]];
    }
  }

  const result = [];
  // parse result object to array
  Object.keys(groupAnagram).forEach((group) => {
    result.push(groupAnagram[group]);
  });

  return result;
}
```

# Stockbit React Dev Test

## Install

### System Dependencies

- install [homebrew](http://brew.sh/) or the Windows equivalent
- nvm: `brew install nvm`
- Node >v10.16.2:
  - `nvm install 10.16.2`
  - & then `nvm use 10.16.2` when working on the project (see below about shell aliases and nvm defaults)
- npm: `brew install npm --ignore-dependencies`
  - (Installing npm will by-default install an extra copy of node in the homebrew context, unless you use `--ignore-dependencies`.)
- Install .eslintrc & .prettierrc support for your editor
  - this is an essential requirement to avoid stupid merge conflicts

### Project Dependencies

#### Dependency List

- `axios`; handle http request
- `react-redux`, `redux` & `redux-thunk`; data state management
- `redux-mock-store`; mocking redux state for unit testing

#### Installation

- `git clone` this repo
- `cd` into the cloned repo
- install node dependencies with `npm ci`

## Usage

### Running the web app

For Web the following commands should create a bundle where the corresponding .env.[environment] file will be taken into consideration:

```bash
npm run dev
npm run dev:test ==> DEV Environment
npm run dev:stag ==> STAG Environment
npm run dev:prod ==> PROD Environment
```

For build version, run this command:

```bash
npm run build
npm run build:test ==> DEV Environment
npm run build:stag ==> STAG Environment
npm run build:prod ==> PROD Environment
```

### Running unit testing

For runing unit test, please use this following commands:

```bash
npm run test => to run unit & snapshot testing
npm run test:update => to update snapshot component
npm run test:coverage => to run coverage check unit test
npm run test:view => to run coverage check unit test then view lcov report generated after coverage check
npm run test:open => to open lcov report
```
