function birthday(s,d,m){
    let count = 0;
    if(s.length < m){
        return count;
    }
    for(let i=0; i < s.length; i++){
        let subArray = s.slice(i, i+m)
        let subSum = 0
        for(let j=0; j< subArray.length; j++){
            subSum += subArray[j];
        }
        if(subSum==d){
            count++
        }
    }
    return count
}
