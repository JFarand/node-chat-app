[{
	id: '/#29283jdjdj',
	name: 'OWL',
	room: 'The Office Fans'
}]

class Users {
	constructor (){
		this.users = [];
	}

	addUser(id, name, room){
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}

	removeUser(id){
		// return user that was removed
		var user = this.users.filter((user) => user.id === id)[0];
		if (user){
			this.users = this.users.filter((user) => user.id !== id);	
		}
		
		return user;
	}

	getUser(id){
		// var user = this.users.filter((user) => user.id === id);
		// return user;
		return this.users.filter((user) => user.id === id)[0]

	}

	getUserList(room){
		// var users = this.users.filter((user) => {
		// 	return user.room === room;
		// })

		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);

		return namesArray;
	}
}

module.exports = {Users};
// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription(){
// 		return `${this.name} is ${this.age} year(s) old.`;
// 	}
// }



// var me = new Person('OWL', '40');
// console.log('this.name', me.name);
// console.log('this.age', me.age);
// var description = me.getUserDescription();
// console.log(description);
