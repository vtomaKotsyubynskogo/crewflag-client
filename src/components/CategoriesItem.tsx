import './styles/CategoriesItem.scss'

export interface CategoriesProps {
    title: string,
    isActive: boolean,
    onClick: () => void,
}

export default function CategoriesItem({title, isActive, onClick}: CategoriesProps) {
	return <button onClick={onClick} className={`category-list-button ${isActive? 'active': ''}`} >
                {title}
            </button>

}
