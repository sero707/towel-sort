
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix == undefined){
		return [];
	} else{
	let arr = matrix;
	arr.forEach((element,index) => {
		if(index % 2 === 1){
			element.reverse();
		};
	});
	return arr.flat(Infinity)
	};
};
