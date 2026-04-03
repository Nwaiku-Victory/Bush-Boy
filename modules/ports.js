import { fss } from "./fss.js";

export async function modes(codes) {
    let code = codes;
    let incs = /includein "([\s\S]*?)";/g;
    let n;
    let res;
    while ((n = incs.exec(code)) !== null) {
        let [_,src = ''] = n;
        res = await fss(src);
        if(res.text !== '' || res.text !== undefined) {
            code = code.replace(new RegExp(`includein "${src}";`,'g'), res.text) || codes;
        }
    }
    if(code.includes('includein "')) {
        return await modes(code);
    } else {
        return code;
    }
}