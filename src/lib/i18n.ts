export type Lang = "es" | "en";

export const t = {
  es: {
    // Nav
    nav_all: "Todos los Productos",
    nav_consoles: "Consolas",
    nav_games: "Videojuegos",
    nav_accessories: "Accesorios",
    nav_retro: "Retro & Usado",
    nav_payments: "Pagos",
    nav_contact: "Contacto",
    nav_whatsapp: "WhatsApp",
    nav_search_placeholder: "Buscar consolas, juegos, accesorios...",

    // Product card / detail
    add_to_cart: "Agregar al carrito",
    added: "¡Agregado!",
    out_of_stock: "Agotado",
    in_stock: "En stock",
    new_badge: "Nuevo",
    view_details: "Ver detalles",
    inquire: "Consultar",
    back_to_products: "Volver a Productos",
    sku: "SKU",
    warranty: "Garantía incluida",
    original: "Producto original",
    store_pickup: "Entrega en tienda",
    related: "Productos Relacionados",
    not_found: "Producto no encontrado",
    ivai: "IVAI",

    // Cart drawer
    cart_title: "Carrito",
    cart_empty: "Tu carrito está vacío",
    cart_empty_sub: "Agrega productos para comenzar tu compra",
    explore: "Explorar Productos",
    keep_shopping: "Seguir Comprando",
    checkout: "Proceder al Pago",
    subtotal: "Subtotal",
    vat: "IVA incluido",
    total: "Total",
    tax_note: "Impuestos y envío calculados al pagar",

    // Carrito page
    cart_page_title: "Carrito de Compras",
    order_summary: "Resumen del Pedido",
    products_count: "productos",
    empty_cart: "Vaciar Carrito",
    payment_methods: "Aceptamos SINPE Móvil, tarjetas y transferencia",

    // Hero
    hero_cta: "Ver Productos",
    hero_stat_years: "Años de experiencia",
    hero_stat_products: "Productos disponibles",
    hero_stat_rating: "Calificación clientes",

    // Categories section
    categories_label: "Explorar",
    categories_title: "Categorías",
    see_all: "Ver todo →",

    // Products page
    all_products_title: "Todos los Productos",
    products_available: "productos disponibles",
    filter_label: "Filtrar:",
    filter_category: "Categoría",
    filter_brand: "Marca",
    filter_sort: "Ordenar",
    sort_featured: "Destacados",
    sort_price_asc: "Precio: Menor a Mayor",
    sort_price_desc: "Precio: Mayor a Menor",
    sort_name: "Nombre A-Z",
    all_categories: "Todas",
    clear_filters: "Limpiar",

    // Footer
    footer_tagline: "Tienda especializada en videojuegos con más de 15 años de ofrecer calidad y respaldo en Cartago, Costa Rica.",
    footer_facebook: "Síguenos en Facebook",
    footer_shop: "Tienda",
    footer_contact: "Contacto",
    footer_payments: "Métodos de Pago",
    footer_financing: "Financiamiento:",
    footer_all_payments: "Ver todos los métodos de pago →",
    footer_rights: "Todos los derechos reservados.",
    footer_about: "Nosotros",

    // Announcement bar
    announcement: "🎮 Más de 15 años en Cartago — Lun–Vie 9AM–5:30PM · Sáb 9AM–1PM",
  },

  en: {
    // Nav
    nav_all: "All Products",
    nav_consoles: "Consoles",
    nav_games: "Video Games",
    nav_accessories: "Accessories",
    nav_retro: "Retro & Used",
    nav_payments: "Payments",
    nav_contact: "Contact",
    nav_whatsapp: "WhatsApp",
    nav_search_placeholder: "Search consoles, games, accessories...",

    // Product card / detail
    add_to_cart: "Add to cart",
    added: "Added!",
    out_of_stock: "Out of stock",
    in_stock: "In stock",
    new_badge: "New",
    view_details: "View details",
    inquire: "Inquire",
    back_to_products: "Back to Products",
    sku: "SKU",
    warranty: "Warranty included",
    original: "Original product",
    store_pickup: "Store pickup",
    related: "Related Products",
    not_found: "Product not found",
    ivai: "VAT incl.",

    // Cart drawer
    cart_title: "Cart",
    cart_empty: "Your cart is empty",
    cart_empty_sub: "Add products to start your purchase",
    explore: "Explore Products",
    keep_shopping: "Continue Shopping",
    checkout: "Proceed to Checkout",
    subtotal: "Subtotal",
    vat: "VAT included",
    total: "Total",
    tax_note: "Taxes and shipping calculated at checkout",

    // Carrito page
    cart_page_title: "Shopping Cart",
    order_summary: "Order Summary",
    products_count: "items",
    empty_cart: "Empty Cart",
    payment_methods: "We accept SINPE Móvil, cards and bank transfer",

    // Hero
    hero_cta: "View Products",
    hero_stat_years: "Years of experience",
    hero_stat_products: "Products available",
    hero_stat_rating: "Customer rating",

    // Categories section
    categories_label: "Explore",
    categories_title: "Categories",
    see_all: "See all →",

    // Products page
    all_products_title: "All Products",
    products_available: "products available",
    filter_label: "Filter:",
    filter_category: "Category",
    filter_brand: "Brand",
    filter_sort: "Sort",
    sort_featured: "Featured",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_name: "Name A-Z",
    all_categories: "All",
    clear_filters: "Clear",

    // Footer
    footer_tagline: "Specialized video game store with over 15 years offering quality and support in Cartago, Costa Rica.",
    footer_facebook: "Follow us on Facebook",
    footer_shop: "Shop",
    footer_contact: "Contact",
    footer_payments: "Payment Methods",
    footer_financing: "Financing:",
    footer_all_payments: "See all payment methods →",
    footer_rights: "All rights reserved.",
    footer_about: "About",

    // Announcement bar
    announcement: "🎮 Over 15 years in Cartago — Mon–Fri 9AM–5:30PM · Sat 9AM–1PM",
  },
} as const;

export type TranslationKey = keyof typeof t.es;
