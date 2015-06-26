$(function() {
  console.log('Loaded, bro');
});

var dropToLowest= function(){
		if(Game.turn === 0){ 
			var blackTokenDiv = $("<div>");
			blackTokenDiv.attr("class","blackToken");
				for (var i = 5; i >= 0; i--){
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

};
$('#button1').on("click",Game.dropToLowest);