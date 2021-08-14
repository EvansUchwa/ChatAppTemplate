function dropDowner($actionner,$dropDown)
{
	$actionner.click(function()
	{
		$dropDown.css('opacity','1');
		$dropDown.css('transform','translateY(0)');
	})
}


function addNb(currentInput,adder,nbAdult,nbChild,nbRoom)
{
	adder.click(function()
	{
		oldValue = parseInt($(this).prev().html());
		$(this).prev().html(oldValue + 1)
		let plurielOne = "";
		let plurielTwo = "";

		if (oldValue + 1 >= 0) 
		{

			let nbAdultValue = parseInt($(nbAdult).html());
    		let nbChildValue = parseInt($(nbChild).html());
    		let nbRoomValue = parseInt($(nbRoom).html());

    		if ((nbAdultValue + nbChildValue) >= 2 ) {plurielOne = "s"}
    		if (nbRoomValue >=2) {plurielTwo = "s"}

    		currentInput.val((nbAdultValue + nbChildValue) + " personne"+plurielOne+" | "+nbRoomValue+ " chambre"+plurielTwo );

    			// console.log(currentInput.val())
		}
	})
}
function removeNb(currentInput,remover,nbAdult,nbChild,nbRoom)
{
	remover.click(function()
	{
		oldValue = parseInt($(this).next().html());
		let plurielOne = "";
		let plurielTwo = "";

		if (oldValue - 1 >= 0) 
		{
			$(this).next().html(oldValue - 1)
			let nbAdultValue = parseInt($(nbAdult).html());
    		let nbChildValue = parseInt($(nbChild).html());
    		let nbRoomValue = parseInt($(nbRoom).html());

    		if ((nbAdultValue + nbChildValue) >= 2 ) {plurielOne = "s"}
    		if (nbRoomValue >=2) {plurielTwo = "s"}

    		currentInput.val((nbAdultValue + nbChildValue) + " personne"+plurielOne+" | "+nbRoomValue+ " chambre"+plurielTwo );

    			// console.log(currentInput.val())
		}
	})
}

function resetInput(dropDowner1,dropDown1,adder,remover)
{
	window.onclick = function(event) 
	{
		  if (!event.target.matches(dropDowner1) &&
		  		!event.target.matches(adder)
		  		&& !event.target.matches(remover)) 
		  {
		  	 $(dropDown1).css('opacity','0');
		  	 $(dropDown1).css('transform','translateY(-10px)');

		  }

	}
}