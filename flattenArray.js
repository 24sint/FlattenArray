const data = ['a', ['b', 'c', ['d', 1]], 2, [3]];

function flatten(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++){
    let element = arr[i];
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    }
    else {
      flatArray.push(element);
    }
  }

  return flatArray;
}

const newArray = flatten(data);

console.log(newArray);
