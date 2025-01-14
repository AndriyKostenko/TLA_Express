import inputStyles from './Input.module.css';




interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    error?: string;
    fullWidth?: boolean;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}


export const Input:React.FC<InputProps> = ({
    className='',
    label,
    error,
    fullWidth=false,
    type,
    name,
    id,
     ...props}) => {
    return (
        <div className={inputStyles.wrapper}>
            {label && <label className={inputStyles.label}>{label}</label>}
            <input className={`${className} 
                            ${inputStyles.input}
                            ${type === 'file' ? inputStyles.fileInput : ''}
                            ${fullWidth ? inputStyles.fullWidth : ''}
                            ${error ? inputStyles.error : ''}`}
                    type={type}
                    name={name}
                    id={id}
                        
                            {...props}
            />
            {error && <span className={inputStyles.errorText}>{error}</span>}
        </div>
    )
}