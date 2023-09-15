// To summarize YouTube videos
const btn = document.getElementById("summarize");

btn.addEventListener("click", ()=>{
    btn.disabled = true;
    btn.innerHTML = "Summarizing ... ";
    
    chrome.tabs.query({currentWindow : true , active : true} , (tabs) => {
        var url = tabs[0].url;
        var httpReq = new XMLHttpRequest();

        httpReq.open("GET" , `http://127.0.0.1:5000/summary?url=${url}`, true);

        httpReq.onload = () => {
            var text = httpReq.responseText;
            var summary = document.getElementById("summary");
            summary.innerHTML = text;
            btn.disabled = false;
            btn.innerHTML = "Summarize";
        }

        httpReq.send();
    });
});
