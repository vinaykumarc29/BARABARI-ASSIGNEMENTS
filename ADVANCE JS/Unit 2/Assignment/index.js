const getElementAtIndex = (arr,index)=>{
    try{
        if(index > arr.length){
            throw new Error(`Array Index ${index} is out of boundry !!`);
        }
        console.log(arr[index]);
    }catch(error){
        console.log(error);
    }finally{
        console.log("access attempt is successful !!")
    }
}



let array = [10,20,30,40,50]
getElementAtIndex(array,40);