import distribute from "./modules/combine.js"
import { docs } from "./modules/fncs.js";

export const config = {
    title: "IFCAF Farms",
    icon: "./farm/IMG-20260325-WA0036.jpg",
    css: [],
    path: "src"
}

let globals = document.createElement('script');
globals.type = "";
//globals.src = `${config.path}/main.gbl`;
document.body.innerHTML = distribute.codes;
document.body.appendChild(globals);
distribute.scripts.forEach(ds => {
    var scs = document.createElement(ds.tag);
    if(ds.src !== '') scs.src = ds.src;
    if(ds.types !== '') scs.type = ds.types;
    if(ds.text !== '') scs.textContent = ds.text;
    document.body.appendChild(scs);
})
docs();