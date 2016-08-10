function Sh() {
			var ft = document.getElementById("footLength").value;
			console.log(ft)
			var us = 0;
			var uk = 0;
			var eur = 0;
			if (ft >= 8.2 && ft <= 8.3) {
				us = 4;
				uk = 2;
				eur = 35;
			} else if (ft == 8.4) {
				us = 4.5;
				uk = 2.5;
				eur = 35;
			} else if (ft == 8.5) {
				us = 5;
				uk = 3;
				eur = "35 to 36";
			} else if ( ft >= 8.6 && ft <= 8.8) {
				us = 5.5;
				uk = 3.5;
				eur = 36;
			} else if (ft == 8.9) {
				us = 6;
				uk = 4;
				eur = "36 to 37";
			} else if (ft>=9.0 && ft <= 9.1) {
				us = 6.5;
				uk = 4.5;
				eur = 37;
			} else if (ft >= 9.2 && ft <= 9.3) {
				us = 7;
				uk = 5;
				eur = "37 to 38";
			} else if (ft == 9.4) {
				us = 7.5;
				uk = 5.5;
				eur = 38;
			} else if (ft == 9.5) {
				us = 8;
				uk = 6;
				eur = "38 to 39";
			} else if (ft >= 9.6 && ft <= 9.7) {
				us = 8.5;
				uk = 6.5;
				eur = 39;
			} else if (ft >= 9.8 && ft <= 9.9) {
				us = 9;
				uk = 7;
				eur = "39 to 40";
			} else if (ft == 10.0) {
				us = 9.5;
				uk = 7.5;
				eur = 40;
			} else if (ft>= 10.1 && ft <= 10.2) {
				us = 10;
				uk = 8;
				eur = "40 to 41";
			} else if (ft == 10.3) {
				us = 10.5;
				uk = 8.5;
				eur = 41;
			} else if (ft >= 10.4 && ft <= 10.5) {
				us = 11;
				uk = 9;
				eur = "41 to 42";
			} else if (ft >= 10.6 && ft <= 10.8) {
				us = 11.5;
				uk = 9.5;
				eur = 42;
			} else if (ft == 10.9) {
				us = 12;
				uk = 10;
				eur = "42 to 43";
			} 
			console.log(us);
			console.log(uk);
			console.log(eur);
			document.getElementById("USS").innerHTML = us;
			document.getElementById("UKS").innerHTML = uk;
			document.getElementById("EUS").innerHTML = eur;
		}