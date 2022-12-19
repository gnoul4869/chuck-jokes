import './CategoryTag.scss';

import { Category } from 'data/categories';

type CategoryTagProps = {
    category: Category;
    isActive?: boolean;
    style?: React.CSSProperties;
};

export default function CategoryTag({ category, isActive, style }: CategoryTagProps) {
    const isAll = category.name === 'all';

    return (
        <div className={`category-tag ${isAll ? 'all' : ''}`} style={{ backgroundColor: category.color, ...style }}>
            {isActive && <div className="dot"></div>}
            <div className="text">
                {category.name} Joke{isAll ? 's' : ''}
            </div>
        </div>
    );
}
