//--------------------------------!IMPORTANT------------------------------------//
const content = '#code', defaultSeparator = 'p',
//------------------------------------------------------------------------------//
THIS = HTMLElement.prototype,BODY=document.body,HEAD=document.head,
newStyle = document.createElement('style');
function GET(e){return document.querySelector(e)} 
function GET_ALL(e){return document.querySelectorAll(e)} 
function log(e){return console.log(e)}
function error(e){return console.error(e)}
THIS.stylesheet=function(e){
newStyle.textContent = e;this.appendChild(newStyle)}
THIS.get=function(e){return this.querySelector(e)}
THIS.getAll=function(e){return this.querySelectorAll(e)}
document.execCommand("defaultParagraphSeparator", false, defaultSeparator);
//------------------------------------------------------------------------------//


//Build
const stylizeCode = {
  start() {
    const contentEditableAll = GET_ALL(content);
    Array.prototype.forEach.call(contentEditableAll, contentEditable =>{
        let lang = contentEditable.dataset.lang;

        contentEditable.stylize(lang);
        contentEditable.keyboardEvents(lang); 

    })
  }
}

//languages
const lang = {
    js: {
      equa: /(\b=\b)/g,
      quot: /("(.*?)"|'(.*?)'|`(.*?)`)/g,
      comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)|&lt;!--(.*?)--&gt;)/g,
      url: /((?:http|https|ftp):\/\/(?:[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?)/g,
      logi: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
      numb: /(\d+(\.\d+)?(e\d+)?)/g,
      func: /(?<=^|\s*)(async|console|alert|Math|Object|Array|String|class(?!\s*\=)|function|(?<=\.)\D\w*)(?=\b)/g,
      decl: /(?<=^|\s*)(var|let|const)/g, 
      brkts: /(\(|\)|(\[|\])|(\{|\}))/g,
    },
    html: {
      tags: /((?<=&lt;(?:\/)?)(\w+)(?=\s|\&gt;))/g,
      angl: /(&lt;(?!!)\/?|(?<!-)&gt;)/g,
      attr: /((\w+?)(?:\s*)(=|:)(?:\s*)["'](.*?)["']|(?<=<span class=html_tags>\w+<\/span>)[^<]+)/g,
      attrv: /("((?:\\"|[^"])*)"?)/g,
      quot: /("(.*?)"|'(.*?)'|`(.*?)`)/g,
      url: /((?:http|https|ftp):\/\/(?:[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?)/g,
      comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(?<!:)(\/\/.*)|&lt;!--(.*?)--&gt;)/g,
      sign: /(=)(?![^<>]*>)/gm,
      brkts:  /(\(|\)|(\[|\])|(\{|\}))/g, 
    }
  }
const js = {
    strReg1: /"(.*?)"/g,
    strReg2: /'(.*?)'/g,
    numReg: /\b(\d+)/g,
    jsReg1: /\b(new|if|else|do|while|switch|for|foreach|in|continue|break|return|typeof)(?=[^\w])/g,
    jsReg2: /(?<=^|\s*)(document|window|Array|String|Object|Number|Function|function|var|const|let|\.length|(?<=\.)\D\w*)(?=\b)/g,
    funcReg: /\b(function<\/span>)(\s+\w+)(\()(.*?)(?=[\)])(?=[^\w])/g,
    commentReg: /(\/\/.*)/g,
}
   
// Functions
THIS.stylize = function(dataLang) {
    var langObj = lang[dataLang];

    this.getAll(defaultSeparator).forEach((e) =>{
        var string = e.innerText, parsed = string.replace(/[ \t]/g, '&nbsp;');

/*         Object.keys(langObj).forEach(function(key) {
            parsed = parsed.replace(langObj[key], `<span class=${dataLang}_${key}>$1</span>`);
        }); */

        parsed = parsed.replace(js.strReg1,'<span class="string">"$1"</span>');
        parsed = parsed.replace(js.strReg2,"<span class=\"string\">'$1'</span>");
        parsed = parsed.replace(js.jsReg1,'<span class="js1">$1</span>');
        parsed = parsed.replace(js.jsReg2,'<span class="js2">$1</span>');
        parsed = parsed.replace(js.numReg,'<span class="js-num">$1</span>');
        parsed = parsed.replace(js.commentReg,'<span class="comment">$1</span>'); 
    
        parsed = parsed.replace(js.funcReg,'$1<span class="func-name">$2</span>$3<span class="func-args">$4</span>');
        parsed = parsed.split('\n').join('<br>');
        e.innerHTML = parsed;
    }); 
};
THIS.keyboardEvents = function(dataLang) {
    let This = this;

    This.addEventListener('keyup', e => {
        if(e.keyCode >= 48 || e.keyCode === 32) { 
            var caretPos =  This.getCaretPosition();
            This.stylize(dataLang);
            This.setCaretPosition(caretPos);

        };
    });  
    

    This.addEventListener('keydown', e => {
        if(e.which === 9) {
            var caretPos =  This.getCaretPosition() + 2;
            This.setTab();
            This.stylize(dataLang);
            This.setCaretPosition(caretPos);
            e.preventDefault();
        };
        handleSelfClosingCharacters(This)
    }); 

};
THIS.getCaretPosition=function(e){
    var treeWalker = document.createTreeWalker(
      node = this,
      NodeFilter.SHOW_TEXT,
      function(node) {
          var nodeRange = document.createRange();
          nodeRange.selectNode(node);
          return nodeRange.compareBoundaryPoints(Range.END_TO_END, range) < 1 ?
          NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
      false
  );
  var range = window.getSelection().getRangeAt(0),
      charCount = 0;
  while (treeWalker.nextNode()) {charCount += treeWalker.currentNode.length;}
  if (range.startContainer.nodeType == 3) {charCount += range.startOffset;}
  return charCount;
};
THIS.setCaretPosition=function(pos){

    // Loop through all child nodes
    for(var node of this.childNodes){
        if(node.nodeType == 3){ // we have a text node
            if(node.length >= pos){
                // finally add our range
                var range = document.createRange(),
                    sel = window.getSelection();
                range.setStart(node,pos);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                return -1; // we are done
            }else{
                pos -= node.length;
         
            }
        }else{
            pos = node.setCaretPosition(pos);
            log(pos)
            if(pos == -1){
                return -1; // no need to finish the for loop
            }
        }
    }
    return pos; // needed because of recursion stuff
}
THIS.getCaretPos = function(event) {
    var sel, caretOffset = 0,
    doc = this.ownerDocument || this.document,
    win = doc.defaultView || doc.parentWindow;

    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(this);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        };
    } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(el);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    };
    return caretOffset;

}
THIS.setCaretPos = function(event) {
    for(var node of this.childNodes){

        if(node.nodeType == 3){ // If text node
            if(node.length >= event){

                var range = document.createRange(), sel = window.getSelection();
                range.setStart(node,event);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                return -1; // Done
            } else { event -= node.length; };
        } else {
            log(node)
            event = node.setCaretPos(event);
            if(event == -1){ return -1; }; // no need to finish the for loop
        };
    };
    return event; 
}
THIS.setTab = function(event) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode('  ') );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = '  ';
    }; 
}



//Start
stylizeCode.start();
