import "./styles/FirstScreen.scss";
import Tag from "./Tag.tsx";

const tags = [
	{
		number: 22,
		title: "Engine",
		icons: ["/images/tags-icon/engine-icon-one.svg", "/images/tags-icon/engine-icon-two.svg", "/images/tags-icon/engine-icon-three.svg", "/images/tags-icon/engine-icon-four.svg"],
	},
	{
		number: 40,
		title: "Deck",
		icons: ["/images/tags-icon/deck-icon-one.svg", "/images/tags-icon/deck-icon-two.svg", "/images/tags-icon/deck-icon-three.svg", "/images/tags-icon/deck-icon-four.svg"],
	},
	{
		number: 70,
		title: "Catering",
		icons: ["/images/tags-icon/catering-icon-one.svg", "/images/tags-icon/catering-icon-two.svg", "/images/tags-icon/catering-icon-three.svg", "/images/tags-icon/catering-icon-four.svg"],
	},
	{
		number: 70,
		title: "St. Petersburg",
	},
]

export default function FirstScreen() {
	return (
		<>
			<div className="first-screen-container">
				<div className="text-and-user-card">
					<div className="text-part">
						<p className="first-screen-title">
							Crewflag - профессиональная морская платформа
						</p>
						<p className="first-screen-description">
							Создай CV в международном формате прямо на сайте и
							получи оффер уже сегодня
						</p>
						<div className="text-button-container">
							<button className="create enabled-dark">
								Создать CV
							</button>
							<button className="registration enabled-lite">
								Регистрация
							</button>
						</div>
					</div>
					<div className="user-card">
						<div className="user-card-content">
							<div className="card-info">
								<div className="user-info">
									<p className="user-name">Trudnenko Ilia</p>
									<p className="user-age">28 y.o.</p>
								</div>
								<div className="user-location-section">
									<img src="/images/location-icon.svg" alt=" " className="location-icon"/>
									<p className="user-location">Russia, Moscow</p>
									<img src="/images/russia-flag-icon.svg" alt=" " className="russia-flag-icon"/>
								</div>
							</div>
							<img src="/images/user-image.svg" alt=" " className="user-image"/>
						</div>
						<div className="user-profession">
							<p className="main-position">Motorman</p>
							<p className="secondary-position">Oiler</p>
							<p className="user-salary">$1900-2200</p>
						</div>
						<div className="advantages-container advantages-first">
							<img src="/images/advantages-icon-one.svg" alt="" className="advantages-icon"/>
							<p className="advantages-text ">Быстрая и удобная подача вашей анкеты.</p>
						</div>
						<div className="advantages-container advantages-second">
							<img src="/images/advantages-icon-two.svg" alt="" className="advantages-icon"/>
							<p className="advantages-text">Можно видеть кто интересовался вашей CV</p>
						</div>
						<div className="advantages-container advantages-third">
							<img src="/images/advantages-icon-three.svg" alt="" className="advantages-icon"/>
							<p className="advantages-text">Автоматические уведомления работодателей при заполнении</p>
						</div>
					</div>
				</div>
				<div className="tags-main-container">
					{tags.map((tag, key) => (
						<Tag key={key} number={tag.number} title={tag.title} icons={tag.icons}/>
					))}
				</div>
			</div>
		</>
	);
}
