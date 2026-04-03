export function comms(code) {
    let sp = code.split(/\r?\n/);
    let s = [];
    let coms;
    for (let i = 0; i < sp.length; i++) {
        if(sp[i].includes('//')) {
            s.push(sp[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        code = code.replace(s[i],'');
    }
    return code;
}