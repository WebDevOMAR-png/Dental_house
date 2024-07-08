// مصفوفة لتخزين العناصر في عربة التسوق
let cart = [];

// إضافة عنصر إلى عربة التسوق
function addToCart(productName, productPrice) {
    // البحث عن العنصر في العربة
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        // إذا كان العنصر موجودًا، زيادة الكمية
        existingProduct.quantity += 1;
    } else {
        // إذا لم يكن موجودًا، إضافته كعنصر جديد
        const product = { name: productName, price: productPrice, quantity: 1 };
        cart.push(product);
    }
    
    updateCartCount();
    updateCartItems();
}

// تحديث عدد العناصر في عربة التسوق
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// تحديث قائمة العناصر في عربة التسوق
function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} جنيه (كمية: ${item.quantity})`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });
    
    document.getElementById('total-price').textContent = totalPrice;
}

// تبديل عرض عربة التسوق
function toggleCart() {
    const cartContent = document.getElementById('cart');
    if (cartContent.style.display === 'none' || cartContent.style.display === '') {
        cartContent.style.display = 'block';
    } else {
        cartContent.style.display = 'none';
    }
}

// إفراغ عربة التسوق
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartItems();
}

// البحث عن المنتجات
function searchProducts() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}