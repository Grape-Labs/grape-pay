import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import css from './GenerateButton.module.css';

export const GenerateButton: FC = () => {
    //const { type, generate } = usePayment();
    
    function refreshPage() {
        window.location.reload();
    }

    return (
        <button
            className={css.root}
            type="button"
            onClick={refreshPage}
        >
            change
        </button>
    );
};
