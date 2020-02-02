var download = (link) => { 
var filename = link.substring(link.indexOf('id=') + 3, link.indexOf('&http'))
link += '&passkey=passkey';
fetch(link).then(res => res.blob().then(blob => {
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    filename += '.torrent';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}))
 }

jQuery('img.download').each((idx, img)=> { var link = jQuery(img).parent('a').prop('href'); download(link)});
