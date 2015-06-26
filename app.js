$(function() {
  console.log('Loaded, bro');
});

var Game = {
	a1: $("#a1"),
	a2: $("#a2"),
	a3: $("#a3"),
	a4: $("#a4"),
	a5: $("#a5"),
	a6: $("#a6"),
	a7: $("#a7"),

	b1: $("#b1"),
	b2: $("#b2"),
	b3: $("#b3"),
	b4: $("#b4"),
	b5: $("#b5"),
	b6: $("#b6"),
	b7: $("#b7"),

	c1: $("#c1"),
	c2: $("#c2"),
	c3: $("#c3"),
	c4: $("#c4"),
	c5: $("#c5"),
	c6: $("#c6"),
	c7: $("#c7"),

	d1: $("#d1"),
	d2: $("#d2"),
	d3: $("#d3"),
	d4: $("#d4"),
	d5: $("#d5"),
	d6: $("#d6"),
	d7: $("#d7"),

	e1: $("#e1"),
	e2: $("#e2"),
	e3: $("#e3"),
	e4: $("#e4"),
	e5: $("#e5"),
	e6: $("#e6"),
	e7: $("#e7"),

	f1: $("#f1"),
	f2: $("#f2"),
	f3: $("#f3"),
	f4: $("#f4"),
	f5: $("#f5"),
	f6: $("#f6"),
	f7: $("#f7"),

	boardGame: [[a1,b1,c1,d1,e1,f1],
				[a2,b2,c2,d2,e2,f2],
				[a3,b3,c3,d3,e3,f3],
				[a4,b4,c4,d4,e4,f4],
				[a5,b5,c5,d5,e5,f5],
				[a6,b6,c6,d6,e6,f6],
				[a7,b7,c7,d7,e7,f7]
				],
	turn: 0,
	// dropToken: function(){
	// 	if(this.turn === 0){ 
	// 		var blackTokenDiv = $("<div>")
	// 		blackTokenDiv.attr("class","blackToken");
	// 		blackTokenDiv.appendTo(this.a1);
	// 			this.turn === 1;
	// 	}else if(this.turn === 1 ){
	// 		var redTokenDiv = $("<div>")
	// 		redTokenDiv.attr("class","redToken");
	// 		var aTwo = ($("#a2"));
	// 		redTokenDiv.appendTo(aTwo)
	// 	    	this.turn === 0; 
	// 	} 
	// },
	dropToLowest: function(){
		if(this.turn === 0){ 
			var blackTokenDiv = $("<div>")
			blackTokenDiv.attr("class","blackToken");
				for (var i = 5; i >= 0; i--){
						var posInBoard = Game.boardGame[0][i].getAttribute("id");
						if( (this[posInBoard].attr("class")==="blackToken") || (this[posInBoard].attr("class")==="redToken") ){
							blackTokenDiv.appendTo
						}else if(this[posInBoard].attr("class")===undefined){
							blackTokenDiv.appendTo(posInBoard);
						}
				}
		}else if(this.turn === 1 ){
			var redTokenDiv = $("<div>")
			redTokenDiv.attr("class","redToken");
				for (var i = 5; i <= 5; i--){
					if(boardGame[i][0].hasClass("blackToken")){


					}else if(boardGame[i][0].hasClass("redToken")){

					}
				}
		}
	},



};









// var changeButtonColor = function(){
// 	var turn = 0; //turn 0 is black, turn 1 is red 
// 	if(turn===0){
// 		$('button1').attr("id","showBlackButton");
// 		$('button2').attr("id","showBlackButton");
// 		$('button3').attr("id","showBlackButton");
// 		$('button4').attr("id","showBlackButton");
// 		$('button5').attr("id","showBlackButton");
// 		$('button6').attr("id","showBlackButton");
// 		$('button7').attr("id","showBlackButton");
// 	}else if(turn ===1){
// 		$('button1').attr("id","showRedButton");
// 		$('button2').attr("id","showRedButton");
// 		$('button3').attr("id","showRedButton");
// 		$('button4').attr("id","showRedButton");
// 		$('button5').attr("id","showRedButton");
// 		$('button6').attr("id","showRedButton");
// 		$('button7').attr("id","showRedButton");

// 	}
// } 
// $('button1').on("click",buttonAppear);
// $('button2').on("click",buttonAppear);
// $('button3').on("click",buttonAppear);
// $('button4').on("click",buttonAppear);
// $('button5').on("click",buttonAppear);
// $('button6').on("click",buttonAppear);
// $('button7').on("click",buttonAppear);