player_1name=localStorage.getItem("player1_name");
player_2name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=player_1name+":";
document.getElementById("player2").innerHTML=player_2name+":";

document.getElementById("player_score1").innerHTML=player1_score;
document.getElementById("player_score2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn-" + player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player_2name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

player_question="player1";
player_answer="player2";

function check(){
    get_answer=document.getElementById("player_answer").value;
    if(get_answer==actual_answer)
    {
     if(player_answer=="player1"){
         update_player1_score=player1_score+1;
         document.getElementById("player_score1").innerHTML=update_player1_score;
         document.getElementById("player_answer").innerHTML="Answer Turn-"+player_1name;
     }  
     else{
         update_player2_score=player2_score+1;
         document.getElementById("player_score2").innerHTML=update_player2_score;
         document.getElementById("player_answer").innerHTML="Answer Turn-"+player_2name;
     }
    }

    if(player_question=="player1"){
        player_question="player2"
        document.getElementById("player_question").innerHTML="Question Turn-"+player_2name;
    }
    else{
        player_question="player1"
        document.getElementById("player_question").innerHTML="Question Turn-"+player_1name;
    }
    document.getElementById("output").innerHTML="";
}