var Bedcontainer = document.getElementById("Beddingcontainer");

async function renderBed() {
  let result = await fetch(`http://localhost:3000/bedding`);
  var data = await result.json();
  console.log(data);
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id","bedding")

    let img = document.createElement("img");
    img.src = el.item[0].img1;
    img.style = "width:400px;"

    let p = document.createElement("p");
    p.innerText = el.name;

    let price = document.createElement("h3");
    price.innerText = "$"+el.price1;


    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    div.append(img, p, price, btn);
    Bedcontainer.append(div);
  });
}

renderBed();
