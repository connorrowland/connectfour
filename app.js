var Game = {
	boardGame = [];


}
var turn = 0; 
  var columnClick = function(element){ 
		if( turn == 0){ 

		turn = 1;
		}else if( turn == 1 ){ 
		    turn = 0; 
		} 
}







var buttonAppear = function(){
	if(turn===0){
		$('button1').addClass("showBlackButton");
		$('button2').addClass("showBlackButton");
		$('button3').addClass("showBlackButton");
		$('button4').addClass("showBlackButton");
		$('button5').addClass("showBlackButton");
		$('button6').addClass("showBlackButton");
		$('button7').addClass("showBlackButton");

	}else if(turn ===1){
		$('button1').addClass("showRedButton");
		$('button2').addClass("showRedButton");
		$('button3').addClass("showRedButton");
		$('button4').addClass("showRedButton");
		$('button5').addClass("showRedButton");
		$('button6').addClass("showRedButton");
		$('button7').addClass("showRedButton");

	}
} 
$('button1').mouseover(buttonAppear);
$('button2').mouseover(buttonAppear);
$('button3').mouseover(buttonAppear);
$('button4').mouseover(buttonAppear);
$('button5').mouseover(buttonAppear);
$('button6').mouseover(buttonAppear);
$('button7').mouseover(buttonAppear);