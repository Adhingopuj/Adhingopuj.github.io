// Loads the handbook from content/chapters.json and the .md files in content/handbook/.
// You normally never need to edit this file.
(function(){
  var chapters = [];   // {id, file, title, md}
  var preface = null;
  var homeSections = ["work","experience","skills","contact"];
  var viewHome = document.getElementById("view-home");
  var viewHb = document.getElementById("view-handbook");
  var reader = document.getElementById("reader");
  var toc = document.getElementById("toc-list");
  var teaser = document.getElementById("teaser-list");

  function idFromFile(f){ return f.replace(/\.md$/,"").replace(/^\d+[-_]/,"").toLowerCase().replace(/[^a-z0-9-]+/g,"-"); }
  function titleFrom(md, fallback){
    var m = md && md.match(/^#\s+(.+)$/m);
    return m ? m[1].trim() : fallback;
  }
  function fetchText(path){
    return fetch(path, {cache:"no-cache"}).then(function(r){ if(!r.ok) throw new Error(r.status); return r.text(); });
  }
  function render(md){
    var box = document.createElement("div");
    box.className = "prose";
    box.innerHTML = window.marked ? window.marked.parse(md) : md;
    box.querySelectorAll("table").forEach(function(t){
      var w = document.createElement("div"); w.className = "tablebox";
      t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
    // Promote the first heading to the page title
    var h1 = box.querySelector("h1");
    if(h1){ var t = document.createElement("h1"); t.textContent = h1.textContent; h1.remove(); return [t, box]; }
    return [null, box];
  }

  function buildLists(){
    toc.innerHTML = ""; teaser.innerHTML = "";
    chapters.forEach(function(c){
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + c.id; a.textContent = c.title; a.dataset.ch = c.id;
      li.appendChild(a);
      if(c.md === null){
        var s = document.createElement("span"); s.className = "draft"; s.textContent = "in progress"; li.appendChild(s);
      }
      toc.appendChild(li);
      var t = document.createElement("li"), ta = document.createElement("a");
      ta.href = "#" + c.id; ta.textContent = c.title; ta.style.color = "inherit";
      t.appendChild(ta); teaser.appendChild(t);
    });
  }

  function pager(i){
    var p = document.createElement("nav"); p.className = "pager"; p.setAttribute("aria-label","Chapter navigation");
    function link(c, label, cls){
      var a = document.createElement("a"); a.href = "#" + c.id; if(cls) a.className = cls;
      var s = document.createElement("small"); s.textContent = label; a.appendChild(s);
      a.appendChild(document.createTextNode(c.title)); return a;
    }
    if(i > 0) p.appendChild(link(chapters[i-1], "Previous chapter"));
    if(i < chapters.length - 1) p.appendChild(link(chapters[i+1], "Next chapter", "next"));
    return p;
  }

  function openChapter(id){
    reader.innerHTML = "";
    var i = chapters.findIndex(function(c){ return c.id === id; });
    if(i === -1){
      var no = document.createElement("p"); no.className = "chno"; no.textContent = "Preface"; reader.appendChild(no);
      if(preface){ render(preface).forEach(function(n){ if(n) reader.appendChild(n); }); }
      if(chapters.length){
        var p = document.createElement("p"), a = document.createElement("a");
        a.className = "btn primary"; a.href = "#" + chapters[0].id; a.textContent = "Start with chapter 1";
        p.appendChild(a); reader.appendChild(p);
      }
    } else {
      var c = chapters[i];
      var n = document.createElement("p"); n.className = "chno"; n.textContent = "Chapter " + (i+1); reader.appendChild(n);
      if(c.md !== null){
        render(c.md).forEach(function(x){ if(x) reader.appendChild(x); });
      } else {
        var h = document.createElement("h1"); h.textContent = c.title; reader.appendChild(h);
        var d = document.createElement("div"); d.className = "pending";
        d.innerHTML = "<h2>This chapter is being written</h2><p>It will appear here once it is finished.</p>";
        reader.appendChild(d);
      }
      reader.appendChild(pager(i));
    }
    toc.querySelectorAll("a").forEach(function(a){
      if(a.dataset.ch === id) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
    });
  }

  function setNav(view){
    document.querySelectorAll(".nav a").forEach(function(a){
      if(view === "handbook" && a.dataset.nav === "handbook") a.setAttribute("aria-current","page");
      else a.removeAttribute("aria-current");
    });
  }

  function route(){
    var h = decodeURIComponent(location.hash.slice(1));
    var ch = chapters.find(function(c){ return c.id === h; });
    if(h === "handbook" || ch){
      viewHome.hidden = true; viewHb.hidden = false; setNav("handbook");
      openChapter(ch ? h : null);
      window.scrollTo(0,0);
      document.title = (ch ? ch.title + " | " : "") + "The EV Handbook by Adhin Gopuj A";
    } else {
      var wasHidden = viewHome.hidden;
      viewHb.hidden = true; viewHome.hidden = false; setNav("home");
      document.title = "Adhin Gopuj A | EV Technical Support and Field Quality";
      if(homeSections.indexOf(h) !== -1){
        var el = document.getElementById(h);
        if(el) requestAnimationFrame(function(){ el.scrollIntoView(); });
      } else if(wasHidden || !h){ window.scrollTo(0,0); }
    }
  }

  function showLoadError(){
    reader.innerHTML = '<div class="pending"><h2>The handbook could not load</h2><p>The chapter files load only when the site runs on a web host such as GitHub Pages, not when index.html is opened straight from your computer. If the site is already online, check that content/chapters.json lists file names that exist in content/handbook/.</p></div>';
  }

  window.addEventListener("hashchange", route);

  fetchText("content/chapters.json").then(function(txt){
    var cfg = JSON.parse(txt);
    var files = cfg.chapters || [];
    chapters = files.map(function(f){ return {id:idFromFile(f), file:f, title:idFromFile(f).replace(/-/g," "), md:null}; });
    var jobs = chapters.map(function(c){
      return fetchText("content/handbook/" + c.file).then(function(md){ c.md = md; c.title = titleFrom(md, c.title); }).catch(function(){});
    });
    if(cfg.preface) jobs.push(fetchText("content/handbook/" + cfg.preface).then(function(md){ preface = md; }).catch(function(){}));
    return Promise.all(jobs);
  }).then(function(){ buildLists(); route(); })
    .catch(function(){ route(); showLoadError(); });

  route();
})();
