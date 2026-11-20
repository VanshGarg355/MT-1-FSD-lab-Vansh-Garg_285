let emp = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 1, name: "C"},
    {id: 3, name: "D"}
];

function remove() {
    let arr = emp.filter((e, i) => emp.findIndex(x => x.id == e.id) == i);
    document.getElementById("result").innerHTML = JSON.stringify(arr);
}