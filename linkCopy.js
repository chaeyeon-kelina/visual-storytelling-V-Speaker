function clip(){

    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL 복사")
}

function shareTwitter() {
    window.open("http://twitter.com/share?url=" + encodeURIComponent(location.href) +"&text=" + document.title);
}
