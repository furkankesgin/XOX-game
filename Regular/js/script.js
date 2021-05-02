$(document).ready(function(){
    $.control = function(){
        if($(".btn1").html() === "X" && $(".btn2").html() === "X" && $(".btn3").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn1").html() === "X" && $(".btn5").html() === "X" && $(".btn9").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn1").html() === "X" && $(".btn4").html() === "X" && $(".btn7").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn2").html() === "X" && $(".btn5").html() === "X" && $(".btn8").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn3").html() === "X" && $(".btn5").html() === "X" && $(".btn7").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn3").html() === "X" && $(".btn6").html() === "X" && $(".btn9").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn4").html() === "X" && $(".btn5").html() === "X" && $(".btn6").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn7").html() === "X" && $(".btn8").html() === "X" && $(".btn9").html() === "X"){
            alert("game won by user 1(X)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn1").html() === "O" && $(".btn2").html() === "O" && $(".btn3").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn1").html() === "O" && $(".btn5").html() === "O" && $(".btn9").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn1").html() === "O" && $(".btn4").html() === "O" && $(".btn7").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn2").html() === "O" && $(".btn5").html() === "O" && $(".btn8").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn3").html() === "O" && $(".btn5").html() === "O" && $(".btn7").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn3").html() === "O" && $(".btn6").html() === "O" && $(".btn9").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn4").html() === "O" && $(".btn5").html() === "O" && $(".btn6").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
        if($(".btn7").html() === "O" && $(".btn8").html() === "O" && $(".btn9").html() === "O"){
            alert("game won by user 2(O)");
            $(".btn").attr("disabled", true);
        }
    }

    var user = 1;
    var _html = "";
    var counter = 1;
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            _html += "<button class='btn btn"+counter+"'>.</button>";
            counter++;
        }
        _html += "<br>";
    }

    $("#d1").html(_html);
    $(".btn").click(function(){
        $(this).attr("disabled", true);
        if(user == 1){
            $(this).html("X");
            user = 2;
            $.control();
        }else{
            $(this).html("O");
            user = 1;
            $.control();
        }
    });


});
