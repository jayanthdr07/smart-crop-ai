// buy.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('buyForm');
  const orderMsg = document.getElementById('orderMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();

    const fertilizers = [];

    function addFertilizer(id, qtyId) {
      const checkbox = document.getElementById(id);
      const qty = document.getElementById(qtyId).value;
      if (checkbox.checked && qty > 0) {
        fertilizers.push(`${checkbox.value} (Qty: ${qty})`);
      }
    }

    addFertilizer('urea', 'qtyUrea');
    addFertilizer('potash', 'qtyPotash');
    addFertilizer('phosphorus', 'qtyPhosphorus');
    addFertilizer('neem', 'qtyNeem');
    addFertilizer('compost', 'qtyCompost');

    if (fertilizers.length === 0) {
      orderMsg.style.color = 'red';
      orderMsg.innerText = 'Please select at least one fertilizer with quantity!';
      return;
    }

    orderMsg.style.color = '#2e7d32';
    orderMsg.innerHTML = `<p>Thank you, <b>${name}</b>! Your order has been placed.</p>
                          <p>Location: ${location}</p>
                          <p>Ordered Fertilizers: <br>${fertilizers.join('<br>')}</p>`;
    form.reset();
  });
});
