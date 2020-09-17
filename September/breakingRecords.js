function breakingRecords(scores){
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0; 
    let minCount = 0;
    for(let i =0; i<scores.length; i++){
        if(scores[i]>max){
            max = scores[i]
            maxCount++;
        }
        if(scores[i]<min){
            min = score[si]
            minCount++
        }
    }
    console.log(maxCount, minCount);
}