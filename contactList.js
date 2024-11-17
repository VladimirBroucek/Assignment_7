let listOfUser = [
    {name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com"},
    {name: "Jane Smith", phone: "5748 307 238", email: "jane.smith@example.com"},
    {name: "Bob Johnson", phone: "8367 297 745", email: "bob.johnson@example.com"}
]

function showList(when) {
    console.log(when, listOfUser);
}


showList("Before update");

let newUser = {name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca"}
listOfUser.push(newUser);

showList("After update");

//first user.
console.log("First Contact", listOfUser[0]);

//last user.
console.log("Last Contact", listOfUser[listOfUser.length - 1]);
