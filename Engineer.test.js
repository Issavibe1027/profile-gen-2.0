 
const Engine = require('../lib/Engine');


test('creates an Engine object', () => {
    const engine = new Engine('Issa', 90, 'Issa.chamblee@gmail.com', 'Issa1027');
    
    expect(engine.github) .toEqual(expect.any(String));
});


test('gets engine github value', () => {
    const engine = new Engine('Issa', 90, 'Issa.chamblee@gmail.com', 'Issa1027');

    expect(engine.getGithub()).toEqual(expect.stringContaining(engine.github.toString()));
});
 
test('gets role of employ', () => {
    const engine = new Engine('Issa', 90, 'Issa.chamblee@gmail.com' 'Issa1027');

    expect(engine.getRole()).toEqual("Engine");
});
