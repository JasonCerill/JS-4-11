let studentFirstName = "Jason";
let studentLastName = "Cerilli";
let studentAge = "31";
let studentIsActive = true;

//objects literal {}

// let student1 = {
//     //attr:value,
//     firstName: "Jason",
//     lastName: "Cerilli",
//     age: 31,
//     isActive: true,
// }

// let student2 = {
//     firstName: "Mike",
//     lastName: "Scott",
//     age: 47,
//     isActive: true,
// }

// let student3 = {
//     firstName: "Leslie",
//     lastName: "Knope",
//     age: 31,
//     isActive: true,
//     hobbies: ["Serving my community", "Eating waffles"],
//     address: {
//         street: "Lets Go Rd",
//         zip: "74883",
//     }

// }

let students = [
    {
        firstName: "Jason",
        lastName: "Cerilli",
        age: 31,
        isActive: true,
    },
    {
        firstName: "Mike",
        lastName: "Scott",
        age: 47,
        isActive: true,

    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 31,
        isActive: true,
        hobbies: ["Serving my community", "Eating waffles"],
        address: {
            street: "Lets Go Rd",
            zip: "74883",
        }


    }];


//how to access particular elemeents of objects
//console.log(student1.firstName);
//console.log(student2["lastName"]);
//console.log(student3);
//console.log(student3.hobbies[1]);
//console.log(student3.address.zip);

console.log(students[0].firstName);

function displayStudent(){

    let tmp="";
    let div=document.getElementById("students")
    
    for(let i=0;i<students.length;i++){
       
        tmp += `<li>${students[i].firstName} ${students[i].lastName}</li>`;
        console.log(tmp);
        div.innerHTML=tmp;

       
    }
}
displayStudent();

