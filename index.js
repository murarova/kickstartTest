const solution = (str, number) => {
	const arrFromStr = str.split(" ");
	let allMsgs = [];
	let oneMsg = [];

	for (let i = 0; i <= arrFromStr.length; i++) {
		if (str.length < 1 || str.length > 500) {
			return -1;
		} else if (number < 1 || number > 500) {
			return -1;
		} else if (i === arrFromStr.length) {
			allMsgs.push(oneMsg.join(" "));
			oneMsg = [];
			break;
		} else if (oneMsg.join(" ").length + arrFromStr[i].length <= number) {
			oneMsg.push(arrFromStr[i]);
		} else {
			allMsgs.push(oneMsg.join(" "));
			oneMsg = [];
			i--;
		}
	}

	console.log("oneMsg", oneMsg);
	console.log("allMsgs", allMsgs);

	return allMsgs.length;
};

solution("SMS messages are really short", 12);
