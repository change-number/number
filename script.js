javascript
function updateJSON() {
  var newText = document.getElementById("text-input").value;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      // You can add any desired actions or display a success message here
    }
  };

  xhttp.open("POST", "update-json.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("text=" + newText);
}