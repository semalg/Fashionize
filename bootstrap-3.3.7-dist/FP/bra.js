function BraS(){
	var BandInp = Number(document.getElementById("BaM").value);
	var BustInp = Number(document.getElementById("BuM").value);
	var BandS = 0;
	var CupS = 0;
	var mo = BandInp%2;
	if (mo==0) {
		BandS = BandInp + 0;
	} else { 
		BandS = BandInp +1;	
	}
	if ((BandInp<=25) || (BandInp>= 53))
		BandS = "?";

	if ((BustInp-BandInp)==7){
		CupS = "G";
	} else if ((BustInp-BandInp)==6){
		CupS = "F";
	} else if ((BustInp-BandInp)==5) {
		CupS = "DD";
	} else if ((BustInp-BandInp)==4) {
		CupS = "D";
	} else if ((BustInp-BandInp)==3) {
		CupS = "C";
	} else if ((BustInp-BandInp)==2) {
		CupS = "B";
	} else if ((BustInp-BandInp)==1) {
		CupS = "A";
	} else if ((BustInp-BandInp)==0) {
		CupS = "AA";
	} else {
		CupS= "?";
	}
	
	document.getElementById("Answer").innerHTML = "" +BandS + CupS;
}

