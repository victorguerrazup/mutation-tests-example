import { User } from '../../src/models/User'

test('New User must set the user name and age', () => {
    const name = 'Test';
    const age = 20;
    const user = new User(name, age);

    expect(user.name).toBe(name);
    expect(user.age).toBe(age);
});

test('With age less than 18 years old mus not be an adult', () => {
    const age = 17;
    const user = new User('Test', age);

    expect(user.isAnAdult()).toBe(false);
});
