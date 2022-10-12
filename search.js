const userSearch = document.getElementById("searchinp");
const fruitContainer = document.querySelectorAll(".fruits");
const fruitNames = document.getElementsByTagName("h4");

userSearch.addEventListener("input", () => {
  for (let i = 0; i < fruitNames.length; i++) {
    let savedFruitName = fruitContainer[i].getElementsByTagName("h4")[0];

    let fruitName = savedFruitName.textContent;

    if (fruitName.toLowerCase().indexOf(userSearch.value.toLowerCase()) > -1) {
      fruitContainer[i].style.display = "";
    } else {
      fruitContainer[i].style.display = "none";
    }
  }
});
