//alert("Welcome to level 2! As a nascent capitalist, you are no longer laboring yourself but are hiring crews each day. Take it away!")

let totalMoney = 0;
let moneyDisplay = document.querySelector("#total-money")
moneyDisplay.innerText = `$${totalMoney}`;

let crews = [];
crews[0] = {
    name: "Team of neighborhood high schoolers",
    revenue: 250,
    owned: true
}
crews[1] = {
    name: "Team of starving college students",
    revenue: 350,
    cost: 1000,
    owned: false,
}
crews[2] = {
    name: "Poach a team of professional landscapers",
    revenue: 600,
    cost: 3000,
    owned: false,
}

let equipment =[];
equipment[0] = {
    name: "Upgrade your middle schoolers from cutting grass via karate chop to scissors",
    cost: 1500,
    factor: 2,
}
equipment[1] = {
    name: "Upgrade your starving college students from scissors to push mowers",
    cost: 5000,
    factor: 2.5,
}
equipment[2] = {
    name: "Upgrade your professional crew from push mowers to riding mowers",
    cost: 7500,
    factor: 3,
}

let totalRevenue = crews[0].revenue;

//dynamically setting each button label
document.querySelector("#middle-schoolers").innerText = `${crews[0].name} | Revenue: $${crews[0].revenue}`;
document.querySelector("#college-students").innerText = `${crews[1].name} | Revenue: $${crews[1].revenue}`;
document.querySelector("#professional-team").innerText = `${crews[2].name} | Revenue: $${crews[2].revenue}`;

//default hiding the future options
document.querySelector("#college-students").style.display = "none";
document.querySelector("#professional-team").style.display = "none";

//populating the store inventory
document.querySelector("#college-student-hire").innerText = `${crews[1].name} - $${crews[1].cost}`;
document.querySelector("#professionals-hire").innerText = `${crews[2].name} - $${crews[2].cost}`;

document.querySelector("#college-student-hire").style.display = "none";
document.querySelector("#professionals-hire").style.display = "none";


//populating the equipment store
document.querySelector("#scissors").innerText = `${equipment[0].name} - $${equipment[0].cost}`;
document.querySelector("#push-mowers").innerText = `${equipment[1].name} - $${equipment[1].cost}`;
document.querySelector("#riding-mowers").innerText = `${equipment[2].name} - $${equipment[2].cost}`;

document.querySelector("#push-mowers").style.display = "none";
document.querySelector("#riding-mowers").style.display = "none";

//revenue for day is cumulative from hired crews
let workButton = document.querySelector(".button");
workButton.addEventListener("click", function(event) {
  event.preventDefault();
    totalMoney = totalMoney + totalRevenue;
    moneyDisplay.innerText = `$${totalMoney}`;
    if (totalMoney >= 1000 && crews[1].owned === false) {
      document.querySelector("#college-student-hire").style.display = "block";
  }
  if (totalMoney >= 3000 && crews[2].owned === false) {
      document.querySelector("#professionals-hire").style.display = "block"
  } 
  })

let storeButtons = document.querySelector(".store");
storeButtons.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.tagName === "BUTTON"){
    if (event.target.getAttribute("id") === "college-student-hire" && totalMoney >= 1000){
        document.querySelector("#college-students").style.display = "block";
        purchase();
        crews[1].owned = true;
        totalRevenue = totalRevenue + crews[1].revenue;
        document.querySelector("#push-mowers").style.display = "block";
    } else if (event.target.getAttribute("id") === "professionals-hire") {
        document.querySelector("#professional-team").style.display = "block";
        purchase();
        crews[2].owned = true;
        totalRevenue = totalRevenue + crews[2].revenue;
        document.querySelector("#riding-mowers").style.display = "block";
    }
  }
  })

  let equipmentButtons = document.querySelector(".equipment");
  equipmentButtons.addEventListener("click", function(event) {
      event.preventDefault;
      if (event.target.tagName === "BUTTON") {
          if (event.target.getAttribute("id") === "scissors") {
            event.target.style.display = "none";
            let newRevenue = crews[0].revenue*equipment[0].factor;
            totalRevenue = totalRevenue - crews[0].revenue + newRevenue;
            document.querySelector("#middle-schoolers").innerText = `${crews[0].name} | Upgraded revenue: $${newRevenue}`;
          } else if (event.target.getAttribute("id") === 'push-mowers') {
            event.target.style.display = "none";
            let newRevenue = crews[1].revenue*equipment[1].factor;
            totalRevenue = totalRevenue - crews[1].revenue + newRevenue;
            document.querySelector("#college-students").innerText = `${crews[1].name} | Upgraded revenue: $${newRevenue}`;
          } else if (event.target.getAttribute("id") === 'riding-mowers') {
            event.target.style.display = "none";
            let newRevenue = crews[2].revenue*equipment[2].factor;
            totalRevenue = totalRevenue - crews[2].revenue + newRevenue;
            document.querySelector("#professional-team").innerText = `${crews[2].name} | Upgraded revenue: $${newRevenue}`;
          } 
      }
  })

const purchase = () => {
    totalMoney = totalMoney - parseInt(event.target.getAttribute("data-cost"));
    moneyDisplay.innerText = `$${totalMoney}`;
    event.target.style.display = "none";
}

//would love to figure out an "upgrade" function