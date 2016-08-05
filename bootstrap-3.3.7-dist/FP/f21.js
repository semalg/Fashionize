function F21Con() {
      var w = document.getElementById("waistsize").value;
      var h = document.getElementById("hipsize").value;
      var b = document.getElementById("bustsize").value;
      var Wval = 0;
      var Hval = 0;
      var Bval = 0;
      var f21Bfit = "";
      var f21Wfit = "";
      var f21Hfit = "";
      if (w>=24 && w<=25) {
        Wval = 0
      }
      else if (w>=26 && w<=27) {
        Wval = 1
      }
      else if (w>=28 && w<=29) {
        Wval = 2
      }
      else if (w>=30 && w<=31) {
        Wval = 3
      }
      else if (w>=32 && w<=33) {
        Wval = 4
      }
      
      if (h>=33 && h<=34) {
        Hval = 0
      }
      else if (h>=35 && h<=36) {
        Hval = 1
      }
      else if (h>=37 && h<=40) {
        Hval = 2
      }
      else if (h>=42 && h<=44) {
        Hval = 3
      }
      else if (h>=45 && h<=47) {
        Hval = 4
      }
      
      if (b>=32 && b<=33) {
        Bval = 0
      }
      else if (b>=34 && b<= 35) {
        Bval = 1
      }
      else if (b>=36 && b<=37) {
        Bval = 2
      }
      else if (b>=38 && b<=39) {
        Bval = 3
      }
      else if (b>=40 && b<=45) {
        Bval = 4
      }
      
      sum = Bval + Hval + Wval
      quotient = sum/3
      roundedAvg = Math.round(quotient)
      var FSize = "";
      if (roundedAvg == 0) {
        FSize = "X-Small"
      }
      if (roundedAvg == 1) {
        FSize = "Small"
      }
      if (roundedAvg == 2) {
        FSize = "Medium"
      }
      if (roundedAvg == 3) {
        FSize = "Large"
      }
      if (roundedAvg == 4) {
        FSize = "X-Large"  
      }
      if (Bval == roundedAvg){
        Bfit = "10"
      }
      else if ((Bval == roundedAvg+1) || (Bval == roundedAvg-1)){
        Bfit = "8"
      }
      else if ((Bval == roundedAvg+2) || (Bval == roundedAvg-2)){
        Bfit = "6"
      }
      else if ((Bval == roundedAvg+3) || (Bval == roundedAvg-3)){
        Bfit = "4"
      }
      else{
        Bfit = "2"
      }
      if (Wval == roundedAvg){
        Wfit = "10"
      }
      else if ((Wval == roundedAvg+1) || (Wval == roundedAvg-1)){
        Wfit = "8"
      }
      else if ((Wval == roundedAvg+2) || (Wval == roundedAvg-2)){
        Wfit = "6"
      }
      else if ((Wval == roundedAvg+3) || (Wval == roundedAvg-3)){
        Wfit = "4"
      }
      else{
        Wfit = "2"
      }
      if (Hval == roundedAvg){
        Hfit = "10"
      }
      else if ((Hval == roundedAvg+1) || (Hval == roundedAvg-1)){
        Hfit = "8"
      }
      else if ((Hval == roundedAvg+2) || (Hval == roundedAvg-2)){
        Hfit = "6"
      }
      else if ((Hval == roundedAvg+3) || (Hval == roundedAvg-3)){
        Hfit = "4"
      }
      else{
        Hfit = "2"
      }
      console.log(FSize)
      document.getElementById("FS").innerHTML = FSize;
      document.getElementbyId("f21Bfit").innerHTML = Bfit;
      document.getElementbyId("f21Wfit").innerHTML = Wfit;
      document.getElementbyId("f21Hfit").innerHTML = Hfit;
      // add the last three items to the HTML file whenever we do the table/chart thing
      // we will probably need to change the variables to something else so they don't get confused with the other brands
    }
 