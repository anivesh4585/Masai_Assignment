// script.js
document.getElementById('orderButton').addEventListener('click', orderFood);

function orderFood() {
    let selectedItems = document.querySelectorAll('.menu input[type="checkbox"]:checked');
    if (selectedItems.length === 0) {
        alert('Please select at least one item to order.');
        return;
    }

    let orderId = 'Order #' + Math.floor(Math.random() * 100);
    let selectedItem = selectedItems[Math.floor(Math.random() * selectedItems.length)];
    let foodImage = selectedItem.getAttribute('data-img');

    let orderPromise = new Promise((resolve) => {
        let randomTime = Math.floor(Math.random() * 5000) + 1000;
        console.log(randomTime);
        setTimeout(() => {
            resolve({ orderId, foodImage });
        }, randomTime);
    });

    orderPromise.then((orderDetails) => {
        document.getElementById('orderId').textContent = orderDetails.orderId;
        document.getElementById('foodImage').innerHTML = `<img src="${orderDetails.foodImage}" alt="Food Image">`;
    });
}
