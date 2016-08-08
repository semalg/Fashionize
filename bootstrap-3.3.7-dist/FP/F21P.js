function F21PantsCon() {
			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			if (w==24) {
				Wval = 0;
			}
			else if (w==25) {
				Wval = 1;
			}
			else if (w==26) {
				Wval = 2;
			}
			else if (w==27) {
				Wval = 3;
			}
			else if (w==28) {
				Wval = 4;
			}
			else if (w==29) {
				Wval = 5;
			}
			else if (w==30) {
				Wval = 6;
			}
			else if (w==31) {
				Wval = 7;
			}
			if (h==32) {
				Hval = 0;
			}
			else if (h==33) {
				Hval = 1;
			}
			else if (h==34) {
				Hval = 2;
			}
			else if (h==35) {
				Hval = 3;
			}
			else if (h==36) {
				Hval = 4;
			}
			else if (h==37) {
				Hval = 5;
			}
			else if (h==38) {
				Hval = 6;
			}
			else if (h==39) {
				Hval = 7;
			}
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var Forever21Size = "";
			if (roundedAvg == 0) {
				Forever21Size = "24"
			}
			else if (roundedAvg == 1) {
				Forever21Size = "25"
			}
			else if (roundedAvg == 2) {
				Forever21Size = "26"
			}
			else if (roundedAvg == 3) {
				Forever21Size = "27"
			}
			else if (roundedAvg == 4) {
				Forever21Size = "28"
			}
			else if (roundedAvg == 5) {
				Forever21Size = "29"
			}
			else if (roundedAvg == 6) {
				Forever21Size = "30"	
			}
			else if (roundedAvg == 7) {
				Forever21Size = "31"	
			}
			else {
				Forever21Size = "error"
			}
			console.log(Forever21Size)
			document.getElementById("FSP").innerHTML = Forever21Size;
		}