
        function handleFormSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const grade = document.getElementById('grade').value;
            const qty = document.getElementById('quantity').value;
            const location = document.getElementById('location').value;

            alert(`Thank you, ${name}! Your request for ${qty || 'cement'} (${grade}) to ${location} has been logged. We will call you back shortly at ${phone}.`);
        }
    
    // Toggle input field activation based on checkbox selection
function toggleQtyInput(checkboxId, inputId) {
    const checkbox = document.getElementById(checkboxId);
    const input = document.getElementById(inputId);

    if (checkbox.checked) {
        input.disabled = false;
        input.style.backgroundColor = '#ffffff';
        input.focus();
        input.required = true;
    } else {
        input.disabled = true;
        input.value = '';
        input.style.backgroundColor = '#F1F5F9';
        input.required = false;
    }
}

// Form Submission & WhatsApp Order Handler
function handleFormSubmit(e) {
    e.preventDefault();

    const targetWhatsAppNumber = "233543817111"; // Your active WhatsApp number

    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    const location = document.getElementById('location').value;

    const isPaperChecked = document.getElementById('checkPaper').checked;
    const isSackChecked = document.getElementById('checkSack').checked;
    const qtyPaper = document.getElementById('qtyPaper').value;
    const qtySack = document.getElementById('qtySack').value;

    // Validation: Ensure at least one packaging type is selected with a quantity
    if (!isPaperChecked && !isSackChecked) {
        alert("Please select at least one packaging type (Paper Bags or Sack Bags).");
        return;
    }

    // Format packaging breakdown
    let packagingSummary = [];
    if (isPaperChecked && qtyPaper > 0) {
        packagingSummary.push(`📄 Paper Bags: ${qtyPaper} bags`);
    }
    if (isSackChecked && qtySack > 0) {
        packagingSummary.push(`🛍️ Sack Bags: ${qtySack} bags`);
    }

    const orderDetails = packagingSummary.join('\n');

    // Build formatted message
    const messageText = 
`*NEW CEMENT QUOTE REQUEST - SHILOBEN ENTERPRISES*
----------------------------------------
👤 *Customer Name:* ${name}
📞 *Contact Phone:* ${phone}
🧱 *Cement Grade:* ${grade}
📍 *Delivery Site:* ${location}

📦 *PACKAGING & QUANTITY DETAILS:*
${orderDetails}
----------------------------------------
_Sent via website quote form._`;

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Toggle FAQ Accordion answers
function toggleFaq(buttonElement) {
    const faqItem = buttonElement.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = buttonElement.querySelector('.faq-icon');

    // Close all other open FAQ items for clean UI
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.style.maxHeight = null;
            item.previousElementSibling.querySelector('.faq-icon').innerText = '+';
            item.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
    });

    // Toggle current selection
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.innerText = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.innerText = '−';
        icon.style.transform = 'rotate(180deg)';
    }
}