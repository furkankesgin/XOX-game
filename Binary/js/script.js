$(document).ready(function(){
    let turn = "x";
    let x = "000000000";
    let o = "000000000";

    let grids = {
        x:"000000000",
        o:"000000000"
    }
    var _html = "";
    var counter = 0;
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            _html += "<button class='btn' id="+counter+">.</button>";
            counter++;
        }
        _html += "<br>";
    }
    $("#d1").html(_html);
    $(".btn").click(function(){
        if(isEmpty($(this),x,o)){
            $(this).html(turn);

            grids[turn]=applyTurn(grids[turn],$(this).attr("id"));
            console.log("grid turn = "+ grids[turn])

            if(checkWinner(grids[turn])){
                alert(turn);
            }
            if(turn==="x"){
                turn = "o";
            }
            else{
                turn = "x";

            }
        }
        
    });
function checkWinner(alinanDeger){
    for(var i=0; i<wonBinaryNumbers.length; i++){
        console.log(i);
        if(isWin(alinanDeger,wonBinaryNumbers[i])){
            return 1;
        }
    }
    return 0;
}
function applyTurn(str,btnId){
    str = str.split('');
    str[btnId] = '1';
    str = str.join('');
    return str;
}



        const wonBinaryNumbers = ["111000000",
                                "000000111",
                                "000111000",
                                "100100100",
                                "010010010",
                                "001001001",
                                "100010001",
                                "001010100"];

            
        
        
        
        function isEmpty(numberBtn,strX,strO){
            if(strX[numberBtn] === 1 || strO[numberBtn] === 1){
                return 0;
            }
            else{
                return 1;
            }
        }


        function bin2dec(bin){
        return parseInt(bin, 2)
        }
        
        function isWin(a,w){
            console.log(a);
            console.log(w);
        if(bitWiseAnd(a,w) === parseInt(w,2)){
        return 1;
        }
        else{
        return 0;
        }
        }
        
        
        function bitWiseAnd(a,w){
        return parseInt(a, 2) & parseInt(w, 2)
        }

        
});