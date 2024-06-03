// Ambil elements dari DOM-nya
const registerForm = document.querySelector('.form-wrapper');
const nameInput = registerForm.querySelector('#name');
const ageInput = registerForm.querySelector('#age');
const genderInput = registerForm.querySelector('#gender');
const emailInput = registerForm.querySelector('#email');
const passwordInput = registerForm.querySelector('#password');
const confirmPasswordInput = registerForm.querySelector('#confirm-password');
const submitButton = registerForm.querySelector('button[type="submit"]');

// Validate input nama
// Minimal 3 karakter
function validateName(name) {
    return name.length >= 3; 
}

// Validate input umur
// Umur harus di antara 1-100
function validateAge(age) {
    if (age === '' || age === null || isNaN(age)) {
        return false; // Umur jangan kosong atau bukan integer
    }

    age = parseInt(age); // Ubah jadi integer
    return age >= 1 && age <= 100;
}

// Validate jenis kelamin (gender)
// Gender harus di antara 'mle', 'female', atau 'other'
function validateGender(gender) {
    const validGenders = ['male', 'female', 'other'];
    
    return validGenders.includes(gender);
}

// Validate email sederhana tanpa RegEx
// Email harus memiliki '@' dan '.'
// '@' tidak boleh di awal (atSymbol != 0)
// '@' harus ada (atSymbol != -1)
// '.' tidak boleh di awal (dotSymbol != 0)
// '.' harus ada (dotSymbol != -1)
// '.' tidak boleh di awal atau setelah '@' (dotSymbol > atSymbol + 1)
// '.' harus ada setelah '@' (dotSymbol > atSymbol + 1)
// '.' harus ada setelah karakter lain (emailAddress.length > dotSymbol + 1)
// '.' tidak boleh di akhir (emailAddress.length > dotSymbol + 1)
// Tidak boleh ada spasi (spaceSymbol == -1)
function validateEmail(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        return true;
    } else {
        return false;
    }
}

// Validate password
// Password harus memiliki panjang minimal 8 karakter
// Password harus memiliki setidaknya 1 huruf kapital
// Password harus memiliki setidaknya 1 angka
// Password harus memiliki setidaknya 1 karakter spesial seperti !@#$%^&*
function validatePass(password) {
    if (password.length < 8) { // minimal 8 karakter
        return 2; // 2 = password terlalu pendek
    }

    // cek huruf kapital & angka
    let capitalChar = 0;
    let numberChar = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            capitalChar++;
        } else if (password[i] >= '0' && password[i] <= '9') {
            numberChar++;
        }
    }

    if (capitalChar === 0) {
        return 3; // 3 = password tidak memiliki huruf kapital
    }

    if (numberChar === 0) {
        return 4; // 4 = password tidak memiliki angka
    }

    // cek karakter spesial
    const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
    let hasSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
        specialChar.forEach((char) => {
            if (password[i] === char) {
                hasSpecialChar = true;
            }
        });
    }
    if (hasSpecialChar) {
        return 1; // 1 = password valid
    } else {
        return 5; // 5 = password tidak memiliki karakter spesial
    }
}

// Validate konfirmasi password
// Konfirmasi password harus sama PERSIS dengan password
function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}

// Tambah event listener ke form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    // Validasi input
    const isNameValid = validateName(name);
    const isAgeValid = validateAge(age);
    const isGenderValid = validateGender(gender);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePass(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    // Tampilkan pesan error jika inputnya tak valid
    const nameFormGroup = document.querySelector('#name-form');
    const ageFormGroup = document.querySelector('#age-form');
    const genderFormGroup = document.querySelector('#gender-form');
    const emailFormGroup = document.querySelector('#email-form');
    const passwordFormGroup = document.querySelector('#pass-form');
    const confirmPasswordFormGroup = document.querySelector('#conf-pass-form');

    // Hapus pesan error sebelumnya kalau ada
    const formGroups = [nameFormGroup, ageFormGroup, genderFormGroup, emailFormGroup, passwordFormGroup, confirmPasswordFormGroup];
    formGroups.forEach(formGroup => {
        const invalidMessage = formGroup.querySelector('.invalid-msg');
        if (invalidMessage) {
            formGroup.removeChild(invalidMessage);
        }
    });

    if (!isNameValid) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        invalidMessage.innerText = 'Minimum 3 characters';
        nameFormGroup.appendChild(invalidMessage);
        nameInput.classList.add('invalid-input');
    } else {
        nameInput.classList.remove('invalid-input');
    }

    if (!isAgeValid) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        invalidMessage.innerText = 'Between 1-100';
        ageFormGroup.appendChild(invalidMessage);
        ageInput.classList.add('invalid-input');
    } else {
        ageInput.classList.remove('invalid-input');
    }

    if (!isGenderValid) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        invalidMessage.innerText = 'Gender invalid';
        genderFormGroup.appendChild(invalidMessage);
        genderInput.classList.add('invalid-input');
    } else {
        genderInput.classList.remove('invalid-input');
    }

    if (!isEmailValid) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        invalidMessage.innerText = 'Email invalid';
        emailFormGroup.appendChild(invalidMessage);
        emailInput.classList.add('invalid-input');
    } else {
        emailInput.classList.remove('invalid-input');
    }

    console.log(isPasswordValid);
    console.log(password);

    if (isPasswordValid !== 1) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        if (isPasswordValid === 2) {
            invalidMessage.innerText = 'At least 8 characters';
        } else if (isPasswordValid === 3) {
            invalidMessage.innerText = 'Must contain capital letters';
        } else if (isPasswordValid === 4) {
            invalidMessage.innerText = 'Must contain numbers';
        } else if (isPasswordValid === 5) {
            invalidMessage.innerText = 'Must contain special characters (!@#$%^&*)';
        }
        passwordFormGroup.appendChild(invalidMessage);
        passwordInput.classList.add('invalid-input');
    } else {
        passwordInput.classList.remove('invalid-input');
    }

    if (!isConfirmPasswordValid) {
        const invalidMessage = document.createElement('p');
        invalidMessage.classList.add('invalid-msg');
        invalidMessage.innerText = 'Password tidak sama';
        confirmPasswordFormGroup.appendChild(invalidMessage);
        confirmPasswordInput.classList.add('invalid-input');
    } else {
        confirmPasswordInput.classList.remove('invalid-input');
    }

    // Semua data valid, redirect ke halaman sebelumnya
    if (isNameValid && isAgeValid && isGenderValid && isEmailValid && isPasswordValid === 1 && isConfirmPasswordValid) {
        const leftRegister = document.querySelector('.left-register');
        while (leftRegister.firstChild) {
            leftRegister.removeChild(leftRegister.firstChild);
        }

        leftRegister.classList.add('left-register-success');

        const successMessage = document.createElement('h1');
        const successSubMessage = document.createElement('p');
        successMessage.innerText = 'Registration successful!';
        successSubMessage.innerText = 'Redirecting back...';
        leftRegister.appendChild(successMessage);
        leftRegister.appendChild(successSubMessage);

        setTimeout(() => {
            window.history.go(-1);
        }, 3000);
    }
});