let onClickToPrompt = () => {
    debugger;
    console.log("Do you to enter your name");
    let username = window.prompt("What is your name","guest");
    if (username == null){
        document.querySelector("p").innerHTML = "you canceled the prompt.";
    } else if(username.trim() === ""){
        document.querySelector("p").innerHTML = "you don't enter the name.";
    } else{ 
        document.querySelector("p").innerHTML = "Hello, " + username + "! Welcome.";
    }
}
addEventListener('click',onClickToPrompt);