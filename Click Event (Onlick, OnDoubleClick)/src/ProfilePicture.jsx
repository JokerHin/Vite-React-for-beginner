
function ProfilePicture(){

const imageUrl = "./src/assets/Profile.jpg"

const handleClick = (e) => e.target.style.display = "none";

const styles = {
    width: "150px" ,
    height: "150px",
}

    return (<>
        <img onClick={(e) => handleClick(e)} src={imageUrl} style={styles}></img>
    </>
    )
}

export default ProfilePicture