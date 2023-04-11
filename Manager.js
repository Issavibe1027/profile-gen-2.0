
const Employ = require('./Employ');


class Manage extends Employ {
    constructor (name, id, email, officeNumber) {
        
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    
    getRole () {
        return "Manage";
    }
}

 
module.exports = Manage; 
