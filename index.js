let test = [10,2,4,6,9,12,0];

function bubbleSort(input) {
    let n = input.length;
    for(let i = 0 ; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(input[j] > input[j+1]) {
                let aux = input[j];
                input[j] = input[j+1];
                input[j+1] = aux;
            }
        }
    }
}

function printArray(input){
    input.forEach(element => {
        console.log(element);
    });
}