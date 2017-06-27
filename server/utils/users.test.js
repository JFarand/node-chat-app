const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},
		{
			id: '2',
			name: 'Erika',
			room: 'React Course'
		},
		{
			id: '3',
			name: 'B',
			room: 'Node Course'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user  = {
			id: '123',
			name: 'OWL',
			room: 'OWL Asylu'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		// var resUser = users.removeUser('3');

		// expect(resUser).toEqual['Mike', 'Erika'];
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		// var userList = users.getUserList('Node Course');
		// var resUser = users.removeUser('33');

		// expect(userList).toEqual['Mike', 'B'];
		var userId = '18';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find a user', () => {
		// var resUser = users.getUser('1');

		// expect(resUser).toEqual['Mike'];
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find a user', () => {
		
		// var resUser = users.findUser('33');

		// expect(resUser).toEqual['Mike', 'B'];
		var userId = '22';
		var user = users.getUser(userId);

		expect(user).toNotExist();

	});

	it('should return list of users in room', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual(['Mike', 'B']);
	});

	it('should return list of users in React Course', () => {
		var userList = users.getUserList('React Course');
		expect(userList).toEqual(['Erika']);
	});
});