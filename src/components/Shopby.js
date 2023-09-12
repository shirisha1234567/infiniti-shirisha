import React  from 'react'
import { Card, Row, Col } from 'react-bootstrap';
function Shopby(){
   const icons = [...Array(21).keys()]; 
 
   return (
     <Card>
       <Card.Body>
         <Row className="horizontal-icon-row">
           {icons.map((icon, index) => (
             <Col key={index} className="icon-box">
               <i className={`bi bi-${icon}`} key={index}></i> 
             </Col>
           ))}
         </Row>
       </Card.Body>
     </Card>
   );
 }
export default Shopby