// using Intern constructor 
const Intern = require('../lib/Int');

// creating intern object  
test('creates an Int object', () => {
    const int = new Int('Issa', 90, 'Issa.chamblee@gmail.com', 'SFSU');
    
    expect(int.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const int = new Int('Issa', 90, 'Issa.chamblee@gmail.com', 'SFSU');
    
    expect(int.get()).toEqual(expect.stringContaining(int.toString()));
});


test('gets role of employ', () => {
    const int = new Intern('Nicole', 90, 'Issa.chamblee@gmail.com', 'SFSU');

    expect(int.getRole()).toEqual("Int");
}); 
