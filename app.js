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

	boardGame: [
				[a1,b1,c1,d1,e1,f1],
				[a2,b2,c2,d2,e2,f2],
				[a3,b3,c3,d3,e3,f3],
				[a4,b4,c4,d4,e4,f4],
				[a5,b5,c5,d5,e5,f5],
				[a6,b6,c6,d6,e6,f6],
				[a7,b7,c7,d7,e7,f7]
				],
	turn: 0,
	dropOneToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[0][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[0][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[0][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[0][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropTwoToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[1][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[1][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[1][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[1][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropThreeToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[2][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[2][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[2][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[2][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropFourToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[3][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[3][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[3][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[3][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropFiveToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[4][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[4][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[4][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[4][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropSixToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[5][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[5][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[5][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[5][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},
	dropSevenToLowest: function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
					for(var i = 5; i >= 0; i--){
						var posInBoardLoop1 = Game.boardGame[6][i].getAttribute("id");
						var blackTokenClass1 = Game[posInBoardLoop1].children(".blackToken").length
						var redTokenClass1 = Game[posInBoardLoop1].children(".redToken").length
							if( (blackTokenClass1===0) && (redTokenClass1===0) ){
								blackTokenDiv.appendTo(Game.boardGame[6][i]);
								break;
							};
					};
				Game.turn = 1;
		}else if(Game.turn === 1){
			var redTokenDiv = $("<div>");
			redTokenDiv.attr("class","redToken");
					for(var i = 5; i >= 0; i--){
							var posInBoardLoop2 = Game.boardGame[6][i].getAttribute("id");
							var blackTokenClass2 = Game[posInBoardLoop2].children(".blackToken").length
							var redTokenClass2 = Game[posInBoardLoop2].children(".redToken").length
								if( (blackTokenClass2===0) && (redTokenClass2===0) ){
									redTokenDiv.appendTo(Game.boardGame[6][i]);
									break;
								};
					};
					Game.turn = 0;
		};
	},

	winningCombinations: [
       [a1, b1, c1, d1],
        [b1, c1, d1, e1],
        [c1, d1, e1, f1],
        [d1, e1, f1, g1],
        [a2, b2, c2, d2],
        [b2, c2, d2, e2],
        [c2, d2, e2, f2],
        [d2, e2, f2, g2],
        [a3, b3, c3, d3],
        [b3, c3, d3, e3],
        [c3, d3, e3, f3],
        [d3, e3, f3, g3],
        [a4, b4, c4, d4],
        [b4, c4, d4, e4],
        [c4, d4, e4, f4],
        [d4, e4, f4, g4],
        [a5, b5, c5, d5],
        [b5, c5, d5, e5],
        [c5, d5, e5, f5],
        [d5, e5, f5, g5],
        [a6, b6, c6, d6],
        [b6, c6, d6, e6],
        [c6, d6, e6, f6],
        [d6, e6, f6, g6],
        [a1, a2, a3, a4],
        [a2, a3, a4, a5],
        [a3, a4, a5, a6],
        [b1, b2, b3, b4],
        [b2, b3, b4, b5],
        [b3, b4, b5, b6],
        [c1, c2, c3, c4],
        [c2, c3, c4, c5],
        [c3, c4, c5, c6],
        [d1, d2, d3, d4],
        [d2, d3, d4, d5],
        [d3, d4, d5, d6],
        [e1, e2, e3, e4],
        [e2, e3, e4, e5],
        [e3, e4, e5, e6],
        [f1, f2, f3, f4],
        [f2, f3, f4, f5],
        [f3, f4, f5, f6],
        [g1, g2, g3, g4],
        [g2, g3, g4, g5],
        [g3, g4, g5, g6],
        [a1, b2, c3, d4],
        [b1, c2, d3, e4],
        [c1, d2, e3, f4],
        [d1, e2, f3, g4],
        [g1, f2, e3, d4],
        [f1, e2, d3, c4],
        [e1, d2, c3, b4],
        [d1, c2, b3, a4],
        [a2, b3, c4, d5],
        [b2, c3, d4, e5],
        [c2, d3, e4, f5],
        [d2, e3, f4, g5],
        [g2, f3, e4, d5],
        [f2, e3, d4, c5],
        [e2, d3, c4, b5],
        [d2, c3, b4, a5],
        [a3, b4, c5, d6],
        [b3, c4, d5, e6],
        [c3, d4, e5, f6],
        [d3, e4, f5, g6],
        [g3, f4, e5, d6],
        [f3, e4, d5, c6],
        [e3, d4, c5, b6],
        [d3, c4, b5, a6]
   ],



};
$('#button1').on("click",Game.dropOneToLowest);
$('#button2').on("click",Game.dropTwoToLowest);
$('#button3').on("click",Game.dropThreeToLowest);
$('#button4').on("click",Game.dropFourToLowest);
$('#button5').on("click",Game.dropFiveToLowest);
$('#button6').on("click",Game.dropSixToLowest);
$('#button7').on("click",Game.dropSevenToLowest);



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

// $('button2').on("click",buttonAppear);
// $('button3').on("click",buttonAppear);
// $('button4').on("click",buttonAppear);
// $('button5').on("click",buttonAppear);
// $('button6').on("click",buttonAppear);
// $('button7').on("click",buttonAppear);