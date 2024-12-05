export type Article = {
    picture: string;
    name: string;
    price: number;
    quantity: number;
};

export type ShoppingCart = {
    articles: Article[];
    total: number;
};