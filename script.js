let product = {
  data:
  [
    {
      "name": "jacket brown",
      "price": 10.99,
      "category": "jackets",
      "image": "./image/jacket_men_brown.jpg",
      "id": 1
    },
    {
      "name": "jacket black",
      "price": 10.99,
      "category": "jackets",
      "image": "./image/jacket_men_black.jpg",
      "id": 2
    },
    {
      "name": "jacket pink",
      "price": 10.99,
      "category": "jackets",
      "image": "./image/jacket_women_pink.jpg",
      "id": 3
    },
    {
      "name": "jacket white",
      "price": 10.99,
      "category": "jackets",
      "image": "./image/jacket_women_white.jpg",
      "id": 4
    },
    {
      "name": "T-shirt black",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/man_wool_black.jpg",
      "id":5
    },
    {
      "name": "T-shirt white",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/men_wool_white.jpg",
      "id":6
    },
    {
      "name": "T-shirt silver",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/men_wool_gray.jpg",
      "id":7
    },
    {
      "name": "T-shirt brown",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/man_wool_brown.jpg",
      "id":8
    },
    {
      "name": "T-shirt black",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/men_wool_black.jpg",
      "id":9
    },
    {
      "name": "T-shirt white",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_man.jpg",
      "id":10
    },
    {
      "name": "T-shirt black",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_man_black.jpg",
      "id":11
    },
    {
      "name": "T-shirt black",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_man_black2.jpg",
      "id":12
    },
    {
      "name": "T-shirt silver",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_man_colorfull1.jpg",
      "id":13
    },
    {
      "name": "T-shirt silver",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_man_gray.jpg",
      "id":14
    },
    {
      "name": "T-shirt black",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_women_black.jpg",
      "id":15
    },
    {
      "name": "T-shirt blue",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_women_blue.jpg",
      "id":16
    },
    {
      "name": "T-shirt pink",
      "price": 10.99,
      "category": "T_shirt",
      "image": "./image/t_shirt_women_pink.jpg",
      "id":17
    },
    {
      "name": "T-shirt wool brown",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/women_wool_brown.jpg",
      "id":18
    },
    {
      "name": "T-shirt wool red",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/women_wool_red.jpg",
      "id":19
    },
    {
      "name": "T-shirt wool white",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/women_wool_white.jpg",
      "id":20
    },
    {
      "name": "T-shirt wool white",
      "price": 10.99,
      "category": "T_shirt_wool",
      "image": "./image/women_wool_white_.jpg",
      "id":21
    },
    {
      "name": "Pants black",
      "price": 10.99,
      "category": "Pants",
      "image": "./image/pants_man.jpg",
      "id":22
    },
    {
      "name": "Pants blue",
      "price": 10.99,
      "category": "Pants",
      "image": "./image/pants_man_blue.jpg", 
      "id":23
    },
    {
      "name": "Pants black",
      "price": 10.99,
      "category": "Pants",
      "image": "./image/pants_men_black.jpg",
      "id":24
    },
    {
      "name": "Pants black",
      "price": 10.99,
      "category": "Pants",
      "image": "./image/pants_men_black2.jpg",
      "id":25
    },
    {
      "name": "Pants blue",
      "price": 10.99,
      "category": "Pants",
      "image": "./image/pants_women_blue.jpg",
      "id":26
    }
  ]
}
for (let i = 0; i < product.data.length; i++) {
  console.log(product.data[i].id);
  let card = document.createElement("div");
  card.classList.add("card",product.data[i].category,'hide');
  let imgcontant = document.createElement("div");
  imgcontant.classList.add("imgcontant");
  let img= document.createElement("img");
  img.src=product.data[i].image;
  imgcontant.appendChild(img);
  card.appendChild(imgcontant);
  document.querySelector(".container").appendChild(card);
}

let names = ["Owner Wael","Owner Nawal","Wael Nawal"];
let count = 0;
setInterval(() => {
  let owner = document.querySelector(".logo");
  owner.textContent = names[count];
  count++;
  if (count == names.length) {
    count = 0;
  }
},3000);
let hover_logo = document.getElementById("logo");
hover_logo.addEventListener("mouseover",function(){
  hover_logo.textContent="nawal";
});
hover_logo.addEventListener("mouseout",function(){
  hover_logo.textContent="wael";
});


function filter_product(value){
  let button=document.querySelectorAll(".btn_vlaue");
  
  button.forEach((btn)=>{
    if(value.toUpperCase() ==btn.textContent.toUpperCase())
    {
      btn.classList.add("active");
    }
    else{
      btn.classList.remove("active");
    }
  });
  let element=document.querySelectorAll(".card");
  element.forEach((card)=>{
    if(value == "all"){
      card.classList.remove("hide");
    }
    else{
      if(card.classList.contains(value)){
        card.classList.remove("hide");
      }
      else{
        card.classList.add("hide");
      }
    }
  });
}
let btn_search=document.getElementById("btn1");
btn_search.onclick=()=>{
  let search = document.getElementById("dropdownInput").value;
  filter_product(search);
}
const input = document.getElementById("dropdownInput");
const dropdownList = document.getElementById("dropdownList");

const items = [
  "jackets", "T_shirt", "Pants", "T_shirt_wool"
];

function filterDropdown(value) {
  // Clear the previous list
  dropdownList.innerHTML = "";

  // Filter items based on the input value
  const filteredItems = items.filter(item => 
      item.toLowerCase().includes(value.toLowerCase())
  );

  // If there are filtered items, display them in the dropdown
  if (filteredItems.length > 0) {
      dropdownList.style.display = "block";
      filteredItems.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          li.addEventListener("click", () => {
              input.value = item;
              dropdownList.style.display = "none"; // Hide dropdown after selection
              filter_product(item);
          });
          dropdownList.appendChild(li);
      });
  } else {
      dropdownList.style.display = "none"; // Hide dropdown if no items match
  }
}
// Event listener for input changes
input.addEventListener("input", function() {
  const value = input.value;
  filterDropdown(value);
});

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
  if (!event.target.closest(".search")) {
      dropdownList.style.display = "none";
  }
});

// Open dropdown on input click
input.addEventListener("click", function() {
  dropdownList.style.display = "block";
  filterDropdown(input.value); // Filter items based on current input value
});
let icon_up = document.querySelector(".icon_up");
icon_up.addEventListener("click",function(){
  
  window.scrollTo({
    top: 0, 
    behavior: "smooth"
  });
});
window.onload=()=>{
  filter_product("all");
}