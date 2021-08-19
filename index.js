// Add your code here

// For this final test, after the two then() 
// calls on your fetch() request, add a catch().

// When writing the callback function for your 
// catch(), expect to receive an object on error 
// with a property, message, containing info about 
// what went wrong. Write code to append this 
// message to the DOM when catch() is called.


const configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
    },
    body: JSON.stringify({
        name: "David",
        email: "davidrobertregan@gmail.com"
    })
}

const body = document.querySelector("body")
console.log(body)

function submitData(name, email){
    return fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
    })
    .then(resp => resp.json())
    .then(userObj => {
        // const id = userObj.id;
        const p = document.createElement('p')
        p.textContent = userObj.id;
        console.log(p)
        body.append(p)
    })
    .catch(error => {
        const errorObj = {
            message: error.message
        }
        const h2 = document.createElement("h2");
        h2.textContent = errorObj.message;
        body.append(h2)
    })
}

// submitData('david', "davidrobertregan")
submitData('bill', 'bill@mail.com')