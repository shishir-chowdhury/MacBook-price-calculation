/* Extra Memory Cost */
function extraMemoryCost(cost, isMemory) {
    const memoryCost = document.getElementById(cost);
    if (isMemory == true) {
        memoryCost.innerText = 0;
    } else {
        memoryCost.innerText = 180;
    }
    return memoryCost.innerText;
}
/* Extra Storage Cost */
function extraStorageCost(cost, isStorage) {
    const storageCost = document.getElementById(cost);
    if (isStorage == 1) {
        storageCost.innerText = 0;
    } else if (isStorage == 2) {
        storageCost.innerText = 100;
    } else {
        storageCost.innerText = 180;
    }
    return storageCost;

}
/* Delivery Cost */
function extraDeliveryCost(charge, isDelivery) {
    const deliveryCost = document.getElementById(charge);
    if (isDelivery == true) {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
    return deliveryCost;
}
/* Button click first delivery */
document.getElementById('delivery-cost1').addEventListener('click', function () {
    const deliveryCost1 = parseInt(extraDeliveryCost('delivery-charge', true));
})
/* Button click second delivery */
document.getElementById('delivery-cost2').addEventListener('click', function () {
    const deliveryCost2 = parseInt(extraDeliveryCost('delivery-charge', false));
})


/* Button click first storage */
document.getElementById('storage1').addEventListener('click', function () {
    const storageCost1 = parseInt(extraStorageCost('storage-cost', 1));
})
/* Button click second storage */
document.getElementById('storage2').addEventListener('click', function () {
    const storageCost2 = parseInt(extraStorageCost('storage-cost', 2));
})
/* Button click third storage  */
document.getElementById('storage3').addEventListener('click', function () {
    const storageCost3 = parseInt(extraStorageCost('storage-cost', 3));
})

/* Button click first memory */
document.getElementById('first-memory').addEventListener('click', function () {

    const memoryCost1 = parseInt(extraMemoryCost('memory-cost', true));

})
/* Button click second memory */
document.getElementById('second-memory').addEventListener('click', function () {

    const memoryCost2 = parseInt(extraMemoryCost('memory-cost', false));
})

