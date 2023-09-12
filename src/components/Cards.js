import Productlist from "./Productlist";
import Shopbycart1 from "./Shopbycard1";
import Shopbycart from "./Shopbycart"; 
import Search from "./Search";

import Viewall from "./Viewall";



function Cards(){
     return(
      <>

<div class="row row-cols-1 row-cols-md-3 g-4" className='cardsmain'>
<div class="col">
    <div class="card h-100 ">
    <div class="card-body">
            <h5 class="card-title"><Viewall/></h5>
       </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="card-body">
            <h5 class="card-title"><Shopbycart1/></h5>
       </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100 ">
    <div class="card-body">
            <h5 class="card-title"><Shopbycart/></h5>
       </div>
      
    </div>
  </div>
  <div class="col" className="card-4">
    <div class="card h-100">
      <Search/>
    <div class="card-body">
            <h5 class="card-title"><Productlist/></h5>
       </div>
      
    </div>
  </div>
  
</div>


    

      </>
     )
}
export default Cards;