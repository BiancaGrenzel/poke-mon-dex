export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'title' | 'subtitle' | 'body';
    color?: 'red' | 'white' | 'black' | 'gray';
    weight?: 'light' | 'normal' | 'bold';
    children?: React.ReactNode;
}