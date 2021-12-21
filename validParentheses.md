**Given values**:
* A non-empty string containing a set of the following symbols: () {} []

**Goal**:
* Define a function that returns true when the given string is a valid expression, where all the opening symbols are correctly closed.

**Assumptions**:
* Argument will always be of type string.
* Argument can be empty string but not undefined.

**Example**:
***Input***
```javascript
const str = '([]({}))'
```
***Output***
```javascript
true
```
***Input***
```javascript
const str = '([]{}))'
```
***Output***
```javascript
false
```
---

```javascript

const str1 = '([]({}))';
const str2 = '([]{}))';

const isValid = (str) => {
    const opening = '({[';
    const closing = ')}]';

    const sum = str.split('').map(el => {
        if (opening.indexOf(el) >= 0) {
            return 1;
        } else {
            return -1;
        }
    }).reduce((a, b) => a + b);

    return sum === 0;
}

console.log(isValid(str1))
console.log(isValid(str2))

```