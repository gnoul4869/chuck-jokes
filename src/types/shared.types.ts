export type ChuckJokeResultItem = {
    categories: Array<string>;
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
};

export type Joke = {
    id: string;
    category: string;
    value: string;
    likes: number;
    dislikes: number;
};
