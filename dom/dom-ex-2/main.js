const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

  
  function checkReservation()
  {
    let userName = document.getElementById("user").value
    const list = document.getElementById("results")
    const newItem = document.createElement("ul")
    
    
    for (const [key ,value] of Object.entries(reservations))
    {
        console.log(userName) 
        if (key == userName)
        {
           
            if (value.claimed == false)
            {
                newItem.innerHTML = "welcome," + key
            }else
            {
                newItem.innerHTML = "Hmm, someone already claimed this reservation"
            }
            list.appendChild(newItem)
            return
        }else{
            newItem.innerHTML = "You have no reservation"
        }
    }
    list.appendChild(newItem)
  }