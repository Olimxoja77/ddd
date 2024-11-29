let sendBtn = document.getElementById("send");
      let toggleBtn = document.getElementById("toggle");
      let ol = document.querySelector("ol");

      sendBtn.addEventListener("click", () => {
        let inp = document.querySelector("input").value;
        if (inp === "") {
          alert("Siz hali text yozmadingiz");
        } else {
          let li = document.createElement("li");
          li.innerHTML = inp;
          ol.appendChild(li);
        }
        document.querySelector("input").value = "";
      });

      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("night");
      });