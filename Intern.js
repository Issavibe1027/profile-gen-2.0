 
const Employ = require('./Employ');


class Intern extends Employ  {
    constructor (name, id, email, school) {

        super (name, id, email); 

        this.school = school; 
    }


    getSchool () {
        return this.school;
    }


    getRole () {
        return "Int";
    }
}

// to be exported 
module.exports = Int; 
