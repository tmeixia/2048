// JavaScript Document
var board=new Array();
var score=0;
var hasConflicted=new Array();

$(document).ready(function() {
	newgame();
    
});

function newgame(){
	//初始化棋盘格
	
	init();
	
	//在随机两个格子里生成数字
	generateOneNumber();
	generateOneNumber();
	
	
	};
	
function init(){
	for (var i=0;i<4;i++){
		board[i]=new Array();
		hasConflicted[i]=new Array();
		for(var j=0;j<4;j++){
			board[i][j]=0;
			hasConflicted[i][j]=false;
			var gridCell=$('#grid-cell-'+i+'-'+j);
			
			gridCell.css({
				top:getTop(i),
				left:getLeft(j),
               });
			}
		
		}
		updateBoardView();
		score=0;
	
	};
	
	
	function updateBoardView(){
		
		$('.number-cell').remove();
		//board[1][2]=2;
		for( var i=0; i<4; i++){
			for( var j=0;j<4;j++){
		
				$('#grid-contain').append("<div class='number-cell' id='number-cell-"+i+'-'+j+ "'></div>");
			    var theNumberCell=$('#number-cell-'+i+'-'+j);
			    
				if(board[i][j] == 0){
					theNumberCell.css({
						width:'0px',
						height:'0px',
						top:getTop(i)+50,
						left: getLeft(j)+50,
						});
						
						
					}
					
				else{
					theNumberCell.css({
						width:'100px',
						height:'100px',
						top:getTop(i),
				        left:getLeft(j),
						backgroundColor:getNumerBackgroundColor(board[i][j]),
						color:getNumberColor(board[i][j]),
						});
					theNumberCell.text(board[i][j]);
				   
					
					};
				hasConflicted[i][j]=false;	
				
				}
			
			}
		
		};
	function generateOneNumber(){
		
		if( nospace(board))  return false;
		//随机一个位
		
		var randx=parseInt(Math.floor(Math.random()*4));
		var randy=parseInt(Math.floor(Math.random()*4));
		var times=0;
		
		while(times<50){
			if(board[randx][randy] == 0)
			   break;
			   randx=parseInt(Math.floor(Math.random()*4));
		       randy=parseInt(Math.floor(Math.random()*4));
		time++;
 			};
		
		if(times==50){
			for(var i=0; i<4;i++){
				for(var j=0;j<4;j++){
					if(board[i][j]==0){
						randx=i;
		                randy=j;
						
						}
					
					}
				
				}
			}
		
		//随机一个数字
		var num=(Math.random() < 0.5 ? 2:4);
		//alert(num);
		//在随机位置显示随机数字
		board[randx][randy]=num;
		
		showNumberWithAnimate(randx,randy,num);
		
		
		return true;
		
		};
		
		
	$(document).keydown(function(event){
		//alert(event.keyCode);
		switch(event.keyCode){
			case 37:
			if(moveLeft()){
				setTimeout("generateOneNumber()",210);
				setTimeout("isgameover()",210);
				}
				break;//left
			case 38:
			if(moveUp()){
				
				generateOneNumber();
				isgameover();
				}
				break;//up
			case 39:if(moveRight()){
				
				generateOneNumber();
				isgameover();
				}
				break;//right
			case 40:if(moveDown()){
				
				generateOneNumber();
				isgameover();
				}
				break;//down
			
			};
	
		});	
		

function isgameover(){
	//alert(2);
	if(nospace(board) && nomove(board)){
		gameover();
		}
	};	
function gameover(){
		alert('亲爱的，游戏结束了哦！');
		}
	
	
	
	//向左移动
function moveLeft(){
		if(!canMoveLeft(board))
			return false;
			
		for(var i=0;i<4;i++)
		for(var j=1;j<4;j++){
			if(board[i][j] != 0){
				//alert(board[i][j]);
				for(var k = 0;k<j;k++){
					//alert(board[i][k]);
					//alert(7);
					if(board[i][k] == 0 && noBlockHorizontal(i,k,j,board)){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
						}
					else if(board[i][k] == board[i][j] && noBlockHorizontal(i,k,j,board) && !hasConflicted[k][j]){
						//move
						//alert(8);
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j]=0;
						//add score
						score+=board[i][k];
						upDateScore(score);
						
						//判断是否碰撞过
						hasConflicted[k][j]=true;
						continue;
						}	
					}
					}
	}
		updateBoardView();	
		return true;		
	};	
	
	//向右移动
	function moveRight(){
		if(!canMoveRight(board))
			return false;
			
		for(var i=0;i<4;i++)
		for(var j=2;j>=0;j--){
			if(board[i][j] != 0){
				//alert(board[i][j]);
				for(var k=3;k>j;k--){
					//alert(board[i][k]);
					//alert(7);
					if(board[i][k] == 0 && noBlockHorizontal(i,j,k,board) && !hasConflicted[k][j]){
						//move
						showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue;
						}
					else if(board[i][k] == board[i][j] && noBlockHorizontal(i,j,k,board)){
						//move
						//alert(8);
						showMoveAnimation(i,j,i,k);
						board[i][k] += board[i][j];
						board[i][j]=0;
						score+=board[i][k];
						upDateScore(score);
						hasConflicted[k][j]=true;
						continue;
						}	
					}
					}
	}
		updateBoardView();	
		return true;		
	};	
	
	
	
	
//向上移动	
function moveUp(){
	if(! canMoveUp(board))
		return false;
   for(var i=1;i<4;i++)
		for(var j=0;j<4;j++){
			if(board[i][j] != 0){
				for(var k=0; k<i; k++){
					if( board[k][j] == 0 && noBlackVerital(k,j,i,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
						}
						else if(board[k][j] == board[i][j] && noBlackVerital(k,j,i,board) && !hasConflicted[k][j]){
						showMoveAnimation(i,j,k,j);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						score+=board[i][k];
						upDateScore(score);
						hasConflicted[k][j]=true;
						continue;
							
							}
					}
				}
			}
			updateBoardView();	
		return true;	
	}		
	
	
	
	
	//向下移动
	function moveDown(){
	if(!canMoveDown(board)) return false;
	for(var i=2;i>=0;i--)
		for(var j=0;j<4;j++){
			if(board[i][j] != 0){
				for(var k=3; k>i; k--){
					if( board[k][j] == 0 && noBlackVerital(i,j,k,board)){
						showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue;
						}
						else if(board[k][j] == board[i][j] && noBlackVerital(i,j,k,board) && !hasConflicted[k][j]){
						showMoveAnimation(i,j,k,j);
						board[k][j]+=board[i][j];
						board[i][j]=0;
						score+=board[i][k];
						upDateScore(score);
						hasConflicted[k][j]=true;
						continue;
							
							}
					}
				}
			}
			updateBoardView();	
		return true;	
}
	
	
	
	
	
	
	