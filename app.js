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
       [a1, a2, a3, a4],
       [a2, a3, a4, a5],
       [a3, a4, a5, a6],
       [a4, a5, a6, a7],
       [b1, b2, b3, b4],
       [b2, b3, b4, b5],
       [b3, b4, b5, b6],
       [b4, b5, b6, b7],
       [c1, c2, c3, c4],
       [c2, c3, c4, c5],
       [c3, c4, c5, c6],
       [c4, c5, c6, c7],
       [d1, d2, d3, d4],
       [d2, d3, d4, d5],
       [d3, d4, d5, d6],
       [d4, d5, d6, d7],
       [e1, e2, e3, e4],
       [e2, e3, e4, e5],
       [e3, e4, e5, e6],
       [e4, e5, e6, e7],
       [f1, f2, f3, f4],
       [f2, f3, f4, f5],
       [f3, f4, f5, f6],
       [f4, f5, f6, f7],
       [a1, b1, c1, d1],
       [b1, c1, d1, e1],
       [c1, d1, e1, f1],
       [a2, b2, c2, d2],
       [b2, c2, d2, e2],
       [c2, d2, e2, f2],
       [a3, b3, c3, d3],
       [b3, c3, d3, e3],
       [c3, d3, e3, f3],
       [a4, b4, c4, d4],
       [b4, c4, d4, e4],
       [c4, d4, e4, f4],
       [a5, b5, c5, d5],
       [b5, c5, d5, e5],
       [c5, d5, e5, f5],
       [a6, b6, c6, d6],
       [b6, c6, d6, e6],
       [c6, d6, e6, f6],
       [a7, b7, c7, d7],
       [b7, c7, d7, e7],
       [c7, d7, e7, f7],
       [a1, b2, c3, d4],
       [a2, b3, c4, d5],
       [a3, b4, c5, d6],
       [a4, b5, c6, d7],
       [a4, b3, c2, d1],
       [a5, b4, c3, d2],
       [a6, b5, c4, d3],
       [a7, b6, c5, d4],
       [b1, c2, d3, e4],
       [b2, c3, d4, e5],
       [b3, c4, d5, e6],
       [b4, c5, d6, e7],
       [b4, c3, d2, e1],
       [b5, c4, d3, e2],
       [b6, c5, d4, e3],
       [b7, c6, d5, e4],
       [c1, d2, e3, f4],
       [c2, d3, e4, f5],
       [c3, d4, e5, f6],
       [c4, d5, e6, f7],
       [c4, d3, e2, f1],
       [c5, d4, e3, f2],
       [c6, d5, e4, f3],
       [c7, d6, e5, f4],
   ],
   getAWin: function(){
   		for (var i = 0; i < Game.winningCombinations.length; i++) {
			var blackCombinations = 0;
			var redCombinations = 0;
			for (var j = 0; j < Game.winningCombinations[i].length; j++) {
				var boxId = Game.winningCombinations[i][j];
				//var boxIdClass = $(".empty");
				var boxTokenId = boxId.getAttribute("id")
				if (Game[boxTokenId].children(".blackToken").length === 1 ){
					blackCombinations++;
				}else if(Game[boxTokenId].children(".redToken").length === 1 ){
					redCombinations++;
				};
			};
				if (blackCombinations == 4){
					alert('Black team wins!');
				}else if(redCombinations == 4){
					alert('Red team wins!');
				}
		};
	},
	restartGame: function(){
		location.reload();
	}

};
Game.getAWin();
$('#button1').on("click",Game.dropOneToLowest);
$('#button2').on("click",Game.dropTwoToLowest);
$('#button3').on("click",Game.dropThreeToLowest);
$('#button4').on("click",Game.dropFourToLowest);
$('#button5').on("click",Game.dropFiveToLowest);
$('#button6').on("click",Game.dropSixToLowest);
$('#button7').on("click",Game.dropSevenToLowest);

$('#button1').on("click",Game.getAWin);
$('#button2').on("click",Game.getAWin);
$('#button3').on("click",Game.getAWin);
$('#button4').on("click",Game.getAWin);
$('#button5').on("click",Game.getAWin);
$('#button6').on("click",Game.getAWin);
$('#button7').on("click",Game.getAWin);

$('#restart').on("click",Game.restartGame);

