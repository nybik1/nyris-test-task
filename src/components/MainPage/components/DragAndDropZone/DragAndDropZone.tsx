import React, { memo, useCallback } from 'react';
import styles from './DragAndDropZone.module.scss';
import Image from 'next/image';
import MOCK_IMAGES from './mocks/mockImages';
import SearchSvg from '../../../../assets/svg/searchIcon.svg';

const DragAndDropZone = () => {
    const dragOverHandler = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const dropHandler = useCallback((e: React.DragEvent) => {
        e.preventDefault();

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === 'file') {
                    /// const file = e.dataTransfer.items[i].getAsFile();
                    /// do something with file
                }
            }
        }
    }, []);

    const handleUpload = useCallback(() => {
    /// do something with file
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner} onDragOver={dragOverHandler} onDrop={dropHandler}>
                <div className={styles.svgWrapper}>
                    <SearchSvg />
                </div>
                <div className={styles.choosePhoto}>
                    <input type="file" id="photo" className={styles.chooseInput} onChange={handleUpload} />
                    <label htmlFor="photo" className={styles.chooseLabel}>
            Choose photo
                    </label>
                    <p className={styles.chooseText}>or drag & drop it here</p>
                </div>
                <p className={styles.optionsText}>You can try with these options too:</p>
                <div className={styles.optionsImages}>
                    {MOCK_IMAGES.map(({ name, url }) => (
                        <div className={styles.imgWrapper} key={name}>
                            <Image src={url} alt={name} layout="fill" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(DragAndDropZone);
