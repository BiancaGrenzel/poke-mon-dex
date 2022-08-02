export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
}