window.onscroll = function() {
  console.log(window.scrollY);
  if (window.scrollY >= 636.3636474609375) {
    let upBtn = document.querySelector(".up");
    let skills = document.querySelectorAll(".skills");
    let text = document.querySelectorAll("._1");
    skills[1].style.width = "100%";
    skills[2].style.width = "77%";
    skills[3].style.width = "60%";
    skills[4].style.width = "44%";
    skills[5].style.width = "50%";
    skills[6].style.width = "88%";

    text[0].textContent = "100%";
    text[1].textContent = "77%";
    text[2].textContent = "60%";
    text[3].textContent = "44%";
    text[4].textContent = "50%";
    text[5].textContent = "88%";
    upBtn.style.right = "20px";
  } else {
    console.log("elsey");
    let upBtn = document.querySelector(".up");

    let skills = document.querySelectorAll(".skills");
    let text = document.querySelectorAll("._1");
    skills[1].style.width = "1%";
    skills[2].style.width = "1%";
    skills[3].style.width = "1%";
    skills[4].style.width = "1%";
    skills[5].style.width = "1%";
    skills[6].style.width = "1%";

    text[0].textContent = "1%";
    text[1].textContent = "1%";
    text[2].textContent = "1%";
    text[3].textContent = "1%";
    text[4].textContent = "1%";
    text[5].textContent = "1%";
    upBtn.style.right = "-100px";
  }
  if (window.scrollY >= 1181.818115234375) {
    document.querySelector(".pro-h2").style.left = "45%";
    let cards = document.querySelectorAll(".card");
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
  } else {
    document.querySelector(".pro-h2").style.left = "-210px";
    let cards = document.querySelectorAll(".card");
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  }
};

let upBtn = document.querySelector(".up");

upBtn.onclick = function() {
  console.log("done");
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};
