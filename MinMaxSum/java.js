function miniMaxSum(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    
    for(var i = 1; i < arr.length; i++){
        sum += arr [i]
        if (arr[i]< min){
            min = arr[i]
        }
        else if(arr[i] > max){
            max = arr[i]
        }
            }
            console.log(sum - max , sum - min);

}