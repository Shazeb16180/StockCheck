function getResult(){
    var cp=parseInt(document.querySelector("#txt1").value);
    var qty=parseInt(document.querySelector("#txt2").value);
    var sp=parseInt(document.querySelector("#txt3").value);
    var pl,percent;
    if(cp>0 && sp>0 && qty>0){
        if(cp>sp){
            pl=(cp-sp)*qty;
            percent=(((cp-sp)*100)/cp).toFixed(2);
            console.log("Loss of:",pl,percent);
            if(percent>50){
                console.log("sad theme");
            }
        }
        else if(sp>cp){
            pl=(sp-cp)*qty;
            percent=(((sp-cp)*100)/cp).toFixed(4);
            console.log("profit of:",pl,percent);
            if(percent>50){
                console.log("Happy theme");
                document.querySelector("#container").style.backgroundImage="url('fire-17.gif')";
                document.querySelector("#container").style.backgroundColor="black";
            }
        }
    }    
    else{
        console.log("error no zero");
    }

 }
