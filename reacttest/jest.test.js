
const tasks = require("./jest1");


test("Checking if array length is greater than zero" , () => {
    expect(tasks.length).not.toBe(0);
} );

test('zero', () => {
    
      const z = 0;
    
      expect(z).not.toBeNull();
    
      expect(z).toBeDefined();
    
      expect(z).not.toBeUndefined();
    
      expect(z).not.toBeTruthy();
    
      expect(z).toBeFalsy();
    
    });
    
