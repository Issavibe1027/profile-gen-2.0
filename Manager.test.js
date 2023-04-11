const Manage = require('../lib/Manage');

test('creates an Manage object', () => {
    const manage = new Manage('Issa', 90, 'Issa.chamblee@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employ', () => {
    const manage = new Manage('Issa', 90, 'issa.chamblee@gmail.com');

    expect(manage.getRole()).toEqual("Manage");
}); 
