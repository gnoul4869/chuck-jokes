import { useState, useEffect } from 'react';

//* Types
import { IconProps } from './Icon.types';

//* Utils
import { calculateSize } from 'utils/sizing';

import './Icon.scss';

export default function Icon({ name, size, className }: IconProps) {
    const [icon, setIcon] = useState<string | undefined>(undefined);

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const res = await import(`assets/images/icons/${name}.png`);
                setIcon(res.default);
            } catch (error) {
                console.error(error);
            }
        };

        loadIcon();
    }, [name]);

    const width = calculateSize(size);
    const style = {
        width,
    };

    const icon_name = `${name}_icon`;

    return <img src={icon} alt={icon_name} style={style} className={className} />;
}
