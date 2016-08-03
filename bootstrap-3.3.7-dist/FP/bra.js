function BaS(){
	var BandInp = document.getElementById("BaM")
	var BandS = 0
	if (mod(BandInp%2)==0) {
		BandS = BandInp + 4;
	} else { 
		BandS = BandInp +5;	
	}
	BandS.innerHTML = str(BandS);
}

function BuS(){
	var BustInp = document.getElementById("BuM")
}