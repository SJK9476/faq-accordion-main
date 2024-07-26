const revealQuestion = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

revealQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("visually-hidden");

    if (question.children[1].src.includes("icon-plus")) {
      question.children[1].src = "./assets/images/icon-minus.svg";
    } else {
      question.children[1].src = "./assets/images/icon-plus.svg";
    }
  });
});
