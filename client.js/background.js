chrome.runtime.onMessage.addListener(function (request, _, __) {
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "same-origin",
      body: request.data,
    }).then((res) => {
      console.log("Request complete!");
    });
    return true;
  
});
