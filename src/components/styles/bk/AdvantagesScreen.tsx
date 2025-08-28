import "./styles/AdvantagesScreen.scss";

export default function AdvantagesScreen() {
	return (
		<>
			<div className="advantages-screen-container">
				{/*<div className="content-advantages-container">*/}
				<div className="advantages-title-section">
					<h1 className="advantages-title">
						Преимущества работы с нашей платформой
					</h1>
				</div>

				<div className="phone-block">
					<img
						src="/images/phone.svg"
						alt=""
						className="phone-icon"
					/>
					<div className="card-advantage-container">
						<div className="advantages-first-block">
							<img
								src="/images/diagram-icon.svg"
								alt=" "
								className="diagram-icon"
							/>
							<p className="advantages-card-text">
								Полный контроль над своими данными
							</p>
						</div>
						<div className="advantages-second-block">
							<div className="advantages-local-block">
								<img
									src="/images/second-advantage-icon-one.svg"
									alt=" "
									className="advantages-icon"
								/>
								<p className="second-block-text">
									Second Engineer
								</p>
							</div>
							<div className="advantages-local-block">
								<img
									src="/images/second-advantage-icon-two.svg"
									alt=" "
									className="advantages-icon"
								/>
								<p className="second-block-text">
									Third Engineer
								</p>
							</div>
							<div className="advantages-local-block">
								<img
									src="/images/second-advantage-icon-three.svg"
									alt=" "
									className="advantages-icon"
								/>
								<p className="second-block-text">Catering</p>
							</div>
							<p className="advantages-card-text">
								Только свежие и актуальные вакансии
							</p>
						</div>
						<div className="advantages-third-block">
							<div className="icons-block">
								<img
									src="/images/third-advantages-icon-one.svg"
									alt=" "
									className="company-icon"
								/>
								<img
									src="/images/third-advantages-icon-two.svg"
									alt=""
									className="company-icon"
								/>
								<img
									src="/images/third-advantages-icon-three.svg"
									alt=""
									className="company-icon"
								/>
								<img
									src="/images/third-advantages-icon-four.svg"
									alt=""
									className="company-icon"
								/>
								<img
									src="/images/third-advantages-icon-five.svg"
									alt=""
									className="company-icon"
								/>
							</div>
							<div className="rating-block">
								<p className="rating">5.0</p>
								<div className="star-block">
									<img
										src="/images/gold-star-icon.svg"
										alt=""
										className="star-icon"
									/>
									<img
										src="/images/gold-star-icon.svg"
										alt=""
										className="star-icon"
									/>
									<img
										src="/images/gold-star-icon.svg"
										alt=""
										className="star-icon"
									/>
									<img
										src="/images/gold-star-icon.svg"
										alt=""
										className="star-icon"
									/>
									<img
										src="/images/gold-star-icon.svg"
										alt=""
										className="star-icon"
									/>
								</div>
							</div>
							<p className="advantages-card-text">
								Работаем с лучшими компаниями
							</p>
						</div>
					</div>
				</div>
				<div className="ellipse-container">
					<div className="ellipse"></div>
				</div>
			</div>
			{/*</div>*/}
		</>
	);
}
