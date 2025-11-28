export function removeDuplicates(arr){
    let uniqueValues = {};
    const flatArray = []
    for(let num of arr){
        if(!uniqueValues[num]){
            uniqueValues[num] = 1;
        }
    }

    for(let key in uniqueValues){
        flatArray.push(key)
    }

    return flatArray;
}