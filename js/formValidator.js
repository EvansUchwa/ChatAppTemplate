
    	

    	window.onclick = function(event) {
		  if (!event.target.matches('#typeNbClientTitle') &&
		  		!event.target.matches('.addNb')
		  		&& !event.target.matches('.removeNb')) 
		  {
		  	 typeNbClient.style.transform = "scale(0)";
		  }
		  
          if (!event.target.matches('#dropVilleQuartier') ) 
          {
             villeQuartier.style.transform = "scale(0)";
          }

		}

        dropVilleQuartier.addEventListener('click',()=>
        {
            villeQuartier.style.transform = "scale(1)";
            for (var i = 0; i < quartierSelected.length; i++) 
            {
                quartierSelected[i].addEventListener('click',(target)=>
                {   
                    dropVilleQuartier.value = target.target.innerHTML;
                    // console.log(target.target.innerHTML);
                })
            }
        });


    	let addNb = document.getElementsByClassName('addNb');
    	let removeNb = document.getElementsByClassName('removeNb');

    	let tncValue = document.querySelector('.tncValue').innerHTML;
    	let plurielOne =  "";
    	let plurielTwo =  "";

    	for (var i = 0; i < addNb.length; i++) 
    	{
    		addNb[i].addEventListener('click',(target)=>{
    			let oldNumber = parseInt(target.target.previousElementSibling.innerHTML);
    			target.target.previousElementSibling.innerHTML = oldNumber + 1;
    			if (oldNumber + 1 >= 0) 
    			{
    				let ntncValueAdt = parseInt(document.querySelector('#tncValueAdt').innerHTML);
    				let ntncValueChd = parseInt(document.querySelector('#tncValueChd').innerHTML);
    				let ntncValueChmb = parseInt(document.querySelector('#tncValueChmb').innerHTML);

    				if ((ntncValueAdt + ntncValueChd) >=2 ) {plurielOne = "s"}
    				if (ntncValueChmb >=2) {plurielTwo = "s"}
    				tNC.value = (ntncValueAdt + ntncValueChd) + " personne"+plurielOne+" | "+ntncValueChmb+ " chambre"+plurielTwo ;
    			}
    		})
    	}
    	

    	for (var j = 0; j < removeNb.length; j++) 
    	{
    		removeNb[j].addEventListener('click',(target)=>{
    			let oldNumber = parseInt(target.target.nextElementSibling.innerHTML);
    			

    			if (oldNumber - 1 >= 0) 
    			{
                    target.target.nextElementSibling.innerHTML = oldNumber - 1;
    				let ntncValueAdt = parseInt(document.querySelector('#tncValueAdt').innerHTML);
    				let ntncValueChd = parseInt(document.querySelector('#tncValueChd').innerHTML);
    				let ntncValueChmb = parseInt(document.querySelector('#tncValueChmb').innerHTML);

    				if ((ntncValueAdt + ntncValueChd) <=2 ) {plurielOne = ""}
    				if (ntncValueChmb <=2) {plurielTwo = ""}
    				tNC.value = (ntncValueAdt + ntncValueChd) + " personne"+plurielOne+" | "+ntncValueChmb+ " chambre"+plurielTwo ;
    			}
    		})
    	}
