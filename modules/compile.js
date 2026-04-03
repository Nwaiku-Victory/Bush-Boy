export function rid(code) {
    code = code.replace(/<script([\s\S]*?)>([\s\S]*?)<\/script>/g,'')
    .replace(/set ([\s\S]*?) = ([\s\S]*?);/g,'')
    .replace(/241===/g,'')
    return code;
}