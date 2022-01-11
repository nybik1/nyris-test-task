import React, { memo } from 'react';
import styles from './PromoSvg.module.scss';
import CombinedShape from '../../../../assets/svg/combinedShape.svg';

const PromoSvg: React.FC = () => {
    return (
        <div className={styles.svgWrapper}>
            <CombinedShape />
        </div>
    );
};

export default memo(PromoSvg);
