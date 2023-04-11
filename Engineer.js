
const Employ = require("./Employ");


class Engine extends Employ {
    constructor (name, id, email, github) {
        
        super (name, id, email);

        this.github = github; 
    }

 
    getGithub () {
        return this.github;
    }

     
    getRole () {
        return "Engine";
    }
}


module.exports = Engine; 
