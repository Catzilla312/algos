const arr = [3,12,4,2];
let count = 0;

function SelectionSort(array){
    for (let i=0;i < array.length;i++){
        let indexMin = i;
        for (let j=i+1;j < array.length;j++){
            if(array[i] > array[j]){
                indexMin = j;
            }
            count+=1;
        }
        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}


console.log(SelectionSort(arr),"sorted");
console.log(count,"counter");