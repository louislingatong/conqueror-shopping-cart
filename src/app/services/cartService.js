const findCart = () => {
    let cart = {};
    if (!!localStorage.getItem('cart')) {
        const json = localStorage.getItem('cart');
        cart = JSON.parse(json);
    }
    return cart;
}

const addProductToCart = (data) => {
    const cart = findCart();
    if (cart[data.name]) {
        cart[data.name] = {
            ...data,
            subTotal: cart[data.name].subTotal + data.price,
            quantity: cart[data.name].quantity + 1
        }
    } else {
        cart[data.name] = {
            ...data,
            subTotal: data.price,
            quantity: 1
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeProductToCart = (productName) => {
    const cart = findCart();
    delete cart[productName];
    localStorage.setItem('cart', JSON.stringify(cart));
}

export {
    findCart,
    addProductToCart,
    removeProductToCart
}
