//Get existing profile or create and empty object if not
//var appUser = JSON.parse(localStorage.getItem('appUser')) || {};

function Occupant(fn, ln, addr, city, state, zip, ph, email, dob){
    this.firstName = fn;
    this.lastName = ln;
    this.address = addr;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = ph;
    this.email = email;
    this.dob = dob;
    this.injured = false;
    this.injuryDesc = "";
    this.age = function(){
        var age = 0;
        //
        // WILL is going to find/write a good age function
        //
        /*var now = new Date();
        var birthdate = dob.split('/');
        var born = new Date(birthdate[2], birthdate[0]-1, birthdate[1]);
        age =*/ 
        return age;
    };    
}

function Driver(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh) {
    //Call the parent constructor using Function#call to
    //ensure that "this" is correctly set.
    Occupant.call(this, fn, ln, addr, city, state, zip, ph, email, dob);
    this.dlNum = dln;
    this.dlState = dls;
    this.dlExpire = dlx;
    this.insCo = iCo;
    this.insId = iId;
    this.insPhone = iPh;
    this.vehicles = [];
    this.passengers = [];    
}


