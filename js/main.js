
// Enter your code below.
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#new-order-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      let itemName = event.target.elements["order-item-name"].value;
      let itemPrice = event.target.elements["order-item-price"].value;
      let itemSize = event.target.elements["order-size"].value;

      let isFormValid = true;
      
      if (!isValueNotEmpty(itemName)) {
          document.querySelector("[name='order-item-name']").classList.add("is-invalid");
          isFormValid = false;
      } else {
          document.querySelector("[name='order-item-name']").classList.remove("is-invalid");
      }

      if (!isValueNotEmpty(itemPrice) || !isGreaterThanFive(Number(itemPrice))) {
          document.querySelector("[name='order-item-price']").classList.add("is-invalid");
          isFormValid = false;
      } else {
          document.querySelector("[name='order-item-price']").classList.remove("is-invalid");
      }

      
      if (!isValueNotEmpty(itemSize)) {
          document.querySelector("[name='order-size']").classList.add("is-invalid");
          isFormValid = false;
      } else {
          document.querySelector("[name='order-size']").classList.remove("is-invalid");
      }
        
      if (isFormValid) {
          addOrderItem(itemName, itemPrice, itemSize); 
          form.reset(); 
      }
  });
});


// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
    return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
    return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$' + orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}