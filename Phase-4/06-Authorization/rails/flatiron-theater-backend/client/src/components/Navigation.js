import {Link} from "react-router-dom";

function Navigation({onLogout, user}) {
  console.log(user)
  function logout(){
    fetch("/logout",{
      method:"DELETE"
    })
    .then(onLogout)
  }
    return (
        <> 
   
         <h1>Flatiron Theater Company</h1>
         <h1>{user.user_name}</h1>
         <button onClick={logout}>Log out</button>
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