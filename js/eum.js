var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var arrow = document.getElementsByClassName("material-symbols-outlined");
var subblock = document.getElementById("subblock");
arrow[0].addEventListener("click", function () {
  console.log("hiiiiiii");
  if (subblock.classList.contains("show")) {
    console.log("yes");
    subblock.classList.remove("show");
    subblock.classList.add("hide");
  } else {
    subblock.classList.remove("hide");
    subblock.classList.add("show");
  }
});
