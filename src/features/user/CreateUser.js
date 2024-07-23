import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(!username) return;
    dispatch(updateName(username));
    navigate("/menu")

  }
  return (
    <div>
     <form onSubmit={handleSubmit} className="flex flex-col items-center h-96">
      <p className="my-8 text-lg text-orange-800 text-center font-semibold">Welcome! Please start by telling us your name:</p>
        <input type="text" placeholder="Your full name" value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full max-w-2xl bg-orange-100 py-7 px-4 text-lg rounded-lg shadow-md mb-4"/>
        <button className="block bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mt-3">Start Ordering</button>
    
     </form>

    </div>
  )
}

export default CreateUser
