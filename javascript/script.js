function findGym() {
  let name = prompt("What is your name?");
  let city = prompt("Which city do you live in?");
  if (name === "" && city === "") {
    alert(
      `No need to answer, anyway. This is just a showcase button, with no real function. 🤷‍♀️`
    );
  } else {
    if (name === "") {
      alert(
        `Great that you are interested! Unfortunately, I cannot tell you if there is a boulder gym in ${city}. Maybe ask Google. 😉`
      );
    } else {
      if (city === "") {
        alert(
          `Great that you are interested, ${name}! However, if you don't tell me where you live, I cannot tell you if there is a boulder gym in your city. 👎`
        );
      } else {
        alert(
          `Great that you are interested, ${name}! Unfortunately, I cannot tell you if there is a boulder gym in ${city}. Maybe ask Google. 😉`
        );
      }
    }
  }
}

let buttonFindGym = document.querySelector("button");
buttonFindGym.addEventListener("click", findGym);
