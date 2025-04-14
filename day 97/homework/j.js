// getElementById Example
function changeTitle() {
    const title = document.getElementById("mainTitle");
    title.textContent = "Title Changed!";
    title.style.color = "blue";
  }
  
  // getElementsByClassName Example
  function highlightMessages() {
    const messages = document.getElementsByClassName("message");
    for (let i = 0; i < messages.length; i++) {
      messages[i].classList.add("highlight");
    }
  }
  