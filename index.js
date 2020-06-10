// Add your functions here

function map(sourceArray,work){
  let newArr=[]
    sourceArray.forEach(elem=>{
      newArr.push(work(elem));
    });
    return newArr;
}
function reduce(arr, callback, startingValue){
<<<<<<< HEAD
  let memo = (!!startingValue) ? startingValue : arr[0]
  // let i = (!!starting) ? 0 : 1

  for (let i= (!!startingValue) ? 0 : 1 ; i < arr.length; i++) {
=======
  let memo = (!!startingValue) ? starting : arr[0]
  // let i = (!!starting) ? 0 : 1

  for (let i= (!!starting) ? 0 : 1 ; i < src.length; i++) {
>>>>>>> 5543aaf8790d76e814c42412a475cf89a61ff08a
    memo = callback(arr[i], memo)
  }

  return memo;
<<<<<<< HEAD
}
=======
}
>>>>>>> 5543aaf8790d76e814c42412a475cf89a61ff08a
