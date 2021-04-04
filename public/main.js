//House Mosses!!

//function to get rid of pending order//
const onCompleteOrder = (event) => {
  const _id = event.target.dataset.value;
  fetch('orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: _id,
      completed: true, //updating the keys for the object which is our drink order//
      pending: false, //refers back to the keys made in the routes.js page//
    }),
  }).then(function () {
    window.location.reload();
  });
};


//function expression to reverse completed order if there is a mistake//
const onUncompleteOrder = (event) => {
  //
  const _id = event.target.dataset.value;
  fetch('orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: _id,
      completed: false,
      pending: true,
    }),
  }).then(function () {
    window.location.reload();
  });
};

//creating the delete order//
const onDeleteOrder = (event) => {
  const _id = event.target.dataset.value;
  fetch('orders', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: _id,
      completed: true, //updating the keys for the object which is our drink order//
      pending: false, //refers back to the keys made in the routes.js page//
    }),
  }).then(function () {
    window.location.reload();
  });
};

//Our eventlisteners for the complete and uncomplete orders in the barista page//

document.querySelectorAll('.complete-order').forEach((element) => {
  element.addEventListener('click', onCompleteOrder);
});

document.querySelectorAll('.uncomplete-order').forEach((element) => {
  element.addEventListener('click', onUncompleteOrder);
});

document.querySelectorAll('.delete-order').forEach((element) => {
  element.addEventListener('click', onDeleteOrder);
});
