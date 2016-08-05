function UOCon() {
			var w = document.getElementById("waistsize").value;
			var h = document.getElementById("hipsize").value;
			var b = document.getElementById("bustsize").value;
			var Wval = 0;
			var Hval = 0;
			var Bval = 0;
			var UOBfit = "";
			var UOWfit = "";
			var UOHfit = "";
			if (w>=24 && w<=26) {
				Wval = 0;
			}
			else if (w>26 && w<=28) {
				Wval = 1;
			}
			else if (w>28 && w<=30) {
				Wval = 2;
			}
			else if (w>30 && w<=34) {
				Wval = 3;
			}
		

			if (h>=34 && h<=36) {
				Hval = 0;
			}
			else if (h>36 && h<=38) {
				Hval = 1;
			}
			else if (h>38 && h<=40) {
				Hval = 2;
			}
			else if (h>40 && h<=43) {
				Hval = 3;
			}
			
			if (b>=32 && b<=34) {
				Bval = 0;
			}
			else if (b>34 && b<= 36) {
				Bval = 1;
			}
			else if (b>36 && b<=38) {
				Bval = 2;
			}
			else if (b>38 && b<=40) {
				Bval = 3;
			}
			
			sum = Bval + Hval + Wval
			quotient = sum/3
			roundedAvg = Math.round(quotient)
			var UOSize = "";
			if (roundedAvg == 0) {
				UOSize = "X-Small"
			}
			if (roundedAvg == 1) {
				UOSize = "Small"
			}
			if (roundedAvg == 2) {
				UOSize = "Medium"
			}
			if (roundedAvg == 3) {
				UOSize = "Large"
			}
			if (Bval == roundedAvg){
				Bfit = "10"
			}
			else if (Bval == roundedAvg+1) || (Bval == roundedAvg-1){
				Bfit = "8"
			}
			else if (Bval == roundedAvg+2) || (Bval == roundedAvg-2){
				Bfit = "6"
			}
			else if (Bval == roundedAvg+3) || (Bval == roundedAvg-3){
				Bfit = "4"
			}
			else{
				Bfit = "2"
			}
			if (Wval == roundedAvg){
				Wfit = "10"
			}
			else if (Wval == roundedAvg+1) || (Wval == roundedAvg-1){
				Wfit = "8"
			}
			else if (Wval == roundedAvg+2) || (Wval == roundedAvg-2){
				Wfit = "6"
			}
			else if (Wval == roundedAvg+3) || (Wval == roundedAvg-3){
				Wfit = "4"
			}
			else{
				Wfit = "2"
			}
			if (Hval == roundedAvg){
				Hfit = "10"
			}
			else if (Hval == roundedAvg+1) || (Hval == roundedAvg-1){
				Hfit = "8"
			}
			else if (Hval == roundedAvg+2) || (Hval == roundedAvg-2){
				Hfit = "6"
			}
			else if (Hval == roundedAvg+3) || (Hval == roundedAvg-3){
				Hfit = "4"
			}
			else{
				Hfit = "2"
			}
			console.log(UOSize)
			document.getElementById("UOS").innerHTML = UOSize;
			document.getElementbyId("UOBfit").innerHTML = Bfit;
			document.getElementbyId("UOWfit").innerHTML = Wfit;
			document.getElementbyId("UOHfit").innerHTML = Hfit;
			// add the last three items to the HTML file whenever we do the table/chart thing//
		}