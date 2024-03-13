function aboutPage(){
    /*
    <div class="contact-page">
            <div>
                <h1>Contact Us</h1>
                <p>Feel free to contact us for any inquiries or reservations.</p>
            </div>
            <div class="contact-details">
                <h2>Restaurant Name</h2>
                <p>123 Main Street</p>
                <p>City, State ZIP</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@restaurant.com</p>
            </div>
            <div class="contact-form">
                <h2>Send us a message</h2>
                <form action="submit_contact_form.php" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    */

        // Create the contact page container
        const contactPage = document.createElement('div');
        contactPage.classList.add('contact-page');

        // Create the contact section with title and description
        const contactSection = document.createElement('div');
        const contactTitle = document.createElement('h1');
        contactTitle.textContent = 'Contact Us';
        const contactDescription = document.createElement('p');
        contactDescription.textContent = 'Feel free to contact us for any inquiries or reservations.';
        contactSection.appendChild(contactTitle);
        contactSection.appendChild(contactDescription);

        // Create the contact details section
        const contactDetails = document.createElement('div');
        contactDetails.classList.add('contact-details');
        const restaurantName = document.createElement('h2');
        restaurantName.textContent = 'Restaurant Name';
        const address = document.createElement('p');
        address.textContent = '123 Main Street';
        const cityStateZip = document.createElement('p');
        cityStateZip.textContent = 'City, State ZIP';
        const phone = document.createElement('p');
        phone.textContent = 'Phone: (123) 456-7890';
        const email = document.createElement('p');
        email.textContent = 'Email: info@restaurant.com';
        contactDetails.appendChild(restaurantName);
        contactDetails.appendChild(address);
        contactDetails.appendChild(cityStateZip);
        contactDetails.appendChild(phone);
        contactDetails.appendChild(email);

        // Create the contact form section
        const contactForm = document.createElement('div');
        contactForm.classList.add('contact-form');
        const formTitle = document.createElement('h2');
        formTitle.textContent = 'Send us a message';
        const form = document.createElement('form');
        form.action = 'submit_contact_form.php';
        form.method = 'post';
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.name = 'name';
        nameInput.required = true;
        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'email';
        emailInput.name = 'email';
        emailInput.required = true;
        const messageLabel = document.createElement('label');
        messageLabel.textContent = 'Message:';
        const messageTextarea = document.createElement('textarea');
        messageTextarea.id = 'message';
        messageTextarea.name = 'message';
        messageTextarea.rows = '4';
        messageTextarea.required = true;
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Send';
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(messageLabel);
        form.appendChild(messageTextarea);
        form.appendChild(submitButton);
        contactForm.appendChild(form);

        // Append all sections to the contact page container
        contactPage.appendChild(contactSection);
        contactPage.appendChild(contactDetails);
        contactPage.appendChild(contactForm);

        let container = document.getElementById('content');
        container.appendChild(contactPage);


} 

export { aboutPage }