function darkMode(){}
function showBlogEntries(){
    alert("loading");
    const thisweb = document.getElementById('blogbody');
    thisweb.innerHTML="Loading";
    try{
        alert("testing...");
        const data = await fetch("https://sulca2099.github.io/Webpageprofesional/blog/entries.json");
        const jsondata = (await data.json).link;
        thisweb.innerHTML="";
        for(const i of jsondata.link){
            thisweb.innerHTML+=`<div class="blogelement"><div class="largededication">${(await (await fetch(i)).json).title}</div>${(await (await fetch(i)).json).description}<br>{${(await (await fetch(i)).json).date}}<div></div>`;
        }
    }
    catch{
        alert("fail");
    }
}
function makeWebBlog(){}
function test(){
    alert("laoaded...");
}
