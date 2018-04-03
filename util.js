// util 类


function judgeArr (arr) {
	if (Array.isArray(arr)) {
		return true;
	}
}

export let util = {
	judgeArr: judgeArr;
}