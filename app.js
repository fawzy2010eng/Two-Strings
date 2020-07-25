function twoStrings(s1, s2) {
    let bol = true;
    if(s1.length > s2.length){
        for(let i = 0; i < s2.length; i++){
            if(s1.includes(s2[i])){
                bol =  true;
                break;
            }else{bol = false}  
        }  
    }else{
        for(let i = 0; i < s1.length; i++){
            if(s2.includes(s1[i])){
                bol =  true;
                break;
            }else{bol = false}  
        }  
      
    }
    if(bol){
      console.log('YES')
    }else{
      console.log('NO')  
    }
    
}
