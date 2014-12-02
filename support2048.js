// JavaScript Document
function getTop(y){
	return 20+120*y;
	};
	
function getLeft(x){
	return 20+120*x;
	};	
function getNumerBackgroundColor(num){
	switch (num){
		case 2: return "#eee4da"; break;
		case 4: return "#ede0c8"; break;
		case 8: return "#f2b179"; break;
		case 16: return "#f59563"; break;
		case 32: return "#f65e3b"; break;
		case 64: return "#edcc61"; break;
		case 128: return "#edcf72"; break;
		case 256: return "#edcc61"; break;
		case 528: return "#9c0"; break;
		case 1024: return "#33b5e5"; break;
		case 2048: return "#33b723"; break;
		case 4096: return "#e60"; break;
		case 8192: return "#f3456"; break;
		case 1024: return "#ff567"; break;
		
		}
		
		return 'block';
	};
function getNumberColor(num){
	
		if(num<=4)
		return '#776e65';
		
		return 'white';
		
	
	};
	
	
function nospace(board){
	//alert('space');
	for (var i=0;i<4;i++){
		for (var j=0;j<4;j++){
			if(board[i][j] == 0) return false; 
			}
		
		}
	return true;	
	
	}
	
function nomove(board){
	//alert('nomove');
	if(canMoveLeft(board)||canMoveRight(board)||canMoveUp(board)||canMoveDown(board)){
		return false;
		}
		return true;	
}		
	
function canMoveLeft(board){
	for (var i=0;i<4;i++){
		for (var j=1;j<4;j++){
			if(board[i][j] != 0){
				if(board[i][j-1]==0 || board[i][j-1]==board[i][j]){
					return true;
					}
				}
			}
			}
			return false;
		}
		
function canMoveRight(board){
	for (var i=0;i<4;i++){
		for (var j=2;j>=0;j--){
			if(board[i][j] != 0){
				if(board[i][j+1]==0 || board[i][j+1]==board[i][j]){
					return true;
					}
				
				}
			}
		}
		 return false;
	}		
		
		
		
function canMoveUp(board){
	for (var i=1;i<4;i++){
		for (var j=0;j<4;j++){
			if(board[i][j]!=0){
				if(board[i-1][j]==0 || board[i-1][j]== board[i][j]){
					return true;
					}
			
				
				}
			
			}}
	return false;
	}


function canMoveDown(board){
	for (var i=2;i>=0;i--){
		for (var j=0;j<4;j++){
			if(board[i][j]!=0){
				if(board[i+1][j] ==0 || board[i+1][j]==board[i][j]){
					return true;
   					}
				}
           }	
	}
	return false;

}
		
	function noBlockHorizontal(row,cel1,cel2,board){
		for(var i=cel1+1; i<cel2; i++){
			if(board[row][i]!=0){return false;}
			
			}
			return true;
		
		
		}
		
	function noBlackVerital(row1,cel,row2,board){
		for(var i=row1+1; i<row2; i++){
			if(board[i][cel]!=0){return false;}
			
			}
			return true;
		};	
		
function upDateScore(score){
	$('#score').text(score);
	
	
	
	
	}	
			