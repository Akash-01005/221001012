const dateAndTime = (validity=30) => {
   let time = new Date().toISOString().split("T");
   const min = (parseInt(time[1].split(":")[1])+parseInt(validity))%60;
   let expiryTime = ""
    const arr = time[1].split(":");
    for(let i=0;i<arr.length;i++){
        if(i==1){
            expiryTime += min+":";
            continue;
        }
        expiryTime+=arr[i]+":"
    }
    time[1] = expiryTime;
    let validTime = "";
    for(let i=0;i<time.length;i++){
        validTime+=time[i]+"T";
    }
    return validTime.slice(0,validTime.length-2);
}

export default dateAndTime;