function lowerCaseWords(arr) {
    let newArr=[]
    
    for (let i=0; i<arr.length; i++) {
        if (typeof(arr[i]) === 'string') {
            newArr.push(arr[i].toLowerCase())
        }
    }

    var output = new Promise((resolve, reject) => {
        if (newArr.length > 0) {
            resolve(newArr);
        } else {
            reject();
        }
    });

    return output;

    
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

let output = lowerCaseWords(mixedArray);

console.log(output);