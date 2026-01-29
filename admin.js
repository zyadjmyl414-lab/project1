// Admin Panel JavaScript

// Data Storage
let adminData = {
    users: JSON.parse(localStorage.getItem('adminUsers')) || [
        {
            id: 1,
            name: 'مدير النظام',
            email: 'admin@shamel-market.com',
            password: 'admin123',
            phone: '+966 50 000 0000',
            role: 'admin',
            status: 'active',
            createdAt: new Date().toISOString()
        }
    ],
    products: JSON.parse(localStorage.getItem('adminProducts')) || [
        {
            id: 1,
            title: 'طقم أواني طبخ ستانلس ستيل',
            category: 'home',
            categoryName: 'أدوات منزلية',
            price: 299,
            oldPrice: 399,
            rating: 4.8,
            reviews: 128,
            icon: 'fas fa-blender',
            badge: 'خصم 25%',
            description: 'طقم أواني طبخ عالي الجودة من الستانلس ستيل مقاوم للصدأ'
        }
    ],
    offers: JSON.parse(localStorage.getItem('adminOffers')) || [
        {
            id: 1,
            title: 'خصم 25% على جميع المواد الغذائية',
            discount: 25,
            startDate: '2024-01-01',
            endDate: '2024-01-31',
            status: 'active',
            description: 'خصم 25% على جميع المنتجات الغذائية لمدة محدودة'
        }
    ],
    orders: JSON.parse(localStorage.getItem('adminOrders')) || [],
    settings: JSON.parse(localStorage.getItem('adminSettings')) || {
        siteName: 'مجمع الشامل',
        siteEmail: 'info@shamel-market.com',
        sitePhone: '+966 50 000 0000'
    }
};

// Current Admin


// Initialize Admin Panel
document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
    loadUsers();
    loadProducts();
    loadOffers();
    loadOrders();
    loadSettings();
    
    // Event Listeners
    document.getElementById('userForm').addEventListener('submit', handleUserSubmit);
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    document.getElementById('offerForm').addEventListener('submit', handleOfferSubmit);
    document.getElementById('settingsForm').addEventListener('submit', handleSettingsSubmit);
});

// Navigation Functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Add active class to clicked sidebar item
    event.target.closest('.sidebar-item').classList.add('active');
    
    // Update section title
    const titles = {
        'dashboard': 'الإحصائيات',
        'users': 'المستخدمين',
        'products': 'المنتجات',
        'offers': 'العروض',
        'orders': 'الطلبات',
        'settings': 'الإعدادات'
    };
    
    document.getElementById('sectionTitle').textContent = titles[sectionName];
}

// Dashboard Functions
function loadDashboard() {
      const totalUsers = document.getElementById('totalUsers');
    const totalProducts = document.getElementById('totalProducts');
    const totalOffers = document.getElementById('totalOffers');
    const totalOrders = document.getElementById('totalOrders');

    if (totalUsers) totalUsers.textContent = adminData.users.length;
    if (totalProducts) totalProducts.textContent = adminData.products.length;
    if (totalOffers) totalOffers.textContent = adminData.offers.length;
    if (totalOrders) totalOrders.textContent = adminData.orders.length;
}

// Users Management
function loadUsers() {
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = '';
    
    adminData.users.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.role === 'admin' ? 'مدير' : 'مستخدم'}</td>
                <td>
                    <span class="badge ${user.status === 'active' ? 'success' : 'danger'}">
                        ${user.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editUser(${user.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showAddUserModal() {
    document.getElementById('userModalTitle').textContent = 'إضافة مستخدم';
    document.getElementById('userForm').reset();
    document.getElementById('userForm').dataset.mode = 'add';
    document.getElementById('userModal').classList.add('show');
}

function editUser(id) {
    const user = adminData.users.find(u => u.id === id);
    if (!user) return;
    
    document.getElementById('userModalTitle').textContent = 'تعديل مستخدم';
    document.getElementById('userName').value = user.name;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('userPhone').value = user.phone;
    document.getElementById('userRole').value = user.role;
    document.getElementById('userStatus').value = user.status;
    document.getElementById('userForm').dataset.mode = 'edit';
    document.getElementById('userForm').dataset.userId = id;
    document.getElementById('userModal').classList.add('show');
}

function deleteUser(id) {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
        adminData.users = adminData.users.filter(u => u.id !== id);
        saveData('adminUsers', adminData.users);
        loadUsers();
        showNotification('تم حذف المستخدم بنجاح', 'success');
    }
}

function handleUserSubmit(e) {
    e.preventDefault();
    
    const mode = document.getElementById('userForm').dataset.mode;
    const userData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        phone: document.getElementById('userPhone').value,
        password: document.getElementById('userPassword').value,
        role: document.getElementById('userRole').value,
        status: document.getElementById('userStatus').value
    };
    
    if (mode === 'add') {
        userData.id = Date.now();
        userData.createdAt = new Date().toISOString();
        adminData.users.push(userData);
        showNotification('تم إضافة المستخدم بنجاح', 'success');
    } else {
        const id = parseInt(document.getElementById('userForm').dataset.userId);
        const index = adminData.users.findIndex(u => u.id === id);
        if (index !== -1) {
            adminData.users[index] = { ...adminData.users[index], ...userData };
            showNotification('تم تعديل المستخدم بنجاح', 'success');
        }
    }
    
    saveData('adminUsers', adminData.users);
    loadUsers();
    closeModal('userModal');
}

// Products Management
function loadProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';
    
    adminData.products.forEach(product => {
        const row = `
            <tr>
                <td><i class="${product.icon}" style="font-size: 1.5rem; color: var(--primary-color);"></i></td>
                <td>${product.title}</td>
                <td>${product.categoryName}</td>
                <td>${product.price} ر.س</td>
                <td>${product.discount || 0}%</td>
                <td>
                    <div class="stars" style="color: var(--warning-color);">
                        ${generateStars(product.rating)}
                    </div>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showAddProductModal() {
    document.getElementById('productModalTitle').textContent = 'إضافة منتج';
    document.getElementById('productForm').reset();
    document.getElementById('productForm').dataset.mode = 'add';
    document.getElementById('productModal').classList.add('show');
}

function editProduct(id) {
    const product = adminData.products.find(p => p.id === id);
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = 'تعديل منتج';
    document.getElementById('productName').value = product.title;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productOldPrice').value = product.oldPrice || '';
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productReviews').value = product.reviews;
    document.getElementById('productIcon').value = product.icon;
    document.getElementById('productBadge').value = product.badge || '';
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productForm').dataset.mode = 'edit';
    document.getElementById('productForm').dataset.productId = id;
    document.getElementById('productModal').classList.add('show');
}

function deleteProduct(id) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        adminData.products = adminData.products.filter(p => p.id !== id);
        saveData('adminProducts', adminData.products);
        loadProducts();
        showNotification('تم حذف المنتج بنجاح', 'success');
    }
}

function handleProductSubmit(e) {
    e.preventDefault();
    
    const mode = document.getElementById('productForm').dataset.mode;
    const productData = {
        title: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        categoryName: document.getElementById('productCategory').selectedOptions[0].text,
        price: parseFloat(document.getElementById('productPrice').value),
        oldPrice: parseFloat(document.getElementById('productOldPrice').value) || null,
        rating: parseFloat(document.getElementById('productRating').value),
        reviews: parseInt(document.getElementById('productReviews').value),
        icon: document.getElementById('productIcon').value,
        badge: document.getElementById('productBadge').value || null,
        description: document.getElementById('productDescription').value
    };
    
    if (mode === 'add') {
        productData.id = Date.now();
        adminData.products.push(productData);
        showNotification('تم إضافة المنتج بنجاح', 'success');
    } else {
        const id = parseInt(document.getElementById('productForm').dataset.productId);
        const index = adminData.products.findIndex(p => p.id === id);
        if (index !== -1) {
            adminData.products[index] = { ...adminData.products[index], ...productData };
            showNotification('تم تعديل المنتج بنجاح', 'success');
        }
    }
    
    saveData('adminProducts', adminData.products);
    loadProducts();
    closeModal('productModal');
}

// Offers Management
function loadOffers() {
    const tbody = document.getElementById('offersTableBody');
    tbody.innerHTML = '';
    
    adminData.offers.forEach(offer => {
        const isActive = new Date(offer.endDate) >= new Date();
        const row = `
            <tr>
                <td>${offer.title}</td>
                <td>${offer.discount}%</td>
                <td>${offer.startDate}</td>
                <td>${offer.endDate}</td>
                <td>
                    <span class="badge ${isActive ? 'success' : 'danger'}">
                        ${isActive ? 'نشط' : 'منتهي'}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editOffer(${offer.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteOffer(${offer.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function showAddOfferModal() {
    document.getElementById('offerModalTitle').textContent = 'إضافة عرض';
    document.getElementById('offerForm').reset();
    document.getElementById('offerForm').dataset.mode = 'add';
    document.getElementById('offerModal').classList.add('show');
}

function editOffer(id) {
    const offer = adminData.offers.find(o => o.id === id);
    if (!offer) return;
    
    document.getElementById('offerModalTitle').textContent = 'تعديل عرض';
    document.getElementById('offerTitle').value = offer.title;
    document.getElementById('offerDiscount').value = offer.discount;
    document.getElementById('offerStartDate').value = offer.startDate;
    document.getElementById('offerEndDate').value = offer.endDate;
    document.getElementById('offerDescription').value = offer.description;
    document.getElementById('offerForm').dataset.mode = 'edit';
    document.getElementById('offerForm').dataset.offerId = id;
    document.getElementById('offerModal').classList.add('show');
}

function deleteOffer(id) {
    if (confirm('هل أنت متأكد من حذف هذا العرض؟')) {
        adminData.offers = adminData.offers.filter(o => o.id !== id);
        saveData('adminOffers', adminData.offers);
        loadOffers();
        showNotification('تم حذف العرض بنجاح', 'success');
    }
}

function handleOfferSubmit(e) {
    e.preventDefault();
    
    const mode = document.getElementById('offerForm').dataset.mode;
    const offerData = {
        title: document.getElementById('offerTitle').value,
        discount: parseInt(document.getElementById('offerDiscount').value),
        startDate: document.getElementById('offerStartDate').value,
        endDate: document.getElementById('offerEndDate').value,
        description: document.getElementById('offerDescription').value
    };
    
    if (mode === 'add') {
        offerData.id = Date.now();
        adminData.offers.push(offerData);
        showNotification('تم إضافة العرض بنجاح', 'success');
    } else {
        const id = parseInt(document.getElementById('offerForm').dataset.offerId);
        const index = adminData.offers.findIndex(o => o.id === id);
        if (index !== -1) {
            adminData.offers[index] = { ...adminData.offers[index], ...offerData };
            showNotification('تم تعديل العرض بنجاح', 'success');
        }
    }
    
    saveData('adminOffers', adminData.offers);
    loadOffers();
    closeModal('offerModal');
}

// Orders Management
function loadOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';
    
    adminData.orders.forEach(order => {
        const row = `
            <tr>
                <td>#${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.orderDate}</td>
                <td>${order.total} ر.س</td>
                <td>
                    <span class="badge ${getOrderStatusClass(order.status)}">
                        ${getOrderStatusText(order.status)}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="viewOrder(${order.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-warning" onclick="updateOrderStatus(${order.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Settings Management
function loadSettings() {
    document.getElementById('siteName').value = adminData.settings.siteName;
    document.getElementById('siteEmail').value = adminData.settings.siteEmail;
    document.getElementById('sitePhone').value = adminData.settings.sitePhone;
}

function handleSettingsSubmit(e) {
    e.preventDefault();
    
    adminData.settings = {
        siteName: document.getElementById('siteName').value,
        siteEmail: document.getElementById('siteEmail').value,
        sitePhone: document.getElementById('sitePhone').value
    };
    
    saveData('adminSettings', adminData.settings);
    showNotification('تم حفظ الإعدادات بنجاح', 'success');
}

// Utility Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let stars = "";
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function getOrderStatusClass(status) {
    const classes = {
        'pending': 'warning',
        'processing': 'info',
        'shipped': 'primary',
        'delivered': 'success',
        'cancelled': 'danger'
    };
    return classes[status] || 'secondary';
}

function getOrderStatusText(status) {
    const texts = {
        'pending': 'قيد الانتظار',
        'processing': 'قيد المعالجة',
        'shipped': 'تم الشحن',
        'delivered': 'تم التوصيل',
        'cancelled': 'ملغي'
    };
    return texts[status] || status;
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    const bgColor = type === 'success' ? '#198754' : '#0d6efd';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background-color: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 300px;
        transition: transform 0.3s ease;
    `;
    
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-right: auto;
    `;
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


function showAddModal() {
    const activeSection = document.querySelector('.content-section.active');

    if (!activeSection) return;

    switch (activeSection.id) {
        case 'users':
            showAddUserModal();
            break;
        case 'products':
            showAddProductModal();
            break;
        case 'offers':
            showAddOfferModal();
            break;
        default:
            alert('لا يوجد عنصر للإضافة في هذا القسم');
    }
}
