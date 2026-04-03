export function variables(code,file) {
    let ln = code.split(/\r?\n/);
    let variables = /set ([\s\S]*?) = ([\s\S]*?);/g;
    let m;
    let n = [];
    while((m = variables.exec(code)) !== null) {
        let [_,vn,vl] = m;
        if (!vn) {
            for (let e = 0; e < ln.length; e++) {
                if(ln[e].includes(`= ${vl}`)) {
                    console.error(`no variable name assigned: "${vl}" in ${file} at line ${e+1}`);
                }
            }
        } else if (!vl) {
            for (let e = 0; e < ln.length; e++) {
                if(ln[e].includes(`${vn} =`)) {
                    console.error(`no value attached to the variable: "${vn}" in ${file} at line ${e+1}`);
                }
            }
        } else {
            n.push({ name: vn, value: vl});
        }
    }
    for (let i = 0; i < n.length; i++) {
        return `set ${n[i].name} = ${n[i].value};`;
    }
}