import "./styles/AccountTypePicker.scss"
import AccountTypeCard from "./AccountTypeCard.tsx";


export default function AccountTypePicker() {
	return <>

        <div className="account-type-container">
            <div className="account-type-container__text">
                <h1 className="account-type-container__title">Создайте акаунт моряка</h1>
                <p className="account-type-container__description">Выберите какой акаунт вы хотите создать</p>
            </div>
            <div className="account-type-container__variations">
                <AccountTypeCard title={"Моряк"} subtitle={"Откликайтесь на вакансии в один клик и отслеживайте, какие компании просмотрели ваш профиль"}/>
                <AccountTypeCard title={"Моряк"} subtitle={"Откликайтесь на вакансии в один клик и отслеживайте, какие компании просмотрели ваш профиль"}/>
                <AccountTypeCard title={"Моряк"} subtitle={"Откликайтесь на вакансии в один клик и отслеживайте, какие компании просмотрели ваш профиль"}/>
                <AccountTypeCard title={"Моряк"} subtitle={"Откликайтесь на вакансии в один клик и отслеживайте, какие компании просмотрели ваш профиль"}/>
            </div>
        </div>

    </>;
}
