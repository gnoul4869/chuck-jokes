import React from 'react';
import icon from 'assets/images/icons/light.png';

//* Types
import { IconProps } from './icon.types';

//* Utils
import { calculateSize } from 'utils/sizing';

export default function LightIcon({ size }: IconProps) {
    const width = calculateSize(size);
    const style = {
        width,
    };

    return <img src={icon} alt="light_icon" style={style} />;
}
