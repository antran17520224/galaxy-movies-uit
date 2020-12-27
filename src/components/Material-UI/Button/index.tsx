import { Button, CircularProgress } from '@material-ui/core';
import React from 'react';

export interface ICustomButton {
    onClick?: () => void;
    loading?: boolean;
    label: string;
    color?:
    | 'default'
    | 'inherit'
    | 'primary'
    | 'secondary';
    fullWidth?: boolean;
    variant:
    | 'contained'
    | 'outlined'
    | 'text';
    type?:
    | 'submit'
    | 'button'
    className?: string;
}

export const CustomButton: React.FC<ICustomButton> = ({ loading, ...props }) => {
    const { label, type } = props;
    return (
        <Button {...props} disabled={loading}>
            {loading && (
                <div style={{ display: 'flex', alignItems: 'center' }}> {label} <CircularProgress size={14} style={{ marginLeft: '13px' }} /> </div>
            )}
            {!loading && `${label}`}
        </Button>
    )
}