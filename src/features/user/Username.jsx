import { useSelector } from "react-redux"

function User(){
   const username = useSelector((state)=>{
       return state.user.username
    })
    return(
        <div className="hidden md:block"> {username}</div>
    )
}
export default User