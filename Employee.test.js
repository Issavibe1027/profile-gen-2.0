 const Employ = require('../lib/Employ');
 
test('creates an employ object', () => {
    const employ = new Employ('Issa', 90, 'Issa.chamblee@gmail.com);

    expect(employ.name).toEqual(expect.any(String));
    expect(employ.id).toEqual(expect.any(Number));
    expect(employ.email).toEqual(expect.any(String));
});
 
test('gets employ name', () => {
    const employ = new Employ('Issa', 90, 'Issa.chamblee@gmail.com');

    expect(employ.getName()).toEqual(expect.any(String));
});
 
test('gets employ ID', () => {
    const employ = new Employ('Issa', 90, 'Issa.chamblee@gmail.com');

    expect(employ.getId()).toEqual(expect.any(Number));
});

test('gets employ email', () => {
    const employ = new Employ('Issa', 90, 'Issa.chamblee@gmail.com');

    expect(employ.getEmail()).toEqual(expect.stringContaining(employ.email.toString()));
});

test('gets role of employ', () => {
    const employ = new Employ('Issa', 90, 'Issa.chamblee@gmail.com');

    expect(employ.getRole()).toEqual("Employ");
}); 

