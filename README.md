# compare-sets

Given two sets, *compare-sets* will return sets of the added, retained, and removed items

## Installation

```
npm install [--save] compare-sets
```

## Usage

```javascript
var oldSet = new Set([1, 2, 3, 4])
var newSet = new Set([2, 4, 5, 6])

compareSets(oldSet, newSet)
// {
//   added: Set { 5, 6 },
//   retained: Set { 2, 4 },
//   remvoed: Set { 1, 3 }
// }
```

## Caveats

This library assumes an environment with [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) available
