import People from "./people";

class Employer extends People {
    constructor(name){
        super(name, 'employer')
    }
}

export default Employer