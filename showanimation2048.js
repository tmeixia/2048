// JavaScript Document
function showNumberWithAnimate(i,j,num){
	var numcell=$('#number-cell-'+i+'-'+j);
	numcell.css(	'background-color',getNumerBackgroundColor(num));
	numcell.css(	'color', getNumberColor(num));
		
	numcell.text(num);
	//alert(numcell.text());	

	numcell.animate({
		'width':'100px',
     	'height':'100px',
		'top': getTop(i),
		'left': getLeft(j),
		
		},100);

	};
	
function showMoveAnimation(fromx,fromy,tox,toy){
	var numcell=$('#number-cell-'+fromx+'-'+fromy);
	numcell.animate({
		top:getTop(tox),
		left:getLeft(toy),
		
		
		},500);
	
	
	}	