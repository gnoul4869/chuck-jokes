/**
 * Calculate size in rem
 * @param size string
 * @returns size (e.g. 3rem)
 */
export const calculateSize = (size: string): string => {
    switch (size) {
        case 'xs':
            return '1rem';
        case 'sm':
            return '1.5rem';
        case 'md':
            return '2rem';
        case 'lg':
            return '2.5rem';
        default:
            return '3rem';
    }
};
