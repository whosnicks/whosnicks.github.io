import "./Card.css"
import coding from "../../assets/images/coding.png"

const Card = () => {
    return (
        <div className="container">
            <div className="background-image">
            </div>

            <div className="informative">
                <div className="informative-card">
                    <h1>I build this website to learn <span>ReactJS</span></h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque quod nisi explicabo assumenda eveniet amet qui soluta! Odio, quam.</h3>
                    <div className="btn">
                    <button className="card-btn primary-button">Learn How</button>
                    <button className="card-btn secondary-button"> About me</button>
                    </div>
                </div>

                <div className="informative-image">
                    <img className="cardImg" src={coding} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card;