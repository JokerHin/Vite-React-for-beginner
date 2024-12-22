import profilePic from "./assets/Profile.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Joker Hin</h2>
            <p className="card-text">i studying software engineering</p>
        </div>
    );
}

export default Card