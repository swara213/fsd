function clickHandler() {
    // event.preventDefault(); // Prevent form submission

    console.log('THis runs')
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobileno').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const gender = document.getElementById('gender').value;
    const address1 = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value.trim();
    
    let message = '';

    if (!firstName || !lastName || !email || !mobile || !birthdate || !gender || !address1 || !city || !state || !pincode) {
        message = 'Please fill in all required fields.';
    } else if (!validateName(firstName)) {
        message = 'First name cannot contain numbers.';
    } else if (!validateName(lastName)) {
        message = 'Last name cannot contain numbers.'
    } else if (!validateEmail(email)) {
        message = 'Please enter a valid email address.';
    } else if (!validateMobile(mobile)) {
        message = 'Please enter a valid mobile number.';
    } else if (!validatePincode(pincode)) {
        message = 'Please enter a valid pincode' ; 
    } else if (!validateAge(birthdate)) {
        message = 'You must be at least 17 years old.';
    } else{
        alert("REGISTRATION SUCCESSFUL!") ; 
    }

    document.getElementById('message').textContent = message;
};

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
}

function validatePincode(pincode) {
    const re = /^[0-9]{6}$/;
    if (!re.test(pincode)) {
        return false;
    }
    return true;
}

function validateName(name) {
    const re = /^[a-zA-Z\s]+$/;
    if (!re.test(name)) {
        return false;
    }
    return true;
}

function validateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (age < 17) {
        return false;
    }
    return true;
}