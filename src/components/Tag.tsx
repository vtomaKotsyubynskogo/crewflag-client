import "./styles/Tags.scss"

interface TagsProps {
    number: number;
    title: string;
    icons?: string[]
}

export default function Tag({number, title, icons}: TagsProps) {
	return <>
        <div className="tags-container">
            <p className="tags-number">{number}</p>
            <p className="tags-title">{title}</p>
            {icons && (
                <div className="tags-icons">
                    {icons.map((icon, key) => (
                        <img key={key} src={icon} className="tags-icon" alt={"asdasd"} />
                    ))}
                </div>
            )}
        </div>
    </>;
}

