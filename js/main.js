(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    // Cart Start
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 0;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    const updatePrices = () => {
        let subtotal = 0;
        document.querySelectorAll('tbody tr').forEach(row => {
            const price = parseFloat(row.querySelector('.item-price').dataset.price);
            const quantity = parseInt(row.querySelector('.quantity-input').value);
            const totalPriceElement = row.querySelector('.total-item-price');
            const totalPrice = price * quantity;
            totalPriceElement.textContent = totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('INR', '₹');
            subtotal += totalPrice;
        });
        document.querySelector('.cart-subtotal').textContent = subtotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('INR', '₹');
        const shipping = 50;
        document.querySelector('.cart-total').textContent = (subtotal + shipping).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('INR', '₹');
    };

    document.querySelectorAll('.btn-plus, .btn-minus').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.closest('.quantity').querySelector('.quantity-input');
            let quantity = parseInt(input.value);
            if (this.classList.contains('btn-plus')) {
                quantity++;
            } else if (this.classList.contains('btn-minus') && quantity > 1) {
                quantity--;
            }
            input.value = quantity;
            updatePrices();
        });
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 1) {
                this.value = 1;
            }
            updatePrices();
        });
    });

    updatePrices();
});
//Login
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handle form submissions (this is just an example, actual implementation will vary)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login action here
    alert('Login form submitted');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform registration action here
    alert('Registration form submitted');
});

// Handle Google login (this requires actual Google OAuth integration)
document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Login with Google clicked');
    // Perform Google login action here
});



// Cart End 
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}


// Login and Registration Start
// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login-form');
//     const registrationForm = document.getElementById('registration-form');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const email = document.getElementById('login-email').value;
//         const password = document.getElementById('login-password').value;

//         // Example of basic validation
//         if (email === '' || password === '') {
//             document.getElementById('login-error').textContent = 'Please fill in all fields.';
//         } else {
//             // Simulate login functionality (replace with actual logic)
//             alert(`Logged in with email: ${email}`);
//             // Reset form
//             loginForm.reset();
//             document.getElementById('login-error').textContent = '';
//         }
//     });

//     registrationForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const email = document.getElementById('register-email').value;
//         const password = document.getElementById('register-password').value;
//         const confirmPassword = document.getElementById('register-confirm-password').value;

//         // Example of basic validation
//         if (email === '' || password === '' || confirmPassword === '') {
//             document.getElementById('register-error').textContent = 'Please fill in all fields.';
//         } else if (password !== confirmPassword) {
//             document.getElementById('register-error').textContent = 'Passwords do not match.';
//         } else {
//             // Simulate registration functionality (replace with actual logic)
//             alert(`Registered with email: ${email}`);
//             // Reset form
//             registrationForm.reset();
//             document.getElementById('register-error').textContent = '';
//         }
//     });
// });
// Login and Registration End 

// Registration Start
// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Form submitted');
//     let isValid = true;

//     // Clear previous errors
//     document.getElementById('usernameError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('passwordError').textContent = '';
//     document.getElementById('confirmPasswordError').textContent = '';

//     // Validate username
//     const username = document.getElementById('username').value;
//     if (username.trim() === '') {
//         document.getElementById('usernameError').textContent = 'Username is required.';
//         isValid = false;
//     }

//     // Validate email
//     const email = document.getElementById('email').value;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === '') {
//         document.getElementById('emailError').textContent = 'Email is required.';
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = 'Invalid email format.';
//         isValid = false;
//     }

//     // Validate password
//     const password = document.getElementById('password').value;
//     if (password.trim() === '') {
//         document.getElementById('passwordError').textContent = 'Password is required.';
//         isValid = false;
//     } else if (password.length < 6) {
//         document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
//         isValid = false;
//     }

//     // Validate confirm password
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     if (confirmPassword.trim() === '') {
//         document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
//         isValid = false;
//     } else if (password !== confirmPassword) {
//         document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
//         isValid = false;
//     }

//     if (isValid) {
//         const formData = {
//             username,
//             email,
//             password
//         };
//         console.log(username,
//             email,
//             password);
//         fetch('http://localhost:3000/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     }
// });

// //Wishlist Start
// function addToWishlist(item) {
//     var wishlist = document.getElementById('wishlist');
//     var listItem = document.createElement('li');
//     listItem.textContent = item;

//     var removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className = 'remove-btn';
//     removeButton.onclick = function() {
//         wishlist.removeChild(listItem);
//     };

//     listItem.appendChild(removeButton);
//     wishlist.appendChild(listItem);
// }

//Wishlist End

$(document).ready(function () {
    function updateCart() {
        let subtotal = 0;
        $('.total-item-price').each(function () {
            subtotal += parseFloat($(this).text().replace(/,/g, ''));
        });

        $('.cart-subtotal').text('₹ ' + subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

        let shipping = 50.00; // Fixed shipping cost
        $('.shipping-cost').text('₹ ' + shipping.toFixed(2));

        let total = subtotal + shipping;
        $('.cart-total').text('₹ ' + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    }

    $('.btn-plus').click(function () {
        let quantityInput = $(this).closest('.quantity').find('.quantity-input');
        let quantity = parseInt(quantityInput.val()) + 0;
        quantityInput.val(quantity);

        let price = parseFloat($(this).closest('tr').find('.item-price').data('price'));
        let totalItemPrice = price * quantity;
        $(this).closest('tr').find('.total-item-price').text(totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

        updateCart();
    });

    $('.btn-minus').click(function () {
        let quantityInput = $(this).closest('.quantity').find('.quantity-input');
        let quantity = parseInt(quantityInput.val()) - 1;
        if (quantity < 1) quantity = 1;
        quantityInput.val(quantity);

        let price = parseFloat($(this).closest('tr').find('.item-price').data('price'));
        let totalItemPrice = price * quantity;
        $(this).closest('tr').find('.total-item-price').text(totalItemPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

        updateCart();
    });

    updateCart();
});

document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const productElement = this.closest('.product-item');
            const productId = productElement.dataset.productId;
            const productName = productElement.dataset.productName;
            const productPrice = productElement.dataset.productPrice;
            const productImage = productElement.dataset.productImage;
            
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };

            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        console.log(cart); // For testing, you can replace this with code to update the cart display or save to backend/local storage
        alert('Product added to cart');
    }
});

