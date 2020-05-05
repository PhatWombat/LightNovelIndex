
var imgBankCornerAll =	["https://cdn.discordapp.com/attachments/652804954083426304/652805005971030016/Aqua_Dance.gif",
			"https://cdn.discordapp.com/attachments/652804954083426304/652817184325894157/Darkness_Dance02.gif",
			"https://cdn.discordapp.com/attachments/652804954083426304/652814953820192768/Megumin_Dance.gif",
			"https://cdn.discordapp.com/attachments/652804954083426304/652817567102271498/Kazuma_Dance.gif",
			"https://media.discordapp.net/attachments/652804954083426304/675916313910312989/Yume01.1.png",
			"https://cdn.discordapp.com/attachments/652804954083426304/677319906546548780/Sento01.1.png",
			"https://cdn.discordapp.com/attachments/652804954083426304/677328962535555084/Holo01.png"];


var imgBankCornerRight =   ["https://cdn.discordapp.com/attachments/635375905077985284/645852617372860416/Raph_Chan.png",
			   "https://cdn.discordapp.com/attachments/652804954083426304/675907868628746250/Chomusuke_Quartet.png",
			   "https://cdn.discordapp.com/attachments/652804954083426304/675966894561427456/Yume02.3.png",
			   "https://cdn.discordapp.com/attachments/652804954083426304/677333977207406592/Holo02.1.png"];


var imgBankCornerLeft = ["https://cdn.discordapp.com/attachments/635375905077985284/647309483210440726/Raph_Chan_Smoll.png",
			"https://cdn.discordapp.com/attachments/652804954083426304/656773994195976212/Emperor_Zel_500.png",
			"https://cdn.discordapp.com/attachments/652804954083426304/677321778187730944/Chomusuke01.1.png",
			"https://cdn.discordapp.com/attachments/652804954083426304/677325052563423264/GS1.png"];


var novelDisplay = 0;

function testmebitch() {
	var varNovel = document.getElementsByClassName("Novel");
	
	if(novelDisplay == 1){
		document.getElementById(varNovel).style.display="none";
		novelDisplay = 0;
	} else {
		document.getElementById(varNovel).style.display="block";
		novelDisplay = 1;
	}
}

function funcAccordeon0() {
	$( "#accordion" ).accordion({ heightStyle: "content", collapsible: true, active : false; /*0*/});
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




/*---------------------------------------------------------------NSFW Bank--------------------------------------------------------------------------------------*/

function ShowBanner(){
	document.getElementById("HiddenBanner").style.display = "block"
	var AquaThumbsUp = "https://cdn.discordapp.com/attachments/668295003440939046/668409911742562314/AquaThumb02.png";
	document.getElementById("imgCornerRight").src = AquaThumbsUp;
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



var NSFWimgBankCornerAll =	["https://danbooru.donmai.us/data/__aqua_kono_subarashii_sekai_ni_shukufuku_wo_drawn_by_kyuukon_qkonsan__d8a3c430e1727fbdff9f75d8729e6a11.png",
				"https://cdn.discordapp.com/attachments/369661054042505237/413186654304469002/Darkness02.2.png",
				"https://cdn.discordapp.com/attachments/369661054042505237/455233980162113557/Isuzu02.2.png"];


var NSFWimgBankCornerRight = 	["https://cdn.discordapp.com/attachments/369661054042505237/417129554247811082/Aqua04.2.png",
				"https://cdn.discordapp.com/attachments/369661054042505237/415724320413974538/Aqua01.2.png",
				"https://cdn.discordapp.com/attachments/369661054042505237/455237151542607882/Isuzu03.2.png"];


var NSFWimgBankCornerLeft = 	["https://cdn.discordapp.com/attachments/369661054042505237/455231345455661060/Isuzu01.2.png",
				"https://cdn.discordapp.com/attachments/668295003440939046/699124794334904364/Aqua05.2.png"];
