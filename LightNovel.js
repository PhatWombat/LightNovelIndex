
/*var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;*/

/*				
function Ookamie() {
	document.getElementById('myImage').src='Images/Hollo04.gif';
	document.getElementById('BtnHollo').style.display='none';
	document.getElementById('BtnBunnies').style.display='block';
	}
	
function Bunnies() {
	document.getElementById('myImage').src='Images/Bunnies.png';
	document.getElementById('BtnBunnies').style.display='none';
	document.getElementById('BtnHollo').style.display='block';
	}
	document.getElementById('BunnieHollo').style.display='none';
*/


function funcAccordeon0() {
	$( "#accordion" ).accordion({ heightStyle: "content", collapsible: true, active : false /*0*/});
} 


function funcAccordeonTestNormal() {
	$( "#accordion2" ).accordion({ heightStyle: "content", collapsible: true, active : false /*0*/});
} 
	
	
function randomCornerAll() {			//Function pour summon une img random dans le coin droit
	//RANDOM DROITE
	
	for(x = 0; x < 2; x++){
	
		var ChoisirBank = Math.floor(Math.random() * 2);			//choisi un index/serie
		
		if(x == 0 /*gauche*/){
			
			switch(ChoisirBank) {
				
				case 0:
					var LengthCornerAll = imgBankCornerAll.length;								//mesure la grandeur de l'index DROITE
					var AleaIndex = Math.floor(Math.random() * LengthCornerAll);
					document.getElementById("imgCornerLeft").src = imgBankCornerAll[AleaIndex];
					break;
				
				case 1:
					randomCornerLeft();
					break;
				
			}
		} else /*droit*/ {
		
			switch(ChoisirBank) {
				
				case 0:
					var LengthCornerAll = imgBankCornerAll.length;								//mesure la grandeur de l'index DROITE
					var AleaIndex = Math.floor(Math.random() * LengthCornerAll);
					document.getElementById("imgCornerRight").src = imgBankCornerAll[AleaIndex];
					break;
				
				case 1:
					randomCornerDroit();
					break;
				
			}
		}
	}
}


function randomCornerLeft() {							//change l'image de droite avec une image de la bank de droite
	//RANDOM DROITE
	var LengthCornerLeft = imgBankCornerLeft.length;								//mesure la grandeur de l'index DROITE
	var AleaIndex = Math.floor(Math.random() * LengthCornerLeft);
	document.getElementById("imgCornerLeft").src = imgBankCornerLeft[AleaIndex];
}


function randomCornerDroit() {							//change l'image de droite avec une image de la bank de droite
	//RANDOM DROITE
	var LengthCornerRight = imgBankCornerRight.length;								//mesure la grandeur de l'index DROITE
	var AleaIndex = Math.floor(Math.random() * LengthCornerRight);
	document.getElementById("imgCornerRight").src = imgBankCornerRight[AleaIndex];
}






var imgBankCornerAll =	["https://cdn.discordapp.com/attachments/652804954083426304/652805005971030016/Aqua_Dance.gif",
						"https://cdn.discordapp.com/attachments/652804954083426304/652817184325894157/Darkness_Dance02.gif",
						"https://cdn.discordapp.com/attachments/652804954083426304/652814953820192768/Megumin_Dance.gif",
						"https://cdn.discordapp.com/attachments/652804954083426304/652817567102271498/Kazuma_Dance.gif"];


var imgBankCornerRight =   ["https://cdn.discordapp.com/attachments/635375905077985284/645852617372860416/Raph_Chan.png"];


var imgBankCornerLeft = ["https://cdn.discordapp.com/attachments/635375905077985284/647309483210440726/Raph_Chan_Smoll.png",
						"https://cdn.discordapp.com/attachments/652804954083426304/656773994195976212/Emperor_Zel_500.png"];


/*---------------------------------------------------------------NSFW Bank--------------------------------------------------------------------------------------*/

function ShowBanner(){
	document.getElementById("HiddenBanner").style.display = "block"
}


function NsfwRndCornerAll() {			//Function pour summon une img random dans le coin droit
	//RANDOM DROITE
	
	for(x = 0; x < 2; x++){
	
		var ChoisirBank = Math.floor(Math.random() * 2);			//choisi un index/serie
		
		if(x == 0 /*gauche*/){
			
			switch(ChoisirBank) {
				
				case 0:
					var LengthCornerAll = NSFWimgBankCornerAll.length;								//mesure la grandeur de l'index DROITE
					var AleaIndex = Math.floor(Math.random() * LengthCornerAll);
					document.getElementById("imgCornerLeft").src = NSFWimgBankCornerAll[AleaIndex];
					break;
				
				case 1:
					NsfwRndCornerLeft();
					break;
				
			}
		} else /*droit*/ {
		
			switch(ChoisirBank) {
				
				case 0:
					var LengthCornerAll = NSFWimgBankCornerAll.length;								//mesure la grandeur de l'index DROITE
					var AleaIndex = Math.floor(Math.random() * LengthCornerAll);
					document.getElementById("imgCornerRight").src = NSFWimgBankCornerAll[AleaIndex];
					break;
				
				case 1:
					NsfwRndCornerDroit();
					break;
				
			}
		}
	}
}



function NsfwRndCornerLeft() {							//change l'image de droite avec une image de la bank de droite
	//RANDOM DROITE
	var LengthCornerLeft = NSFWimgBankCornerLeft.length;								//mesure la grandeur de l'index DROITE
	var AleaIndex = Math.floor(Math.random() * LengthCornerLeft);
	document.getElementById("imgCornerLeft").src = NSFWimgBankCornerLeft[AleaIndex];
}


function NsfwRndCornerDroit() {							//change l'image de droite avec une image de la bank de droite
	//RANDOM NSFW DROITE
	var LengthCornerRight = NSFWimgBankCornerRight.length;								//mesure la grandeur de l'index DROITE
	var AleaIndex = Math.floor(Math.random() * LengthCornerRight);
	document.getElementById("imgCornerRight").src = NSFWimgBankCornerRight[AleaIndex];
}



var NSFWimgBankCornerAll =		["https://danbooru.donmai.us/data/__aqua_kono_subarashii_sekai_ni_shukufuku_wo_drawn_by_kyuukon_qkonsan__d8a3c430e1727fbdff9f75d8729e6a11.png"];


var NSFWimgBankCornerRight = 	["https://cdn.discordapp.com/attachments/369661054042505237/417129554247811082/Aqua04.2.png"];


var NSFWimgBankCornerLeft = 	["https://cdn.discordapp.com/attachments/369661054042505237/455231345455661060/Isuzu01.2.png",
								"https://cdn.discordapp.com/attachments/668295003440939046/668397530916323341/ENNk751WkAILIt1.png"];

