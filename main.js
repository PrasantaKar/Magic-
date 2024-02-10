document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let questionInput = document.getElementById("input").value;
  let response = getResponse(questionInput);
  document.getElementById("output").innerHTML = response;
}

function getResponse(question) {
  let response;

  if (question.trim() === "") {
    response = "Please ask a question...";
  } else if (question === "Does a magic 8 ball actually work?") {
    response = "How dare you doubt me!";
  } else if (question === "Is JavaScript awesome?") {
    response = "Of Course!";
  } else {
    response = randomResponse();
  }

  return response;
}

function randomResponse() {
  let response;

  let randomIndex = Math.floor(Math.random() * 5) + 1;

  if (randomIndex === 1) {
    response = "Without a Doubt.";
  } else if (randomIndex === 2) {
    response = "As I see it, yes.";
  } else if (randomIndex === 3) {
    response = "Concentrate and ask again.";
  } else if (randomIndex === 4) {
    response = "Don't count on it.";
  } else {
    response = "Outlook not so good.";
  }

  return response;
}
