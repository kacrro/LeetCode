var map = function(arr, fn) {
    let returnedArray= new Array(arr.length);
        for (const [i, val] of arr.entries()) 
        {
        returnedArray[i]=fn(arr[i],i);
        }
    return returnedArray;
};
