function AppUser(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh){
    this.profile = new Driver(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh);
    this.reports = [];
}
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

function Vehicle (plateNum, year, make, model) {
    //
    this.plateNum = plateNum;
    this.year = year;
    this.make = make;
    this.model = model;
    this.damaged = false;
    this.damageDesc = "";
}

function Report (userDriver) {
    this.name = name;
    this.userDriver = userDriver;
    this.otherDrivers = [];
    this.witnesses = [];
    this.responders = [];
}

function Witness (fn, ln, addr, email, ph, stmt) {
    this.firstName = fn;
    this.lastName = ln;
    this.address = addr;
    this.email = email;
    this.phone = ph;
    this.statement = stmt;
}

function Responder (title, fn, ln, org, orgPh, rptNum) {
    this.title = title;
    this.firstname = fn;
    this.lastname = ln;
    this.organization = org;
    this.orgPhone = orgPh;
    this.reportNum = rptNum;
}