const pkey = '';
const getTorrentName = (link) => {
    let begin = link.indexOf('id=') + 3;
    let end = link.length - 1;
    if(link.indexOf('&http')) {
        end = link.indexOf('&http');
    }
    return link.substring(begin, end);
};
const download = (link) => {
    let filename = getTorrentName(link);
    link += '&passkey=' + pkey;
    console.log(link);
    fetch(link).then(res => res.blob().then(blob => {
        let a = document.createElement('a');
        let url = window.URL.createObjectURL(blob);
        filename += '.torrent';
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }))
}

switch(window.location.host) {
    case 'hdhome.org':
    case 'hdtime.org':
    case 'discfan.net':
    case 'pt.m-team.cc':
    case 'ourbits.club':
    case 'pt.keepfrds.com':
        jQuery('img.download').each((idx, img) => {
            let link = jQuery(img).parent('a').prop('href');
            setTimeout(() => {
                download(link)
            }, 1100 * idx);
        });
        break;

    case 'hdsky.me':
        jQuery('input.download').each((idx, input) => {
            let link = jQuery(input).parent('form').prop('action');
            setTimeout(() => {
                download(link)
            }, 1100 * idx);
        });
        break;
        default:
}
