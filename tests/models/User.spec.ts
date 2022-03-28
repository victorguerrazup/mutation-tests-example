import { User } from '../../src/models/User'

test('New User must set the user name and age', () => {
    const name = 'Test';
    const age = 20;
    const user = new User(name, age);

    expect(user.name).toBe(name);
    expect(user.age).toBe(age);
});

test('With age more than 18 years old must be an adult', () => {
    const age = 18;
    const user = new User('Test', age);

    expect(user.isAnAdult()).toBe(true);
});