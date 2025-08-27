
// .......... Reuseable function .........
function getId(id) {
    const idName = document.getElementById(id)
    return idName

}
function getClass(className) {
    const cName = document.getElementsByClassName(className)
    return cName
}

// .............. heart button click even -------------
let countHeartClick = 0;
let toggole = true;
getId("heart-btn").addEventListener("click", function (e) {
    e.preventDefault()
    getId("heart-btn").classList.toggle("text-red-500")
    if (toggole) {
        countHeartClick++
    } else {
        countHeartClick--
    }
    toggole = !toggole;
    document.getElementById("total-heart").innerText = `${countHeartClick}`
    console.log("Heart Button clicked")
})

// ...............  call button even handaling .......................
const callButtons = getClass("call-btn");
for (const callButoon of callButtons) {
    callButoon.addEventListener("click", function () {
        // alert("Call Button Cliked");
        const cardTitle = callButoon.parentNode.parentNode.children[1].children[0].innerText
        const callNumber = callButoon.parentNode.parentNode.children[1].children[2].innerText
        const historyContainer = getId("history-container");
        const newHistory =document.createElement("div");
        newHistory.innerHTML = `
        <div class="history-card bg-gray-100 my-2 p-4 flex justify-between items-center rounded-lg">
                    <div>
                        <h1 class=" text-md font-semibold ">${cardTitle}</h1>
                        <p class="text-sm text-gray-500">${callNumber}</p>
                    </div>
                    <h1 class="text-md text-gray-500">${new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true })}</h1>
                </div>
        `
        historyContainer.appendChild(newHistory)
        // console.log(cardTitle, callNumber,historyContainer)
    })
}

// ..............clear button event handaling ......................
getId("clear-btn").addEventListener("click",function(){
      getId("history-container").innerHTML="";
})