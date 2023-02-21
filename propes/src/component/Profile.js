import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Profile =({Name,bio,profession,handleAlert})=> {





 return(
<div className="Card">
  

<Card style={{ width: '10rem'}}>
      <Card.Img src="https://www.idole.net/wp-content/uploads/2019/06/influenceur-homme.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Button variant="primary">start playing</Button>
      </Card.Body>
    </Card> 
   <div>
    <h1>{Name}</h1>
  <h2>{bio}</h2>
  <h3>{profession}</h3>
<Button onClick={()=>handleAlert(Name)} >try a click  </Button>
    
</div>
</div>





)}
export default Profile