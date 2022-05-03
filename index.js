fetch("./address.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
   document.getElementById("address").innerHTML = jsondata.country;
});

fetch("./lista.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
   jsondata.forEach(data => {
      console.log(data);
   });
});

let listDOMElement = document.getElementsByClassName("item");
console.log(listDOMElement);