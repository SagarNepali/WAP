var login = document.getElementById("loginSubmit");
login.addEventListener("click", loginSubmit);

document
  .getElementById("productSubmit")
  .addEventListener("click", productSubmit);

function loginSubmit() {
  let loginObject = {
    email: document.getElementById("email").value,
    url: document.getElementById("url").value,
    password: document.getElementById("password").value,
    check_out: document.getElementById("check-out").checked,
  };

  alert(JSON.stringify(loginObject));
  console.log(loginObject);
}

function productSubmit() {
  let productObj = {
    product_no: document.getElementById("product-no").value,
    name: document.getElementById("name").value,
    unit_price: document.getElementById("unit-price").value,
    quantity: document.getElementById("quantity").value,
    supplier: document.getElementById("supplier").value,
    date_supplied: document.getElementById("date-supplied").value,
  };

  alert(JSON.stringify(productObj));
  console.log(productObj);
}
