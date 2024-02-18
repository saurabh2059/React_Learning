import React from 'react'


function Card(props) {
    // props gives object 

    // also can be done as 
    // function Card({userName, btnText= "saurabh"}); for default value for missing one
    // console.log(userName)
    // no need to write props.username
    // console.log("props",props)
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mt-4">
  <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="AirMax Pro" className="z-0 h-full w-full rounded-md object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.userName}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {props.btnText || "missing prop"} 
      {/* for missing props */}
    </button>
  </div>
</div>

  )
}

export default Card
