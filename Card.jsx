import ProfilePicture from './assets/sami.png'

function Card()

{
    return(
        <div className="card">
            <img className="card-img" src={ProfilePicture} alt="Profile Picture" width={150} height={150} />
            <br />
            <titl className="card-titl">Bro Keep Coding</titl>
            <p className="card-text">You are great since human has given great power by God.</p>
        </div>
    );

}
export default Card