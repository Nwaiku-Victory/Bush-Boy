export function program(codes) {
    let code = codes;
    var cdsp = code.split('241===');
    let allsc = [];
    let type;
    let src;
    let conts;
    for (let l = 0; l < cdsp.length; l++) {
        if(cdsp[l].includes('<script')) {
            cdsp[l] = cdsp[l].replace(/<\/script>/,'');
            let sc = /<script([\s\S]*?)>/g;
            let m;
            while((m = sc.exec(cdsp[l])) !== null) {
                if(m[1].includes('type="')) {
                    type = `${/type="(.*?)"/.exec(m[1])[1]}`;
                }
                if(m[1].includes('src="')) {
                    src = `${/src="(.*?)"/.exec(m[1])[1]}`;
                }
            }
            if(cdsp[l] !== '') {
                conts = cdsp[l].replace(/<script([\s\S]*?)>/g,'');
            }
        }
    }
    allsc.push({ tag: "script", types: type || '', src: src || '', text: (conts !== undefined) ? conts.replace(undefined,'') : "" });
    return allsc;
}