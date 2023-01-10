const playerArray = [];

function display(cartPlayer) 
{ 
    // console.log(cartPlayer);
    const tableBody = document.getElementById("player-list");
    tableBody.innerHTML = "";
   
    for(let i=0; i<cartPlayer.length; i++)
    {
        // console.log(playerArray[i].playerName);
        const pName = playerArray[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${pName}</td>
        `;
    
        tableBody.appendChild(tr);
    }
  }
function addToPlayerArray(element)
{
    // console.log(element.parentNode.children)
    // console.log(element.parentNode.children[0].innerText)

      const playerName =  element.parentNode.children[0].innerText;
    // console.log(playerName);

      const playerScore = element.parentNode.children[1].innerText;
    //  console.log(playerScore);

    const playerObj = {
      playerName : playerName,
      playerScore : playerScore
    }
    playerArray.push(playerObj);
    // console.log(playerArray)

    var playerListLength = playerArray.length;
    // console.log(playerListLength)

        if(playerListLength>5){
        alert("Maximum 5 players can be added!");
        return;
    }
    
    display(playerArray);
}
