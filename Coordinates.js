function Coordinates(){}

Coordinates.prototype.getXYArray = function(expression,ox,oy,xi,xf,scale){
	var coordsArray = [];

	for(var x = xi;x<=xf;x=x+0.1){
		y = eval(expression);
		console.log(x,y);
		coordsArray.push({'x': (x * scale)+ ox , 'y': (-1 *y * scale)+oy});
	}
	return coordsArray;
};