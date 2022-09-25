const copyEmail = () => {
  navigator.clipboard.writeText("devin.zy36@gmail.com")
  alert("Email copied!", "success")
}

const copyPhoneNumber = () => {
  navigator.clipboard.writeText("4159809752")
  alert("Phone number copied!", "success")
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder")

const alert = (message, type) => {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("")

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById("liveAlertBtn")
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Nice, you triggered this alert message!", "success")
  })
}
