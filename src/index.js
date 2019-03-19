module.exports = function check(str, bracketsConfig) {
	let stack = [];
	let open = [];
	let close = [];
  	
	for (i = 0; i < bracketsConfig.length; i++) {
	 	open.push(bracketsConfig[i][0]);
 		close.push(bracketsConfig[i][1]);
 	}

	for (i = 0; i < str.length; i++) {
		let last = stack[stack.length - 1];
 		if (open.indexOf(last) !== close.indexOf(str[i]) || stack.length === 0) {
 			stack.push(str[i]);
 		} else if (open.indexOf(last) === close.indexOf(str[i]) && close.indexOf(str[i]) !== -1 ) {
 			stack.pop();
 		} else {
 			return false;
 		}
 	}
 	if (stack.length) {
 		return false;
 	}
 	return true;
}