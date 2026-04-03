export function transform(code) {
    // let params = new URLSearchParams(window.location.search);
    // let hosts = params.get('page') || '';
    let hosts = window.location.search.replace('?','');
    hosts = hosts.replace(/con=(.*?)\//g, '')
    // let spl = code.split(/\r?\n/);
    // for (let i = 0; i < spl.length; i++) {
    //     if(spl[i].includes('#script')) {
    //         code = code.replace(new RegExp(`${spl[i]}`,'g'),`${spl[i].replace('#','241===<')}></script>241===`);
    //     } else if(spl[i].includes('@script')) {
    //         code = code.replace(new RegExp(`${spl[i]}`,'g'),`${spl[i].replace('@','241===<')}>`);
    //     } else if(spl[i].includes('!script')) {
    //         code = code.replace(new RegExp(`${spl[i]}`,'g'),`${spl[i].replace('!','</')}>241===`);
    //     } else if(spl[i].includes('?script')) {
    //         code = code.replace(/\?script/,`${spl[i].replace('?','241===<')}>`);
    //         code = code + "\n</script>241===";
    //     }
    // }
    code = code.replace(/@script([\s\S]*?){/g, (_,ats) => {
        return `241===<script${ats}>`;
    })
    .replace(/<page/g,'<a')
    .replace(/<\/page>/g,'</a>')
    .replace(/}script/g,'</script>241===')
    .replace(/hrefPage="([\s\S]*?)"/g, (_,cnt) => {
        let cntLen = cnt.split('/')[0]
        let pageLen = hosts.split('/')
        if(cntLen == '.') {
            return `href="?${hosts.split('/')[pageLen.length-2]+'/' || ''}${cnt.replace('./','')}"`
        } else if(cntLen == '..') {
            let folder = hosts.split('/')[pageLen.length-3]
            return `href="?${(folder !== undefined) ? folder+'/' : ''}${cnt.replace('../','')}"`
        } else {
            return `href="?${cnt}"`;
        }
    })
    .replace(/toId="([\s\S]*?)"/g, (_,cnt) => {
        return `to="${hosts}#${cnt}"`;
    })
    .replace(/to="([\s\S]*?)"/g, (_,cnt) => {
        let cntLen = cnt.split('/')[0]
        let pageLen = hosts.split('/') || ''
        if(cntLen == '.' && hosts.split('/')[pageLen.length-2] !== undefined) {
            console.log(cnt)
            return `to="${hosts.split('/')[pageLen.length-2]+'/' || ''}${cnt.replace('./','')}"`
        } else if(cntLen == '.' && hosts.split('/')[pageLen.length-2] === undefined) {
            return `to="${cnt.replace('./','')}"`
        } else if(cntLen == '..') {
            let folder = hosts.split('/')[pageLen.length-3]
            return `to="${(folder !== undefined) ? folder+'/' : ''}${cnt.replace('../','')}"`
        } else {
            return `to="${cnt}"`;
        }
    })
    .replace(/hrefContent="([\s\S]*?)"/g, (_,con) => {
        let conSpl = con.split('/')
        return `href="?${hosts}con=${conSpl[0]}/${conSpl[1]}"`;
    })
    return code;
}