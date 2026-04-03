function localMedia(vid) {
    navigator.getUserMedia(
        { video: {} },
        stream => vid.srcObject = stream,
        err => console.log(err)
    )
}






fetch("/read-file", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            eval(`var dt = []; ${data.content}`);
            dt.forEach(dta => {
                if(dta.text.includes(decodeURIComponent(con))) {
                    console.log(dta.text)
                    var homeC = document.createElement('div');
                    homeC.classList.add('homeContent');
                    homeC.innerText = dta.text;
                    contentBox.appendChild(homeC);
                } else {
                    //
                }
            })
        })