// let arra = [0,1,2,3,4,5,6,7,8,9];
// let small = arra[0];
// let max = arra[0];

// for (let x = 1; x < arra.length; x++) {
//     if (arra[x] < small) {
//         smallest = arra[x];
//     }
//     if (arra[x] > max) {
//         max = arra[x];
//     }
// }

// console.log(small); 
// console.log(max);

function sumOfArrays(array1, array2) {

    if (array1.length !== array2.length) {
        throw new Error("Both arrays must have the same length.");
    }
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

try {
    const result = sumOfArrays(array1, array2);
    console.log("Sum of the two arrays:", result);
} catch (error) {
    console.error(error.message);
}
