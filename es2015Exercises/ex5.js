// Rest Parameter and the spread operator

function f(x,y,...rest) {
    let typesOfRest = []
    rest.forEach( (elem) => {
        let typeOfRest = elem.constructor.name
        typesOfRest.push(typeOfRest)
    })
    printOutTypes(x,y,typesOfRest)
}

function printOutTypes(x,y,arrayOfTypes) {
    console.log("Sum: ", x+y)
    for(let i = 1; i < arrayOfTypes.length; i++ ) {
        let restType = arrayOfTypes[i]
        console.log(`rest value ${i} is a: ${restType}`)
    }
}

//f(5,2,true,2,"hello World",[1,2,3],new Date(),{});

/*      Part B      */
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

/*      Part C      */
//var chars = [... f(5,2,...restParams)] This will fail



  