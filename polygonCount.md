**Given values**:
* An array of arrays. Each sub-array has four elements consisting of integers greater or equal to zero.

**Goal**:
* Determinate how many squares, rectangles and other four-sided polygons may be formed based on the array.

**Assumptions**:
* A square can be formed if all the sides are equal and greater than 0
* A rectangle can be formed if sides in position 0 and 2 are equal, sides in position 1 and 3 are equal, all of them being greater than zero.
* Any other combination should form a different four-sided polygon.

**Example**:
***Input***
```javascript
const arr = [
	[1, 1, 1, 1],
	[2, 5, 2, 5],
	[7, 8, 9,  10],
	[0, 2, 0, 2],
	[0, 0, 0, 0],
]
```
***Output***
```javascript
{
	squares: 1,
	rectangles: 1,
	polygons: 3
}
```
---
```javascript

const arr = [
	[1, 1, 1, 1],
	[2, 5, 2, 5],
	[7, 8, 9,  10],
	[0, 2, 0, 2],
	[0, 0, 0, 0],
]

let test = () => {
	const result = {
    	squares: 0,
      	rectangles: 0,
      	polygons: 0
    }

    for (const s of arr) {
      	if (Math.min.apply(null, s) <= 0) { result.polygons++ }
      	else if (s[0] === s[1] && s[1] === s[2] && s[2] === s[3]) { result.squares++ }
      	else if (s[0] === s[2] && s[1] === s[3]) { result.rectangles++ }
      	else { result.polygons++ }
    }

    return result
}

console.log(test())

```