import { canTakeCnh } from "../src/cnh"

test('Must return false to person with less than 18 years old', () => {
    expect(canTakeCnh(17)).toBe(false);
});
