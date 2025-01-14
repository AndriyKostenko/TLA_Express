interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string; // Make className optional if it's not always required
    
}


// including all the props that a button element can have
export const Button: React.FC<ButtonProps> = ({ title, className, ...props }) => {
    return (
        <button className={className} {...props}>
            {title}
        </button>
    )
}