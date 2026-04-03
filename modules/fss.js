export async function fss(path) {
    // var params = new URLSearchParams(window.location.search);
    // var hosts = params.get('hosts') || '';
    let hosts = window.location.search.replace('?','');
    hosts = hosts.replace(/con=(.*?)\//g, '')
    let pathSpl = path.split('/');
    let fileStart = pathSpl[0];
    if(pathSpl[pathSpl.length - 1] == "" || pathSpl[pathSpl.length - 1] == undefined) {
        path = path+"index"
    }
    try {
        let cont;
        if(fileStart == '.') {
            cont = await fetch(`src/${hosts.split('/')[0]+'/' || ''}${path.replace('./','')}.sil`);
        } else if(fileStart == '..') {
            let hostsLen = hosts.split('/');
            cont = await fetch(`src/${hosts.split('/')[hostsLen.length-3] || ''}/${path.replace('../','')}.sil`);
        } else {
            cont = await fetch(`src/${path}.sil`);
        }
        let txt;
        if(!cont.ok) {
            txt = `file not found ${path}.sil`;
        } else {
            txt = await cont.text();
        }
        return {
            text: (txt !== undefined || txt !== '') ? txt : '',
            fileName: path
        };
    } catch (error) {
        console.error(error.message);
    }
}