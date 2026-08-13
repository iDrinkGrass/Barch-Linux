         function updateTime() {

          var currentTime = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = currentTime;

         }
         setInterval(updateTime,1000);

dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
} 

function handleIconTap(element) {
   if (element.classList.contains("selected")) {
     deselectIcon(element);
    closeWindow(document.getElementById("terminal"))
    document.querySelector("#terminalInnerBody").innerHTML=``
   } else {
    selectIcon(element);
    openWindow(document.getElementById("terminal"))
    document.querySelector("input").focus()
   }

}
dragElement(document.getElementById("terminal"));

closeWindow(document.getElementById('terminal'))
document.getElementById('terminalclose').addEventListener("click",()=>{
  closeWindow(document.getElementById('terminal'))
   deselectIcon(document.getElementById("terminalAppIcon"));
   document.querySelector("#terminalInnerBody").innerHTML=``
})

document.querySelector("input").addEventListener("keyup",(e)=>{
  if(e.key == "Enter"){
    let newLine = document.createElement("br")
    document.querySelector("#terminalInnerBody").appendChild(newLine)
    let newElement = document.createElement("span")
    newElement.innerHTML= "Linux Linux Linux (im to lazy to actually make the terminal do stuff)"
    document.querySelector("#terminalInnerBody").appendChild(newElement)
  }})

 let links = document.getElementById("links")
  var linksClose = document.querySelector("#linksclose")

linksClose.addEventListener("click", function() {
  closeWindow(links);
});


dragElement(document.getElementById("links"));

function handleIconLinksTap(element) {
   if (element.classList.contains("selected")) {
     deselectIcon(element);
    closeWindow(document.getElementById("links"))
    document.querySelector("#linksInnerBody").innerHTML=``
   } else {
    selectIcon(element);
    openWindow(document.getElementById("links"))
    document.querySelector("input").focus()
   }

}
closeWindow(links);