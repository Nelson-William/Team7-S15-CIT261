var CRASHAPP = CRASHAPP || {};

CRASHAPP = {
    appUser : {},
    
    MODEL: {
        AppUser : function(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh){
            this.profile = new CRASHAPP.MODEL.Driver(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh);
            this.reports = [];
        },
        
        Occupant : function(fn, ln, addr, city, state, zip, ph, email, dob){
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
        },

        Driver : function(fn, ln, addr, city, state, zip, ph, email, dob, dln, dls, dlx, iCo, iId, iPh) {
            //Call the parent constructor using Function#call to
            //ensure that "this" is correctly set.
            CRASHAPP.MODEL.Occupant.call(this, fn, ln, addr, city, state, zip, ph, email, dob);
            this.dlNum = dln;
            this.dlState = dls;
            this.dlExpire = dlx;
            this.insCo = iCo;
            this.insId = iId;
            this.insPhone = iPh;
            this.vehicles = [];
            this.passengers = [];    
        },

        Vehicle : function(plateNum, year, make, model) {
            this.plateNum = plateNum;
            this.year = year;
            this.make = make;
            this.model = model;
            this.damaged = false;
            this.damageDesc = "";
        },

        Report : function(userDriver){
            this.name = name;
            this.userDriver = userDriver;
            this.otherDrivers = [];
            this.witnesses = [];
            this.responders = [];
        },

        Witness : function(fn, ln, addr, email, ph, stmt) {
            this.firstName = fn;
            this.lastName = ln;
            this.address = addr;
            this.email = email;
            this.phone = ph;
            this.statement = stmt;
        },

        Responder : function(title, fn, ln, org, orgPh, rptNum) {
            this.title = title;
            this.firstname = fn;
            this.lastname = ln;
            this.organization = org;
            this.orgPhone = orgPh;
            this.reportNum = rptNum;
        }
    },
    
    CONTROLLER : {
        getUser : function(){
            if (localStorage.getItem('CRASHAPP.appUser') && 
                    localStorage.getItem('CRASHAPP.appUser') !== 'undefined')
                    {
                        CRASHAPP.appUser = JSON.parse(localStorage.getItem('CRASHAPP.appUser'));
                        CRASHAPP.CONTROLLER.openFile('views', 'home.html', 'content');
                        document.getElementById('firstName').value = CRASHAPP.appUser.profile.firstName;
                        return;
                    }
            return CRASHAPP.CONTROLLER.openFile('views', 'register.html', 'appBody');
        },
        createUser : function(){
            var fn = document.getElementById("fname").value;
            var ln = document.getElementById("lname").value;
            var ad = document.getElementById("addr").value;
            var city = document.getElementById("city").value;
            var st = document.getElementById("state").value;
            var zip = document.getElementById("zip").value;
            var ph = document.getElementById("phone").value;
            var eml = document.getElementById("email").value;
            var dob = document.getElementById("dob").value;
            var dln = document.getElementById("dlNum").value;
            var dls = document.getElementById("dlState").value;
            var dlx = document.getElementById("dlExpire").value;
            var iCo = document.getElementById("insCo").value;
            var iId = document.getElementById("insId").value;
            var iPh = document.getElementById("insPhone").value;
            
            CRASHAPP.appUser = new CRASHAPP.MODEL.AppUser(fn, ln, ad, city, st, zip, ph, eml, dob, dln, dls, dlx, iCo, iId, iPh);
            var appUserStr = JSON.stringify(CRASHAPP.appUser);
            localStorage.setItem('CRASHAPP.appUser', appUserStr);
            return CRASHAPP.CONTROLLER.openFile('views', 'home.html', 'content');
        },
        openFile : function(loc, file, id){
            var xhr;
            var url = loc + "//" + file;
            var el = document.getElementById(id);
            if (url !== ""){
                if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xhr = new XMLHttpRequest();
                }
                xhr.onreadystatechange= function(){
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            el.innerHTML = xhr.responseText;
                        } else {
                            el.innerHTML='<h1><span class="text-danger">Error '+ xhr.status+'</span></h1>';
                        }
                    }
                };
                xhr.open("GET",url,true);
                xhr.send();
            } else {
                el.innerHTML='<span class="text-danger">Error: No page was specified.</span>';
            }
        }
        
    }
    
};




