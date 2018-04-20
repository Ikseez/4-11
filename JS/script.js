var btns = document.querySelectorAll('button');

for (var i = 0; i <btns.length; i++) {
    btns[1].addEventListener('click', function(event){
        console.log(evt.target);
        console.log(this);
    });
}


/*window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName == 'BUTTON')
        console.log(evt.target);
        console.log(this);
    };
});*/

var cars = ['jeep', 'honda', 'jeep', 'subaru'];
var types = ['Blue', 'black', 'blonde', 'purple'];
console.log (types[3]);

var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true
};

var richard = {
    firstname: 'Richard',
    lastname: 'Tirado',
    height: '6',
    hair: true,
    haircolor: 'black',
    facialhair: true,
    facialhaircolor: 'facialhaircolor',
    age: 26,
    greetings: function(msg){
        console.log(this);
    },
};

richard.middlename = 'Anthony';
console.log(car.type); //This pulls out a partt of the var car
console.log(car.offroad);

function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
};

var myDad = new Person('David', 'Higley', 59, 'brown');
console.log(myDad.eyecolor);

var Nate = new Person('Nathan', 'Silva', 12, 'brown');
console.log(Nate.age);

var Cruz = new Person('Cruz', 'Ramirez Pacheco', 21, 'brown');
console.log(Cruz.lastname);

richard.greetings("Mwah ha ha! I have taken over!");

/* Lets make a profile!
    Username
    password
    email
*/

/*function createProfile(){
    this.username = prompt('Your username?');
    /*this.password = prompt('Your password, make sure to be 8-12 characters each with capitals, lower case, and numbers');
    this.email = prompt('Email Adress?');
};

console.log(createProfile);

createProfile();

console.log(username);*/

function UserAcc(email, username, email){
    this.email = email;
    this.username =username;
    this.password =password;
};

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(new UserAcc(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
    )
});

for(var i = 0; i< form.elements.length - 1; i++);