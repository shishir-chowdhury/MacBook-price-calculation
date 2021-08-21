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
    return storageCost.innerText;

}

/* Delivery Cost */
function extraDeliveryCost(charge, isDelivery) {
    const deliveryCost = document.getElementById(charge);
    if (isDelivery == true) {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
    return deliveryCost.innerText;
}

/* Total Cost count */
function totalCostCount() {
    let total = 0;
    let bestPrice = parseInt(document.getElementById('best-price').innerText);
    let memoryCost = parseInt(document.getElementById('memory-cost').
        innerText);
    let storageCost = parseInt(document.getElementById('storage-cost').innerText);
    let deleviryCost = parseInt(document.getElementById('delivery-charge').innerText);
    total = bestPrice + memoryCost + storageCost + deleviryCost;
    document.getElementById('total-cost').innerText = total;
    document.getElementById('grand-total').innerText = total;
}

/* Button click first delivery */
document.getElementById('delivery-cost1').addEventListener('click', function () {
    const deliveryCost1 = parseInt(extraDeliveryCost('delivery-charge', true));
    totalCostCount();
})

/* Button click second delivery */
document.getElementById('delivery-cost2').addEventListener('click', function () {
    const deliveryCost2 = parseInt(extraDeliveryCost('delivery-charge', false));
    totalCostCount();
})

/* Button click first storage */
document.getElementById('storage1').addEventListener('click', function () {
    const storageCost1 = parseInt(extraStorageCost('storage-cost', 1));
    totalCostCount();
})

/* Button click second storage */
document.getElementById('storage2').addEventListener('click', function () {
    const storageCost2 = parseInt(extraStorageCost('storage-cost', 2));
    totalCostCount();
})

/* Button click third storage */
document.getElementById('storage3').addEventListener('click', function () {
    const storageCost3 = parseInt(extraStorageCost('storage-cost', 3));
    totalCostCount();
})

/* Button click first memory */
document.getElementById('first-memory').addEventListener('click', function () {

    const memoryCost1 = parseInt(extraMemoryCost('memory-cost', true));
    totalCostCount();

})

/* Button click second memory */
document.getElementById('second-memory').addEventListener('click', function () {

    const memoryCost2 = parseInt(extraMemoryCost('memory-cost', false));
    totalCostCount();
})

/* Promo Code Apply */
document.getElementById('apply-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput == 'stevekaku') {
        let totalCost = parseInt(document.getElementById('total-cost').innerText);
        let promoTotal = totalCost * 0.8;
        document.getElementById('grand-total').innerText = promoTotal;
    }
    /* Clear the input field */
    document.getElementById('promo-input').value = '';
})




