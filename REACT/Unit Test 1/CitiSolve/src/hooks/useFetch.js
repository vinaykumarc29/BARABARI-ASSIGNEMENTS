import { useContext  } from "react";
import UserContext from "../contexts/UserContext";;

const useFetch = ()=>{
 return useContext(UserContext);
}

export default useFetch;