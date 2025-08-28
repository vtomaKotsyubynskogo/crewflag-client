import "./styles/SailorQuestionnaire.scss"
type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputField: React.FC<InputFieldProps> = ({ style, className = '', id, ...rest }) => {
    return (
        <input
            id={id || rest.name}
            {...rest}
            className={`sailorQForm__input ${className}`}
            style={{
                padding: "8px 12px",
                ...style,
            }}
        />
    );
};
