export function tgs(code) {
    code = code.replace(/<screen/g,'<div style="width:100vw;height:100vh;"').replace(/<\/screen>/g,'</div>')
    .replace(/<switch([\s\S]*?)>/g, (full,content = "") => {
        return `<div data-switch="switcher" style="width: 25px;height: 5px;border-radius: 40px;background:lightgrey;display: flex;justify-content: left;align-items: center;" ${content}><div style="width: 18px;height: 18px;background: white;border-radius: 50px;"></div></div>`
    })
    .replace(/<direct([\s\S]*?)>/g, (_,content = '') => {
        if(content.includes('to=') && content.includes('icon=') && content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /><p style="width:100%;text-align:center;word-wrap:normal;">${/text="([\s\S]*?)"/.exec(content)[1]}</p></a>`;
        } else if(!content.includes('to=') && content.includes('icon=') && content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /><p style="width:100%;text-align:center;word-wrap:normal;">${/text="([\s\S]*?)"/.exec(content)[1]}</p></nav>`;
        } else if(!content.includes('to=') && !content.includes('icon=') && content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><p style="width:100%;text-align:center;word-wrap:normal;">${/text="([\s\S]*?)"/.exec(content)[1]}</p></nav>`;
        } else if(!content.includes('to=') && content.includes('icon=') && !content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /></nav>`;
        } else if(content.includes('to=') && !content.includes('icon=') && !content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}></a>`;
        } else if(content.includes('to=') && content.includes('icon=') && !content.includes('text=')) {
            return `<a style="text-decoration:none" href="${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /></a>`;
        } else if(content.includes('to=') && !content.includes('icon=') && content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><p style="width:100%;text-align:center;word-wrap:normal;">${/text="([\s\S]*?)"/.exec(content)[1]}</p></a>`;
        } else {
            return `<nav${content.replace(/to="(.*?)"/,'').replace(/id="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/iconClass="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><nav>`;
        }
    })
    .replace(/<ListIcon([\s\S]*?)>/g, (_,content = '') => {
        if(content.includes('to=') && content.includes('icon=') && content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/iconClass="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /><p>${/text="([\s\S]*?)"/.exec(content)[1]}</p></a>`;
        } else if(!content.includes('to=') && content.includes('icon=') && content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/iconClass="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /><p>${/text="([\s\S]*?)"/.exec(content)[1]}</p></nav>`;
        } else if(!content.includes('to=') && !content.includes('icon=') && content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><p>${/text="([\s\S]*?)"/.exec(content)[1]}</p></nav>`;
        } else if(!content.includes('to=') && content.includes('icon=') && !content.includes('text=')) {
            return `<nav ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/iconClass="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /></nav>`;
        } else if(content.includes('to=') && !content.includes('icon=') && !content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}></a>`;
        } else if(content.includes('to=') && content.includes('icon=') && !content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/iconClass="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><img src="${/icon="([\s\S]*?)"/.exec(content)[1]}" class="${(content.includes('iconClass="')) ? /iconClass="([\s\S]*?)"/.exec(content)[1] : ''}" /></a>`;
        } else if(content.includes('to=') && !content.includes('icon=') && content.includes('text=')) {
            return `<a style="text-decoration:none" href="?${/to="([\s\S]*?)"/.exec(content)[1]}" ${content.replace(/to="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><p>${/text="([\s\S]*?)"/.exec(content)[1]}</p></a>`;
        } else {
            return `<nav${content.replace(/to="(.*?)"/,'').content.replace(/id="(.*?)"/,'').replace(/icon="(.*?)"/,'').replace(/text="(.*?)"/,'').replace(/\//,'')}><nav>`;
        }
    })
    .replace(/<vid ([\s\S]*?)>/, (_,attrs) => {
        return `
        <div data-autoplay="autoplay" data-video="videos" style="min-width:250px;max-width:100%;position:relative;display:flex;flex-direction:column;background:black;" class="${(attrs.includes('class="')) ? /class="([\s\S]*?)"/.exec(attrs)[1] : ''}">
            <video data-vds="vid" src="${(attrs.includes('src="')) ? /src="([\s\S]*?)"/.exec(attrs)[1] : ''}" id="${(attrs.includes('id="')) ? /id="([\s\S]*?)"/.exec(attrs)[1] : ''}" autoplay="${(attrs.includes('autoplay="')) ? /autoplay="([\s\S]*?)"/.exec(attrs)[1] : ''}" playsinline="${(attrs.includes('playsinline="')) ? /playsinline="([\s\S]*?)"/.exec(attrs)[1] : ''}" style="width:100%;height:100%;flex:1;"></video>
            <div style="width:100%;height:100%;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:flex-end;flex-wrap:wrap;">
                <div data-ctr="controler" style="width:100%;height:40px;display:flex;justify-content:center;align-items:center;">
                    <div style="width:100%;padding:10px;position:relative;background:rgba(0,0,0,70%);display:flex;justify-content:space-between;align-items:center;gap:10px">
                        <img data-play="" style="height:18px">
                        <input data-seek="seek" value="0" min="0" type="range" style="height:3px;flex:1;">
                        <img data-vol="" style="height:16px">
                        <img data-tdot="" style="height:16px">
                        <ul data-list="lists" style="position:absolute;display:none;bottom:35px;right:10px;background:white;color:black;font-size:11px;list-style:none;box-shadow:0 0 5px grey;cursor:pointer;">
                            <li data-vol="" data-hover="hover" style="width:100%;padding:5px 10px;font-weight:bold;">mute</li>
                            <li data-hover="hover" style="width:100%;padding:5px 10px;font-weight:bold;">download</li>
                            <li data-hover="hover" style="width:100%;padding:5px 10px;font-weight:bold;">picture in picture</li>
                            <li data-full="" data-hover="hover" style="width:100%;padding:5px 10px;font-weight:bold;">full screen</li>
                            <li data-hover="hover" style="width:100%;padding:5px 10px;font-weight:bold;">playback speed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
        
    })
    
    let ref = /<([\s\S]*?)>/g;
    let m;
    while ((m = ref.exec(code)) !== null) {
        let [_, atts = ''] = m;
        let atr = atts.replace(/ref="([\s\S]*?)"/g, (_, link) => {
            return `href="?${link}"`;
        });
        code = code.replace(new RegExp(`<${atts}>`), `<${atr}>`);
    }
    return code;
}