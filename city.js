//Idea: make tooltip popup on mouseover for each of the tools both in inventory and in store.

window.addEventListener("load", () => {
    document.body.style.backgroundImage = "url('./images/Grass\ Hill\ Background\ Flat\ Design.jpg')";
})

let totalMoney = 0;
let moneyDisplay = document.querySelector("#total-money")
moneyDisplay.innerText = `$${totalMoney}`;

let tools = [];
tools[0] = {
    name: "My teeth",
    revenue: 1,
    owned: true
}
tools[1] = {
    name: "Lightsaber",
    revenue: 5,
    cost: 5,
    owned: false,
    saleValue: 2
}
tools[2] = {
    name: "Broken wand",
    revenue: 25,
    cost: 25,
    owned: false,
    saleValue: 12
}
tools[3] = {
    name: "New wand from Olivander's",
    revenue: 50,
    cost: 100,
    owned: false,
    saleValue: 50
}    
tools[4] = {
    name: "Muggle lawnmower",
    revenue: 100,
    cost: 250,
    owned: false,
    saleValue: 125
}
tools[5] = {
    name: "Hired team of neighborhood high schoolers",
    revenue: 250,
    cost: 500,
    owned: false,
    saleValue: 250
}

//dynamically setting each button label
//ToDo: How can I make this into a loop?
//ToDo: Can I dynamically populate the a tags in Index with the tools[i].revenue rather than typing it in as I have done?
document.querySelector("#teeth").innerText = `${tools[0].name} | Revenue: $${tools[0].revenue}`;
document.querySelector("#lightsaber").innerText = `${tools[1].name} | Revenue: $${tools[1].revenue}`;
document.querySelector("#broken-wand").innerText = `${tools[2].name} | Revenue: $${tools[2].revenue}`;
document.querySelector("#new-wand").innerText = `${tools[3].name} | Revenue: $${tools[3].revenue}`;
document.querySelector("#lawnmower").innerText = `${tools[4].name} | Revenue: $${tools[4].revenue}`;
document.querySelector("#team").innerText = `${tools[5].name} | Revenue: $${tools[5].revenue}`;

//populating the store inventory 
//ToDo: How can I make this into a loop?
//ToDo: Can I dynamically populate the a tags in Index with the tools[i].cost rather than typing it in as I have done?
document.querySelector("#lightsaber-purchase").innerText = `${tools[1].name} - $${tools[1].cost}`;
document.querySelector("#broken-wand-purchase").innerText = `${tools[2].name} - $${tools[2].cost}`;
document.querySelector("#new-wand-purchase").innerText = `${tools[3].name} - $${tools[3].cost}`;
document.querySelector("#lawnmower-purchase").innerText = `${tools[4].name} - $${tools[4].cost}`;
document.querySelector("#team-purchase").innerText = `${tools[5].name} - $${tools[5].cost}`;

//populating the pawn shope
document.querySelector("#lightsaber-sale").innerText = `${tools[1].name} - $${tools[1].saleValue}`;
document.querySelector("#broken-wand-sale").innerText = `${tools[2].name} - $${tools[2].saleValue}`;
document.querySelector("#new-wand-sale").innerText = `${tools[3].name} - $${tools[3].saleValue}`;
document.querySelector("#lawnmower-sale").innerText = `${tools[4].name} - $${tools[4].saleValue}`;
document.querySelector("#team-sale").innerText = `${tools[5].name} - $${tools[5].saleValue}`;

//choose tool to use for that day's work
let toolButtons = document.querySelector(".selector");
toolButtons.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName === "BUTTON"){
    totalMoney = totalMoney + parseInt(event.target.getAttribute("data-revenue"));
    moneyDisplay.innerText = `$${totalMoney}`;
    if (totalMoney >= 25 && tools[2].owned === false) {
        document.querySelector("#broken-wand-purchase").style.display = "block";
    }
    if (totalMoney >= 100 && tools[3].owned === false) {
        document.querySelector("#new-wand-purchase").style.display = "block"
    } 
    if (totalMoney >= 250 && tools[4].owned === false) {
        document.querySelector("#lawnmower-purchase").style.display = "block"
    } 
    if (totalMoney >= 500 && tools[5].owned === false) {
        document.querySelector("#team-purchase").style.display = "block"
    }
    // if (totalMoney >= 1000) {
    //     alert("You win! You are now a Landscaping Tycoon of the city. Exit this alert if you want to continue on this level.")
    // }
  }
  })

let storeButtons = document.querySelector(".store");
storeButtons.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName === "BUTTON"){
    if (event.target.getAttribute("id") === "lightsaber-purchase" && totalMoney >= 5){
        document.querySelector("#lightsaber").style.display = "block";
        document.querySelector("#lightsaber-sale").style.display = "block";
        purchase();
        tools[1].owned = true;
    } else if (event.target.getAttribute("id") === "broken-wand-purchase") {
        document.querySelector("#broken-wand").style.display = "block";
        document.querySelector("#broken-wand-sale").style.display = "block";
        purchase();
        tools[2].owned = true;
    } else if (event.target.getAttribute("id") === "new-wand-purchase") {
        document.querySelector("#new-wand").style.display = "block";
        document.querySelector("#new-wand-sale").style.display = "block";
        purchase();
        tools[3].owned = true;
    } else if (event.target.getAttribute("id") === "lawnmower-purchase") {
        document.querySelector("#lawnmower").style.display = "block";
        document.querySelector("#lawnmower-sale").style.display = "block";
        purchase();
        tools[4].owned = true;
    } else if (event.target.getAttribute("id") === "team-purchase") {
        document.querySelector("#team").style.display = "block";
        document.querySelector("#team-sale").style.display = "block";
        purchase();
        tools[5].owned = true;
    }
  }
  })

let saleButtons = document.querySelector(".sale");
saleButtons.addEventListener("click", function(event) {
    event.preventDefault;
    if (event.target.tagName === "BUTTON") {
        if (event.target.getAttribute("id") === "lightsaber-sale") {
            document.querySelector("#lightsaber").style.display = "none";
            document.querySelector("#lightsaber-purchase").style.display = "block";
            tools[1].owned = false;
            sale();
        } else if (event.target.getAttribute("id") === "broken-wand-sale") {
            document.querySelector("#broken-wand").style.display = "none";
            document.querySelector("#broken-wand-purchase").style.display = "block";
            tools[2].owned = false;
            sale();
        } else if (event.target.getAttribute("id") === "new-wand-sale") {
            document.querySelector("#new-wand").style.display = "none";
            document.querySelector("#new-wand-purchase").style.display = "block";
            tools[3].owned = false;
            sale();
        } else if (event.target.getAttribute("id") === "lawnmower-sale") {
            document.querySelector("#lawnmower").style.display = "none";
            document.querySelector("#lawnmower-purchase").style.display = "block";
            tools[4].owned = false;
            sale();
        } else if (event.target.getAttribute("id") === "team-sale") {
            document.querySelector("#team").style.display = "none";
            document.querySelector("#team-purchase").style.display = "block";
            tools[5].owned = false;
            sale();
        }
    }
})

const purchase = () => {
    totalMoney = totalMoney - parseInt(event.target.getAttribute("data-cost"));
    moneyDisplay.innerText = `$${totalMoney}`;
    event.target.style.display = "none";
    document.querySelector("#message").style.display = "none";
}

const sale = () => {
    totalMoney = totalMoney + parseInt(event.target.getAttribute("data-cost"));
    moneyDisplay.innerText = `$${totalMoney}`;
    event.target.style.display = "none";
    if (tools[1].owned === false && tools[2].owned === false && tools[3].owned === false && tools[4].owned === false && tools[5].owned === false){
        document.querySelector("#message").style.display = "block";
    }
}