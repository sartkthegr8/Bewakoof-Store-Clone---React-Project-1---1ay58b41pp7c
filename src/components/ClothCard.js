const ClothCard = (props) => {
    const{dData}=props;
    return(
      <div className="cloth-card" style={{backgroundColor:"grey"}}>
        <img 
        alt="cloth-logo"
        src={ dData.displayImage }
        />
        <h3>Bewkoof@</h3>    
        <h4>{dData.name}</h4> 
        <h5>⭐{dData.ratings}</h5>
  
        {/* <h4>{props.cardName}</h4> 
        <h4>⭐ {props.cardRating}</h4>  
        <h4>₹599</h4>  
        <h4>64% OFF</h4>   */}
  
      </div>
    )
  }

  export default ClothCard; 