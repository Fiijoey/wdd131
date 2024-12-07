const date = new Date();
const form = new Intl.DateTimeFormat("en-us", {
  dateStyle: "full",
  timeStyle: "short",
});
var year = date.getFullYear();
var modifiedt = form.format(new Date(document.lastModified));

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = modifiedt;


document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ];

    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
