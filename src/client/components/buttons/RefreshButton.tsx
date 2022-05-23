import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { RefreshIcon } from '../images/RefreshIcon';
import css from './RefreshButton.module.css';

export interface RefreshButtonProps {
    children: ReactNode;
    onClick: HTMLAttributes<HTMLButtonElement>['onClick'];
}

export const RefreshButton: FC<RefreshButtonProps> = ({ children, onClick }) => {
    return (
        <button className={css.button} type="button" onClick={onClick}>
            <RefreshIcon />
            {children}
        </button>
    );
};
