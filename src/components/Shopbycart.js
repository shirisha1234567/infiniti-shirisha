function Shopbycart(){
   const options = ['One', 'Two', 'Three', 'Four', 'Five'];
   const onOptionChangeHandler = (event) => {
       console.log("User Selected Value - ", event.target.value)
   }
    return(
      <>
       <center>
                <h4>Facility Managment</h4>

              <select onChange={onOptionChangeHandler} className="select">
                <option>Maintanence Services</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>  <hr></hr>     
            </center>


            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Work Wear and uniform</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Custodial services</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>

            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Facility Managment</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Facility Managment</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Facility Managment</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Facility Managment</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
            <center>
                 <select onChange={onOptionChangeHandler} className="select">
                <option>Facility Managment</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>       
            </center>
         
      </>
    )
}
export default Shopbycart;