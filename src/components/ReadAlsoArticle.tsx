import './styles/ReadAlsoArticle.scss'

export default function ReadAlsoArticle() {
    return (
        <>
            <div className="read-also">
                <img src="/images/read-also-img.svg" alt="" className="read-also__img"/>
                <div className="read-also__text-block">
                    <p className="read-also__title">Что ждет морскую инфраструктуру в 2025 году. Какие вызовы предстоят выдержать. </p>
                    <div className="read-also__views-comments">
                        <div className="read-also__views">
                            <img src="/images/visibility-icon.svg" alt="" className="read-also__views-icon"/>
                            <p className="read-also__views-value">16</p>
                        </div>
                        <div className="read-also__comments">
                            <img src="/images/comment-icon.svg" alt="" className="read-also__comments-icon"/>
                            <p className="read-also__comments-value">16</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
