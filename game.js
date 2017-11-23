var memory_array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function newBoard()
{
	
    memory_array.sort(function(a, b){return 0.5 - Math.random()});

	var theBoard = document.getElementById('memoryBoard');
	theBoard.innerHTML = "";
	
	for(var i =0; i<memory_array.length;i++)
	{
		addNewTile(theBoard,"tile_"+i,memory_array[i]);
	}
}

function addNewTile(memoryBoard,elementId,hiddenValue)
{
	var newTile = document.createElement("DIV");
	newTile.addEventListener('click',memoryFlipTile);
	newTile.setAttribute("id", elementId);
	newTile.setAttribute("hiddenValue", hiddenValue);
	memoryBoard.appendChild(newTile);
}

function memoryFlipTile(event)
{
	var tile = event.target;

	if(tile.innerHTML == "" && memory_values.length < 2)
	{
		tile.style.background = '#FFF';
		tile.innerHTML = tile.getAttribute("hiddenValue");

		memory_values.push(tile.getAttribute("hiddenValue"));
		memory_tile_ids.push(tile.id);

		console.log(memory_values);

		if((typeof(memory_values[1]) !== 'undefined') && (memory_values[0] == memory_values[1]))
		{
			tiles_flipped += 2;
			if(tiles_flipped == memory_array.length){
				alert("Congratulations!! You won");
				newBoard();
			}
		    memory_values = [];
		    memory_tile_ids = [];
		} else if(typeof(memory_values[1]) !== 'undefined'){
			function flip2Back(){
			    var tile_1 = document.getElementById(memory_tile_ids[0]);
			    var tile_2 = document.getElementById(memory_tile_ids[1]);
			    tile_1.style.background = 'none';
        	    tile_1.innerHTML = "";
			    tile_2.style.background = 'none';
        	    tile_2.innerHTML = "";
			    memory_values = [];
			    memory_tile_ids = [];
			}
			setTimeout(flip2Back, 700);
		}


	}
}

