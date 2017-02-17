**Given values**:
* A non-empty zero-indexed array
* An integer

**Goal**:
* Define a function that returns true when the given integer can be obtained by the sum of two elements of the array.

**Assumptions**:
* All values are integer numbers

```javascript

const arr = [11, 42, 2, 98, 64, 35, 5, 30, 53, 81, 100, -2]
const sum = 98

let test = () => {
    for (const [i, element] of arr.entries()) {
        const subArr = arr.slice(i+1)

        for (const [j, element] of subArr.entries()) {
            if (arr[i] + subArr[j] === sum) {
                return true
            }
        }
    }

    return false
}

console.log(test())

```