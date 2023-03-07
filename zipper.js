// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward.

// Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipper(arr1, arr2){
let newArr=[];
for (let i=0; i<arr1.length || i<arr2.length; i++){
    
    if( arr1[i]){
    newArr.push(arr1[i])  
    }
    
    if ( arr2[i]){
    newArr.push(arr2[i])
    }
}

return newArr

}

