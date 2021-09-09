import {Link} from "react-router-dom";

function Navigation({cart}) {
    return (
        <> 
   
         <h1>Flatiron Theater Company</h1>
         <div>
           <h1><Link to="/login"> Login</Link></h1>
           <h1><Link to="/sign_up"> Sign Up</Link></h1>
           <h1><Link to="/productions/new">New Production</Link></h1>
           <h1><Link to="/"> Home</Link></h1>
         </div>

        </>
    )
}

export default Navigation;