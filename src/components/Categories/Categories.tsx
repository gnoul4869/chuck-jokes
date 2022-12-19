import { useEffect, useState } from 'react';
import Icon from 'components/Icon/Icon';
import CategoryTag from 'components/CategoryTag/CategoryTag';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { categories } from 'data/categories';

import './Categories.scss';

type CategoriesProps = {
    categoryName: string;
    setCategoryName: (value: string) => void;
};

export default function Categories({ categoryName, setCategoryName }: CategoriesProps) {
    const [showCategories, setShowCategories] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setShowCategories(false);
    }, [categoryName]);

    const selectedCategory = categories.find((category) => category.name === categoryName);

    const isMobileScreen = width < 768;

    return (
        <div className="categories-wrapper">
            {(showCategories || !isMobileScreen) && (
                <div className="categories-container">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            style={{ backgroundColor: category.color }}
                            className={`btn-category ${category.name === 'all' ? 'all' : ''}`}
                            onClick={() => setCategoryName(category.name)}
                        >
                            {category.name === 'all' ? (
                                <>
                                    <span className="text">View all</span>
                                    <Icon name="arrow_down" size="sm" className="icon down" />
                                </>
                            ) : (
                                `${category.name} Joke`
                            )}
                        </button>
                    ))}
                </div>
            )}
            {isMobileScreen && (
                <button className="btn-show-categories" onClick={() => setShowCategories(!showCategories)}>
                    {`${showCategories ? 'Hide' : 'Show'} categories`}
                </button>
            )}
            {selectedCategory && <CategoryTag category={selectedCategory} style={{ marginBottom: 'min(2vw, 2rem)' }} />}
        </div>
    );
}
