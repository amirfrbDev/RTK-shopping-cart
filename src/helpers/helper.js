const shortenText = text => text.split(" ").slice(0, 3).join(" ");

const searchProducts = (products, search) => {
    if (!search) return products;
    const searchedProducts = products.filter(p => p.title.toLowerCase().includes(search))
    return searchedProducts
}

const filterProducts = (products, category) => {
    if (!category) return products;
    const filteredProducts = products.filter(p => p.category === category)
    return filteredProducts;
}

const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery;
        return rest
    }

    if (newQuery.search === "") {
        const { search, ...rest } = currentQuery;
        return rest
    }

    return { ...currentQuery, ...newQuery }
}

const getInitialQuery = searchParams => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search");

    if (category) query.category = category;
    if (search) query.search = search;
    return query;
}

const sumPrice = products => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
}
const sumQuantity = products => {
    return products.reduce((total, product) => total + product.quantity, 0);
}

const productQuantity = (state, id) => {
    const product = state.find(item => item.id === id);
    if (!product) {
        return 0;
    } else {
        return product.quantity
    }
}


export {
    shortenText,
    searchProducts,
    filterProducts,
    createQueryObject,
    getInitialQuery,
    sumPrice,
    sumQuantity,
    productQuantity
}