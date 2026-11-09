const person={
    name:"jhon",
    age:20,
    address:{
        street:"123 main ",
        city:"nellore",
        country:"india"
    },
    hobbies:["reading","gardening","cooking"]
};


console.log(person.name);
console.log(person.address.city);
console.log(person.hobbies[0]);
console.log(person.age);

//modifying the value
person.age=35;
console.log(person.age);

//adding the property

person.last_name="macron";
person.email="johnmc@gmail.com";
console.log(person)
delete person.address.country;
console.log(person.address)

