// const form = document.getElementById("my-form");
// console.log(form);

// const container = document.getElementsByClassName("container");
// console.log(container);

// const inputMail = document.getElementsByName("email");
// console.log(inputMail);

// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// const labelFor = document.querySelector("label[for=email]");
// console.log(labelFor);

// const allInputs = document.querySelectorAll("input");
// console.log(allInputs);

// document.querySelector(".para1").innerHTML =
//   "<span class='p2'>para de classe p2 </span>";

// document.querySelector(".para1").textContent = "para modifié";

// document.querySelector("p").classList.add("paragraphe"); 

// document.querySelector("p").classList.remove("paragraphe"); 

// document.querySelector("p").classList.toggle("paragraphe"); 

// document.getElementById("my-form").style.backgroundColor = "#ccc";

// document.getElementById("name").setAttribute("type", "password"); 

// document.getElementById("name").setAttribute("name", "my-password"); 

// const newElt = document.createElement("div");

// let elt = document.getElementById("my-form");

// elt.appendChild(newElt);

// elt.removeChild(newElt); 

// elt.replaceChild(document.createElement("article"), newElt); 

const element = document.getElementsByClassName("btn");
// On récupère l'élément sur lequel on veut détecter le clic
element[0].addEventListener("click", function (event) {
  // On écoute l'événement click
  event.preventDefault();
  document.getElementById("users").innerHTML = "<li>Hello World</li>";
  // On change le contenu de notre élément pour afficher « Hello World"
});