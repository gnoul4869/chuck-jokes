import Icon from 'components/Icon/Icon';
import './Categories.scss';

export type Category = {
    id: number;
    name: string;
    color: string;
};

const categories: Category[] = [
    { id: 0, name: 'career', color: 'Orange' },
    { id: 1, name: 'celebrity', color: 'Violet' },
    { id: 2, name: 'dev', color: 'Blue' },
    { id: 3, name: 'explicit', color: 'Red' },
    { id: 4, name: 'food', color: 'Green' },
    { id: 5, name: 'history', color: 'Brown' },
    { id: 6, name: 'money', color: 'MediumSeaGreen' },
    { id: 7, name: 'movie', color: 'MediumSlateBlue' },
    { id: 8, name: 'music', color: 'Magenta' },
    { id: 9, name: 'political', color: 'LightCoral' },
    { id: 10, name: 'religion', color: 'DarkRed' },
    { id: 11, name: 'science', color: 'DeepSkyBlue' },
    { id: 12, name: 'sport', color: 'Teal' },
    { id: 13, name: 'uncategorized', color: 'DeepPink' },
    { id: 14, name: 'all', color: 'transparent' },
];

type CategoriesProps = {
    setCategory: (value: string) => void;
};

export default function Categories({ setCategory }: CategoriesProps) {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <button
                    key={category.name}
                    style={{ backgroundColor: category.color }}
                    className={`btn-category ${category.name === 'all' ? 'all' : ''}`}
                    onClick={() => setCategory(category.name)}
                >
                    {category.name === 'all' ? (
                        <>
                            <span className="text">View all</span>
                            <Icon name="arrow_down" size="sm" className="icon down" />
                        </>
                    ) : (
                        category.name
                    )}
                </button>
            ))}
        </div>
    );
}
