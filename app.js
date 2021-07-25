function getResult(){
    var cp=parseInt(document.querySelector("#txt1").value);
    var qty=parseInt(document.querySelector("#txt2").value);
    var sp=parseInt(document.querySelector("#txt3").value);
    var result=document.querySelector("#result");
    var back=document.querySelector("#container");
    var pl,percent;
    if(cp>0 && sp>0 && qty>0){
        if(cp>sp){
            pl=(cp-sp)*qty;
            percent=(((cp-sp)*100)/cp).toFixed(2);
            result.innerHTML="You lost "+percent+"%.Your total loss is ₹"+pl;
          document.body.style.backgroundImage="url('cashfull.jpg')";
            if(percent>50){
                console.log("sad theme");
                document.body.style.backgroundImage="url('fire-15.gif')";
                
                
            }
        }
        else if(sp>cp){
            pl=(sp-cp)*qty;
            percent=(((sp-cp)*100)/cp).toFixed(4);
            result.innerHTML="You gain "+percent+"%.Your total Profit is ₹"+pl;
            document.style.backgroundImage="url('cashfull.jpg')";
            if(percent>50){
                console.log("Happy theme");
                document.body.style.backgroundImage="url('celeb.gif')";
            }
        }
    }    
    else{
        result.innerHTML="Amount should be Greater than zero";
    }

 }
