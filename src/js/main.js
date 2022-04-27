var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByTagName("button");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

btn.addEventListener("click", function openModal() {
  console.log("element clicked");
});
