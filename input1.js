<!DOCTYPE html>
<html>
<body>

<img id="myImg" src="compman.gif" alt="Crazy computerman" width="107" height="98">

<p>Click the button to display the alternate text of the image.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myImg").alt;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
