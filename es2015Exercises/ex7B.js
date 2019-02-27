function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
  }

let person = {lName: getPerson().lastName, ph: getPerson().phone}

console.log(person.lName, person.ph)
