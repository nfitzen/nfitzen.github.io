function copytoClipboard(text) {
    // Create dummy element and append it
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    document.setAttribute('id','dummy-id');
    // Duplicate the given text's value
    document.getElementById('dummy-id').value = text;
    // Select the dummy area
    dummy.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(dummy)
}
