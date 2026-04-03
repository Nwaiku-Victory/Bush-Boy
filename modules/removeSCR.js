export function rvescr(code,replacer) {
    code = code.replace(/241===<script>([\s\S]*?)<\/script>241===/g,'')
    return code;
}