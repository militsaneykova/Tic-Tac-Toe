   var  switchPlayer="X";
   window.onload = function (){
        var elements= document.querySelectorAll('.box');
        var resetAll = document.getElementById('button');
        
        elements[0].addEventListener('click', function(){startTheGame(elements[0])});
        elements[1].addEventListener('click', function(){startTheGame(elements[1])});
        elements[2].addEventListener('click', function(){startTheGame(elements[2])});
        elements[3].addEventListener('click', function(){startTheGame(elements[3])});
        elements[4].addEventListener('click', function(){startTheGame(elements[4])});
        elements[5].addEventListener('click', function(){startTheGame(elements[5])});
        elements[6].addEventListener('click', function(){startTheGame(elements[6])});
        elements[7].addEventListener('click', function(){startTheGame(elements[7])});
        elements[8].addEventListener('click', function(){startTheGame(elements[8])});
        resetAll.addEventListener('click',function(){resetTheGame(elements)});
    };

    function startTheGame (elem){
        if (doNotChangeText(elem)){return}
            if  (whoIsGoingToWin(switchPlayer)){
                alert ( 'The winner is '+ `${switchPlayer}`);
            } else if (switchPlayer==="X"){
                elem.style["background-image"]="url('play1.jpeg')";
                elem.style["background-size"]="cover";
                elem.style["background-position"] = "center";

            
            }else{
                 elem.style["background-image"]="url('play2.jpeg')";
                 elem.style["background-size"]="cover";
                 elem.style["background-position"] = "center";
                            
                    }

        if ( switchPlayer === "X") {
            switchPlayer = "O";
        }else 
        {
            switchPlayer = "X";        
        }
        elem.innerHTML = switchPlayer;
            
    };

    function doNotChangeText (element){
        if (element.innerHTML==="X" || element.innerHTML==="O"  ){
            alert("Choose another box");
            return true;
        }
    };
    

function whoIsGoingToWin (choise){
    var result1 = false;
    if (
        document.getElementById('one').innerHTML === choise &&
        document.getElementById('two').innerHTML === choise &&
        document.getElementById('three').innerHTML === choise ||
        document.getElementById('four').innerHTML === choise &&
        document.getElementById('five').innerHTML === choise &&
        document.getElementById('six').innerHTML === choise ||
        document.getElementById('seven').innerHTML === choise &&
        document.getElementById('eigth').innerHTML === choise &&
        document.getElementById('nine').innerHTML === choise ||
        document.getElementById('one').innerHTML === choise &&
        document.getElementById('five').innerHTML === choise &&
        document.getElementById('nine').innerHTML === choise ||
        document.getElementById('three').innerHTML === choise &&
        document.getElementById('five').innerHTML === choise &&
        document.getElementById('seven').innerHTML === choise ||
        document.getElementById('one').innerHTML === choise &&
        document.getElementById('four').innerHTML === choise &&
        document.getElementById('seven').innerHTML === choise ||
        document.getElementById('two').innerHTML === choise &&
        document.getElementById('five').innerHTML === choise &&
        document.getElementById('eigth').innerHTML === choise ||
        document.getElementById('three').innerHTML === choise &&
        document.getElementById('six').innerHTML === choise &&
        document.getElementById('nine').innerHTML === choise 
     ) {
        result1 = true;
        return result1;
}
};
    function resetTheGame(resetTheGame) {
        document.getElementById('one').innerHTML="";
        document.getElementById('two').innerHTML="";
        document.getElementById('three').innerHTML="";
        document.getElementById('four').innerHTML="";
        document.getElementById('five').innerHTML="";
        document.getElementById('six').innerHTML="";
        document.getElementById('seven').innerHTML="";
        document.getElementById('eigth').innerHTML="";
        document.getElementById('nine').innerHTML="";
        document.getElementById('one').style.background = "";
        document.getElementById('two').style.background = "";
        document.getElementById('three').style.background = "";
        document.getElementById('four').style.background = "";
        document.getElementById('five').style.background = "";
        document.getElementById('six').style.background = "";
        document.getElementById('seven').style.background = "";
        document.getElementById('eigth').style.background = "";
        document.getElementById('nine').style.background = "";
    };

