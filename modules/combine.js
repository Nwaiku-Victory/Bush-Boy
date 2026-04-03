import { config } from "../config.js";
import { position } from "./carrier.js";
import { comms } from "./comments.js";
import { rid } from "./compile.js";
import { fss } from "./fss.js";
import { program } from "./pgm.js";
import { modes } from "./ports.js";
import { rvescr } from "./removeSCR.js";
import { tgs } from "./tags.js";
import { transform } from "./translate.js";

// let params = new URLSearchParams(window.location.search);
// let hosts = params.get("hosts") || "index.sil";
let hosts = window.location.search || 'index';
hosts = hosts.replace(/con=(.*?)\//g, '')

var raw = await fss(hosts.replace('?',''));
var mds = await modes(raw.text);
var psn = position(mds);
var trans = transform(psn);
var scrHide = rvescr(trans,program(trans).text)
var com2 = comms(scrHide);
var tg = tgs(com2);
var final = rid(tg);
let allscripts = program(trans)

let distribute = {
    codes: final,
    scripts: allscripts
}

export default distribute;