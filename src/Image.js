const Image = ({data}) =>{
    return(
        <div className="imagesList">
            <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img className="eachImage" src={data.urls.small} alt={data.alt_description}></img></a>
        </div>
        
    )

}
export default Image;


//make the actual image display on