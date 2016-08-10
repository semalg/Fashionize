function HMPantsCon() {

			var w = document.getElementById("waistsizep").value;
			var h = document.getElementById("hipsizep").value;
			var Wval = 0;
			var Hval = 0;
			if (w>=23 && w<=25) {
				Wval = 0;
			}
			else if (w>25 && w<=26) {
				Wval = 1;
			}

			else if (w>26 && w<=27) {
				Wval = 2;
			}
			else if (w>27 && w<=28) {
				Wval = 3;
			}
			else if (w>28 && w<=29) {
				Wval = 4;
			}
			else if (w>29 && w<=30) {
				Wval = 5;
			}
			else if (w>30 && w<=35) {
				Wval = 6;
			}
			if (h>=33 && h<=35) {
				Hval = 0;
			}
			else if (h>35 && h<=36) {
				Hval = 1;
			}
			else if (h>36 && h<=37) {
				Hval = 2;
			}
			else if (h>37 && h<=38) {
				Hval = 3;
			}
			else if (h>38 && h<=39) {
				Hval = 4;
			}
			else if (h>39 && h<=40) {
				Hval = 5;
			}
			else if (h>40 && h<=44) {
				Hval = 6;
			}
			sum = Hval + Wval
			quotient = sum/2
			roundedAvg = Math.round(quotient)
			var HMSize = "";
			if (roundedAvg == 0) {
				HMSize = "0"
			}
			else if (roundedAvg == 1) {
				HMSize = "2"
			}
			else if (roundedAvg == 2) {
				HMSize = "4"
			}
			else if (roundedAvg == 3) {
				HMSize = "6"
			}
			else if (roundedAvg == 4) {
				HMSize = "8"
			}
			else if (roundedAvg == 5) {
				HMSize = "10"
			}
			else if (roundedAvg == 6) {
				HMSize = "12"	
			}
			else {
				Forever21Size = "error"
			}
			console.log(HMSize)
			document.getElementById("HMSP").innerHTML = HMSize;
		}