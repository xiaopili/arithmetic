function DeepClone (obj) {
	if (obj === null || typeof obj !== 'object') return obj;
	var cpObj = obj instanceof Array ? [] : {};
	for (var key in obj) cpObj[key] = DeepClone(obj[key]);
	return cpObj;
}

var obj = {
	id: 1,
	name: 'xxx',
	sayName: function (a) {
		console.log('my name is ' + a);
	},
	childs: [
		{'a': 1}, 
		{'c': 'd'}, 
	],
	opts: {
		xxx: [1,2,'3'],
		aa: 'bb'
	},
};
var newObj = DeepClone(obj);
console.log(obj)
console.log(newObj)
obj.sayName('hah')
