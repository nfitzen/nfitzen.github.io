function copytoClipboard(id) {
    var copyTextArea = document.querySelector("#" + id)
    copyTextArea.focus();
    copyTextArea.select();
    
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}