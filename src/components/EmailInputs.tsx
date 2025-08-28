import React from 'react';

interface CodeInputProps {
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    length: number;
    onChange: (index: number, value: string) => void;
    id?: string;
}

export const CodeInput: React.FC<CodeInputProps> = ({ props, length, onChange, id = 'default' }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const key = event.key;
        if (key === 'Backspace' || key === 'Delete') {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            target.value = '';
            onChange(index, '');
            if (index > 0) {
                const prevInput = document.getElementById(`code-input-${index - 1}-${id}`) as HTMLInputElement | null;
                if (prevInput) prevInput.focus();
            }
        }
    };

    const handleInput = (event: React.FormEvent<HTMLInputElement>, index: number) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        if (/^\d$/.test(value)) {
            onChange(index, value);
            if (index < length - 1) {
                const nextInput = document.getElementById(`code-input-${index + 1}-${id}`) as HTMLInputElement | null;
                if (nextInput) nextInput.focus();
            }
        } else {
            target.value = '';
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        event.preventDefault();
        const pasteData = event.clipboardData
            .getData('text')
            .split('')
            .filter((char) => /^\d$/.test(char));

        if (pasteData.length > 0) {
            let pasteIndex = 0;
            for (let i = index; i < length && pasteIndex < pasteData.length; i++) {
                const inputElement = document.getElementById(`code-input-${i}-${id}`) as HTMLInputElement | null;
                if (inputElement) {
                    inputElement.value = pasteData[pasteIndex++];
                    onChange(i, inputElement.value);
                    if (i < length - 1 && pasteIndex < pasteData.length) {
                        const nextInput = document.getElementById(`code-input-${i + 1}-${id}`) as HTMLInputElement | null;
                        nextInput && nextInput.focus();
                    }
                }
            }
        }
    };

    return (
        <div className="code-inputs">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    id={`code-input-${index}-${id}`}
                    className="code-input"
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onInput={(e) => handleInput(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    {...props}
                />
            ))}
        </div>
    );
};

export default CodeInput;
