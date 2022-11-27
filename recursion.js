function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// alert(pow(2, 3));


let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}

// alert(sumSalaries(company));



// function sumTo(n) {
//     let sum = 0;
//     for (n; n > 0; n--) {
//         sum += n;
//     }
//     return sum;
// }

// recursive summing
function sumTo(n) {
    let sum = n;
    if (n == 0) {
        return sum;
    } else {
        return sum + sumTo(n - 1);
    }
}

//arithmetic progression
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }

// alert(sumTo(100));

// n(a1 + a2)/2


//recursion factorial function
// function fact(n) {
//     //base case
//     if (n == 1) {
//         return 1
//     } else { //recursive case
//         return n * fact(n - 1);
//     }
// }

// console.log(fact(3));
let stepsTotal = 0;
//Collatz conjecture recursion
function collatz(n) {
    //base case
    if (n == 1) {
        return 0;
    } else if (n % 2 == 0) {
        // stepsTotal += 1;
        console.log('even n = ' + n)
        return collatz(n / 2) + 1;
    } else {
        // stepsTotal += 1;
        console.log('odd n = ' + n);
        return collatz(3 * n + 1) + 1;
    }
    // return stepsTotal;
}

console.log(collatz(27))

// 1   0   1
// 2   1   2 - 1
// 3   7   3 - 10 - 5 -16 - 8 - 4 - 2 - 1 