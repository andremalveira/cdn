//----------------------------------------//
// developed by github.com/andremalveira 
// for B7WEB.com.br 
//----------------------------------------//

// !important
var THIS = HTMLElement.prototype, dPS = 'span', body = document.body;
function GET(url){return document.querySelector(url);} 
function GET_ALL(url){return document.querySelectorAll(url);} 
function log(params){return console.log(params)}
THIS.get=function(e){return this.querySelector(e)};
THIS.getAll=function(e){return this.querySelectorAll(e)};
THIS.stylesheet=function(e){Object.assign(this.style, e)};
document.execCommand("defaultParagraphSeparator", false, 'span');


  style = {
    content: {
      position: 'relative',
      overflow: 'hidden',
    },
    note: {
      fontSize: '0.8rem',
      padding: '0px',
      borderRadius: '0.5rem',
      position: 'relative',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      top: '0',
      opacity: '1',
      fullscreen: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        margin: '0',
        zIndex: '1',
        borderRadius: '0',
        transform: 'translate(0%, 0%) scale(1.5)',
      }
    },
  },
  icon = {
    windowControl: { 
      close: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle></svg>',
      minimize: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle></svg>',
      maximize: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></svg>',
    },
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" width="15" height="14" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>',
    justify: {
      left: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>',
      center: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-center" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>',
      right: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-text-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>'
    },
    list: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',
    bold: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16"><path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/></svg>',
    underline: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16"><path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/></svg>',
    italic: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16"><path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/></svg>',
    strikethrough: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-strikethrough" viewBox="0 0 16 16"><path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"/></svg>',
    fullscreen: {
      open: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16"><path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/></svg>',
      exit: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16"><path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/></svg>',
    },
    clipboard: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>',
    dots: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>',
    question: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15" fill="currentColor" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" /></svg>',
    caret: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',
    newMenuClosed: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16"><path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16"><path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/><path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chat-right-dots" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/><path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16"><path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-signpost-2" viewBox="0 0 16 16"><path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grid-3x3-gap" viewBox="0 0 16 16"><path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z"/></svg>',
    ]
  }

  const confirmation = {
    modal() {
      addStylesheetRules([
        ['#confirmation',
          ['position', 'absolute'],
          ['width', '100%'],
          ['height', '100vh'],
          ['background', '#252525b0'],
          ['backdrop-filter', 'blur(3px)'],
          ['display', 'flex'],
          ['align-items', 'center'],
          ['justify-content', 'center'],
          ['transition', 'ease 0.1s'],
        ],
        ['#confirmation.hide',
          ['background', '#25252500'],
          ['backdrop-filter', 'blur(0px)'],
        ],
        ['#confirmation .okordeny',
          ['width', '20rem'],
          ['height', '10rem'],
          ['background', '#1414148a'],
          ['border-radius', '0.5rem'],
          ['box-shadow', '0px 3px 8px 1px #00000029'],
          ['display', 'grid'],
          ['grid-template-rows', '1fr 30%'],
          ['display', 'flex'],
          ['flex-direction', 'column'],
          ['justify-content', 'center'],
          ['transition', 'ease 0.1s'],
          ['transform', 'scale(1.1)'],
        ],
        ['#confirmation .okordeny.hide',
          ['transform', 'scale(0.5)'],
          ['opacity', '0'],
        ],

        ['#confirmation .okordeny .text,#confirmation .okordeny .buttons',
          ['display', 'flex'],
          ['align-items', 'center'],
          ['justify-content', 'center'],
        ],
        ['#confirmation .okordeny .text',
          ['font-family','Fira Code, "sans-serif"'],
          ['height', '60%'],
        ],
        ['#confirmation .okordeny .buttons',
          ['padding', '0.5rem'],
          ['gap', '0.5rem'],
          ['transition', 'ease 0.2s'],
          ['color','#b9b9b9'],
        ],
        ['#confirmation .okordeny .buttons div',
          ['transition', 'ease 0.2s'],
        ],
        ['#confirmation .okordeny .buttons #ok',
          ['padding', '0.5rem 1rem'],
          ['background', '#673ab7'],
          ['border-radius', '0.3rem'],
          ['cursor', 'pointer'],
        ],        
        ['#confirmation .okordeny .buttons #deny',
          ['padding', '0.5rem 1rem'],
          ['border', 'solid 1px #673ab7'],
          ['border-radius', '0.3rem'],
          ['cursor', 'pointer'],
        ],
        ['#confirmation .okordeny .buttons #deny:hover',
          ['background', 'lightcoral'],
          ['border', 'solid 1px transparent'],
          ['color','#eee'],
        ],
        ['#confirmation .okordeny .buttons #ok:hover',
          ['background', '#3ab77d'],
          ['color','#eee'],
        ],
      ]);
      modalHTML = `
        <div id="confirmation">
          <div class="okordeny">
            <div class="text">
              <span style="color: #2dca95">Executar</span>&nbsp
              <span style="color: #4cc5ff">b7webNoteEditorDemo</span>
              <span style="color: #d6c15b">()</span>
              <span style="color: #38a5f3">?</span>
              <br>
              
            </div>
            <div class="buttons">
              <div id="ok" onclick="confirmation.ok()">OK</div>
              <div id="deny" onclick="confirmation.deny()">Cancel</div>
            </div>
          </div>
        </div>
      `;
      body.insertAdjacentHTML('beforeend',modalHTML);



    },
    ok(){
      var confirmationElement = body.children["confirmation"];
      confirmationElement.firstElementChild.classList.add('hide')
      setTimeout(() => {
        confirmationElement.classList.add('hide');
        setTimeout(() => {
          confirmationElement.remove()
          b7webNoteEditorDemo.init()
        }, 400);

      }, 100);
    },
    deny() {
      var confirmationElement = body.children["confirmation"];
      confirmationElement.firstElementChild.classList.add('hide')
      setTimeout(() => {
        confirmationElement.classList.add('hide');
        setTimeout(() => {
          confirmationElement.remove()
        }, 200);
      }, 100);
    }
  }
  confirmation.modal();

  const b7webNoteEditorDemo = {
    init() {
      var noteAll = document.querySelectorAll('.area--list .annotation'),
          note = GET('.area--list .annotation');
      Array.prototype.forEach.call (noteAll, note => {
            
    //===================================================================//    
    //----------------!Get datas and insert new HTML---------------------//
    //===================================================================//

        var noteHr = note.get('hr'),
        noteAnchor = note.get('a'),
        dir = noteAnchor.href.split('/'),
        L = location,
        host = L.protocol+'//'+L.host,
        codeLang = 'js';
        noteHr.remove();
        noteAnchor.remove();
        switch(dir[4]) {
          case "javascript": codeLang = 'js'; break;
          case "html5-e-css3": codeLang = 'html'; break;
        }
        var noteText = note.innerHTML,
        newMarkup = `
          <div header>
            <div id="barTop">
              <div windowControls>
                <div iconWinControls="close" title='Fechar'>${icon.windowControl.close}</div>
                <div iconWinControls>${icon.windowControl.minimize}</div>
                <div iconWinControls="maximize" title="Maximizar">${icon.windowControl.maximize}</div>
              </div>
              <div titleCenter flex></div>
              <div></div>
            </div>
            <div dir>
              <a target="_blank" href="${host+'/meus-cursos'}">${dir[3]}s</a> 
              ${icon.chevronRight}
              <a target="_blank" href="${host+'/'+dir[3]+'/'+dir[4]}">${dir[4]}</a> 
              ${icon.chevronRight} 
              <a target="_blank" href="${noteAnchor.href}">${dir[5]}</a>
            </div>
          </div>
          <div id="containerEditable">
            <div id="editableMarkingStyle"></div>
            <div id="editable" data-lang="${codeLang}" onselectstart="return false" >${noteText}</div>
          </div>
          <div id="barBottom"><div flex left></div><div flex right></div> </div>
        `
        note.innerHTML=newMarkup; // create new HTML in class 'annotation'.



    //===================================================================//    
    //--------------------------FUNCTIONS--------------------------------//
    //===================================================================//

        var containerEditable = note.get('#containerEditable'),
            noteEditable = note.get('#editable'),
            editableMarkingStyle = note.get('#editableMarkingStyle'),
            barBottom = note.get('#barBottom'),
            b7webhelpIframeLauncher = document.body.querySelector('div iframe#launcher '),
            sectionPage = GET('section.page'),
            noteDir = note.get('[header] [dir]'), 
            noteBarTopTitle = note.get('[titleCenter]'),

            isFullScreen = false,
            cEeCheck = false;

        GET('head title').innerText='B7Web - Note Editor Demo';
        note.setAttribute('noteEditor','');

        const settings = (props) => {
            theme = (props) ? props['theme'] : 'default';
            font = (props) ? props['font'] : 'firaCode';

            document.documentElement.setAttribute('netheme', theme);
            containerEditable.setAttribute('nefont', font);
        }
        settings()

        function enableEditable() {
          note.style.removeProperty('cursor');
          noteEditable.removeAttribute('onselectstart');
          noteEditable.style.removeProperty('cursor');
          noteEditable.contentEditable= 'true';
          noteEditable.setAttribute('spellcheck', 'false');
          noteEditable.autocapitalize = "off";
          cEeCheck = true;
          noteEditable.setCaretEnd();
        }
        note.addEventListener('click', () => {
          if(cEeCheck == false){
            if(!isFullScreen){
              note.style.boxShadow='#676767 0rem 0rem 0rem 0.08rem';
            }
            enableEditable();
            noteEditable.focusTabPreventDefault();
          }
        })

        //FULLSCREEN
        var btnFullScreen = note.get('[iconsettings="fullscreen"]');
        var btnMaximize = note.get('[iconwincontrols="maximize"]');
        var btnClose = note.get('[iconwincontrols="close"]');
        const fullscreen = {
          require() {
            barBottomStatus.enable();
            titleBarTop.enable();
            if(b7webhelpIframeLauncher){
              b7webhelpButton = b7webhelpIframeLauncher.contentWindow.document.querySelector('button[aria-label="Ajuda"]');
              b7webHelp.enable(b7webhelpIframeLauncher, b7webhelpButton);
            }
            document.documentElement.style.overflow='hidden'
            note.setAttribute('id', 'fullscreen')
            isFullScreen = true;
            sectionPage.get('.area--list').style.position='relative'
            note.style.transition='ease 0.1s';
            note.stylesheet(style.note.fullscreen)
            note.style.removeProperty('box-shadow');
            note.style.left='0%'
            setTimeout(() => {
              sectionPage.parentElement.stylesheet(style.content);
              note.style.left='0%'
              setTimeout(() => {
                setTimeout(() => {
                  sectionPage.get('.area--list').style.removeProperty('position');
                  setTimeout(() => {
                    note.style.transform='translate(0%, 0%) scale(1)';
                  }, 50);
                  noteEditable.setCaretEnd();
                }, 10);
              }, 0);
            }, 0);
          },
          exit() {
            barBottomStatus.disable();
            titleBarTop.disable();
            note.removeAttribute('id');
            setTimeout(() => {

              setTimeout(() => {

                note.removeAttribute('style');
                note.stylesheet(style.note);
                sectionPage.parentElement.removeAttribute('style');
                isFullScreen = false;
                cEeCheck = false;
                noteEditable.setCaretEnd();
                document.documentElement.style.overflow=''
              }, 50);
            }, 50);
          }

        }
        if(btnFullScreen){
          btnFullScreen.addEventListener('click', () => {        
            if(!isFullScreen){
              fullscreen.require()
            } else {
              fullscreen.exit()
            }
          })  
        }
        btnMaximize.addEventListener('click', () => {        
          if(!isFullScreen){
            fullscreen.require()
          }
        })  
        btnClose.addEventListener('click', () => {        
          if(isFullScreen){
            fullscreen.exit()
          }
        })  
        //END FULLSCREEN

        THIS.setCaretEnd=function(e){
          var range = document.createRange(),
              selection = window.getSelection();
          selection.removeAllRanges();
          range.selectNodeContents(this);
          range.collapse(false);
          selection.addRange(range);
          this.focus();

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
                  if(pos == -1){
                      return -1; // no need to finish the for loop
                  }
              }
          }
          return pos; // needed because of recursion stuff
        }
        function setTextinCaretPosition(text){ //insert text where the cursor is [insertTextAtCursor]
          let selection = window.getSelection();
          let range = selection.getRangeAt(0);
          range.deleteContents();
          let node = document.createTextNode(text);
          range.insertNode(node);
      
          for(let position = 0; position != text.length; position++)
          {
              selection.modify("move", "right", "character");
          };
        }
        var savedRange,isInFocus;
        function saveSelection(){
            if(window.getSelection)//non IE Browsers
            {
                savedRange = window.getSelection().getRangeAt(0);
            }
            else if(document.selection)//IE
            { 
                savedRange = document.selection.createRange();  
            } 
        }
        function restoreSelection(){
          isInFocus = true;
          document.getElementById("area").focus();
          if (savedRange != null) {
              if (window.getSelection)//non IE and there is already a selection
              {
                  var s = window.getSelection();
                  if (s.rangeCount > 0) 
                      s.removeAllRanges();
                  s.addRange(savedRange);
              }
              else if (document.createRange)//non IE and no selection
              {
                  window.getSelection().addRange(savedRange);
              }
              else if (document.selection)//IE
              {
                  savedRange.select();
              }
          }
        }

        THIS.focusTabPreventDefault=function(e){
          this.addEventListener('keydown', (e) => {
            if(e.keyCode == 9){
              document.execCommand('insertHTML', false, '  ');
              e.preventDefault()   
            }
          })
        };

        const markingStyle = {
          langs() {
            const lang = {
              js: {
                equa: /(\b=\b)/g,
                quot: /(`|'|"|&#39;|&#34;)/g,
                quotv: /("((?:\\"|[^"])*)"?)/g,
                comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)|&lt;!--(.*?)--&gt;)/g,
                url: /((?:http|https|ftp):\/\/(?:[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?)/g,
                logi: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
                numb: /(\d+(\.\d+)?(e\d+)?)/g,
                func: /(?<=^|\s*)(async|console|alert|Math|Object|Array|String|class(?!\s*\=)|function|(?<=\.)\D\w*)(?=\b)/g,
                decl: /(?<=^|\s*)(var|let|const)/g, // Declarations
                brkts: /(\(|\)|(\[|\])|(\{|\}))/g,
              },
              html: {
                tags: /((?<=&lt;(?:\/)?)(\w+)(?=\s|\&gt;))/g,
                angl: /(&lt;(?!!)\/?|(?<!-)&gt;)/g,
                attr: /((\w+?)(?:\s*)(=|:)(?:\s*)["'](.*?)["']|(?<=<span class=html_tags>\w+<\/span>)[^<]+)/g,
                attrv: /("((?:\\"|[^"])*)"?)/g,
                quot: /(`|'|"|&#39;|&#34;)/g,
                url: /((?:http|https|ftp):\/\/(?:[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?)/g,
                comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(?<!:)(\/\/.*)|&lt;!--(.*?)--&gt;)/g,
                sign: /(=)(?![^<>]*>)/gm,
                brkts:  /(\(|\)|(\[|\])|(\{|\}))/g, 
              }
            }
            return lang
          },
          init(editable) {
            const lang = markingStyle.langs(),
                  dataLang = editable.dataset.lang,
                  langObj = lang[dataLang];
            let html = editable.innerHTML;

            Object.keys(langObj).forEach(function(key) {
                html = html.replace(langObj[key], `<span class=${dataLang}_${key}>$1</span>`);
            });
            editableMarkingStyle.innerHTML = html; 
          }
        }
        noteEditable.addEventListener("input", markingStyle.init.bind(null, noteEditable));
        markingStyle.init(noteEditable); 
        
        const autoCloseBracket = {
          elements() {
            const elements = {
              '{':'}',
              '[':']',
              '(':')',
              '"':'"',
              '\'':'\'',
              '<':'>'
            }; return elements
          },
          enable() {
            let brackets = autoCloseBracket.elements();
            Object.keys(brackets).forEach(function(key) {
              noteEditable.addEventListener('keyup', function(e) {
                if (e.shiftKey  && e.key == key || e.key == key) {
                  var caretp = noteEditable.getCaretPosition();
                  setTextinCaretPosition(brackets[key])
                  noteEditable.setCaretPosition(caretp);
                  markingStyle.init(noteEditable); 
                }
              });
            });


          }
        }
        autoCloseBracket.enable();

        noteEditable.addEventListener('keydown',e => {
            e.stopImmediatePropagation();
        });

        const titleBarTop = {
          enable() {
            noteBarTopTitle.insertAdjacentHTML('afterbegin', `<div dir>${'<span>B7Web Note Editor -&nbsp</span>'+noteDir.innerHTML}`);
            noteDir.innerHTML='';

          },
          disable() {
            noteBarTopTitle.get('span').remove();
            noteDir.innerHTML=noteBarTopTitle.firstElementChild.innerHTML
            noteBarTopTitle.innerHTML='';
          }
        }
        const barBottomStatus = {
          enable() {
            var NES_right = barBottom.get('[right]');
            NES_right.insertAdjacentHTML('beforeend', `
            <div iconSettings=""><a href="https://github.com/andremalveira" title="Github from Developer" target="_blank">${icon.github}</a></div>   
          `);
          },
          disable() {
            barBottom.get('[right]').innerHTML=''
            barBottom.get('[left]').innerHTML=''
          }
        }

        const contextMenuCustom = {
          viewContextMenu(clientX, clientY) {
            
            var body = document.body,
                iconFullscreen = (isFullScreen) ? icon.fullscreen.exit : icon.fullscreen.open,
                nameFullscreen = (isFullScreen) ? 'Minimizar' : 'Maximizar',
                contextMenuMarkup = `
                  <div id="contextMenu">
                    <div class="overlayContextMenuCustom"></div>
                    <div class="contextMenuCustom" style="transform: translate(${clientX}, ${clientY});" >
                        <button contextMenuFunction="${nameFullscreen}"><i>${iconFullscreen}</i><span>${nameFullscreen}</span><div shortcut></div></button>
                        <span hr></span>
                        <button contextMenuFunction="bold"><i>${icon.bold}</i><span>Bold</span><div shortcut>Ctrl+B</div></button>
                        <button contextMenuFunction="italic"><i>${icon.italic}</i><span>Italic</span><div shortcut>Ctrl+I</div></button>
                        <button contextMenuFunction="underline"><i>${icon.underline}</i><span>Underline</span><div shortcut>Ctrl+U</div></button>
                        <span hr></span>
                        <button contextMenuFunction="copy"><i>${icon.clipboard}</i><span>Copiar</span><div shortcut>Ctrl+C</div></button>
                        <button contextMenuFunction="selectAll"><i></i><span>Selecionar Tudo</span><div shortcut>Ctrl+A</div></button>
                    </div>
                  </div>
                `;
            body.insertAdjacentHTML('beforeend', contextMenuMarkup);
            var contextMenuid = body.children["contextMenu"],
                overlayContextMenuCustom = contextMenuid.get('.overlayContextMenuCustom'),
                contextMenuCustom = contextMenuid.get('.contextMenuCustom');
                function contextMenuExit() {
                  contextMenuid.remove();
                }

                contextMenuCustom.getAll('[contextMenuFunction]').forEach(e => {
                  
                  e.addEventListener('click', () => {
                    var functionValue = e.attributes["contextmenufunction"].value;
                    if(functionValue == 'Maximizar'){
                      fullscreen.require();
                    } else if(functionValue == 'Minimizar') {
                      fullscreen.exit();
                    }else {
                      formatDoc(functionValue, false);
                    }
                    contextMenuExit()
                  })
                })


                overlayContextMenuCustom.addEventListener('click', () => {contextMenuExit()}, false)
                window.addEventListener('scroll', function (e) {if(body.children["contextMenu"]){ log('scrol'), contextMenuExit()}}, true)
          },
          init() {
            if (document.addEventListener) {
              note.addEventListener('contextmenu', function(e) {
                clientX = e.clientX + 'px';
                clientY = e.clientY + 'px';
                contextMenuCustom.viewContextMenu(clientX, clientY);
                e.preventDefault();
              }, false);
            } else {
              note.attachEvent('oncontextmenu', function() {
                clientX = e.clientX + 'px';
                clientY = e.clientY + 'px';
                contextMenuCustom.viewContextMenu(clientX, clientY);
                window.event.returnValue = false;
              });
            }
            
          }
        }
        contextMenuCustom.init();



    //===================================================================//    
    //-------------------!custom help B7Web!------------------------//
    //===================================================================//
        var NES_right = barBottom.get('[right]');
        const b7webHelp = {
          enable(iframe, button) {
            iframe.style.zIndex='0';
            NES_right.insertAdjacentHTML('beforeend', `
              <div iconSettings="help">${icon.question}</div>   
            `);
            note.getAll('[iconSettings]').forEach(e => {e.stylesheet(style.iconSettings)});
            var buttonHelp = NES_right.get('[iconSettings="help"]');
            buttonHelp.style.background='#1f60b1';
            buttonHelp.style.color='#fff';
            buttonHelp.style.marginLeft='0.5rem'
            buttonHelp.addEventListener('mouseover', () => {
              buttonHelp.style.background='#2d7fe6fc';
            })
            buttonHelp.addEventListener('mouseout', () => {
              buttonHelp.style.background='#1f60b1';
            })
            buttonHelp.addEventListener('click', () => {
              button.click();

              setTimeout(() => {
                var b7webhelpIframeWebWidget = document.body.querySelector('div iframe#webWidget').contentWindow.document,
                    form = b7webhelpIframeWebWidget.querySelector('form'),
                    labels = form.querySelectorAll('label'),
                    inputs = form.querySelectorAll('input'),
                    textarea = form.querySelector('textarea'),
                    inputfile = form.querySelector('button#dropzone-input')
                    footer = form.querySelector('footer');

                    form.style.background='#1c1c1c'
                    labels.forEach(e => {e.style.color='#999999'})
                    inputs.forEach(e => {e.style.border='1px solid #545454', e.style.background='transparent'})
                    textarea.style.border='1px solid #545454'
                    textarea.style.background='transparent'
                    inputfile.style.borderColor='#545454'
                    inputfile.style.background='transparent'
                    footer.style.borderTop='1px solid #545454'

                  }, 500);
            })

          },
          disable(e) {
            NES_right.get('[iconSettings="help"]').remove();
          }
        };

        
    //===================================================================//    
    //-------------------!functions execCommand()------------------------//
    //===================================================================//

        noteEditable.addEventListener('paste', (e) => {
            console.error('Ctrl + V Negado! - Infelizmente ainda não há suporte para essa solicitação.')
            notify('Ctrl + V Negado! - Infelizmente ainda não há suporte para essa solicitação.', {type:'error'})
            e.preventDefault()   
            return false;
        })
        function formatDoc(formatValue, sValue) {
          document.execCommand(formatValue, false, sValue); 
          noteEditable.focus();
        }
        note.getAll('[format]').forEach(e => {
          e.addEventListener('click', () => {
              var formatValue = e.attributes['format'].value;          
              formatDoc(formatValue); 
          })  
        });
        
    //===================================================================//    
    //----------------------!style sheet insert--------------------------//
    //===================================================================//
        note.stylesheet(style.note);
      });

      desktopHeaderCustom = {
        enable() {
          var desktopHeader = GET('header.desktopHeader');
          if(desktopHeader){
            var switchInput = desktopHeader.get('.superiorMenu--item.switch input'),
                profileImg = desktopHeader.get('.profileImg img'),
                profileName = desktopHeader.get('.profileName'),
                footer = GET('.content footer'),
                menuClosed = GET('aside.menuClosed'),
                menuOpener = menuClosed.get('.menuOpener'),
                nav = menuClosed.get('nav'),
                menuImg = nav.getAll('.menuImg'),
                b7weblogo = 'https://alunos.b7web.com.br/assets/images/LOGO_B7.svg#LOGO1',
                newdesktopHeader = `
                <div def>
                  <a href="https://github.com/andremalveira/b7webNoteEditor" target="blank"><div icongithub title="Projeto no Github">${icon.github}</div></a>
                  <div profile title="${profileName.get('span').innerText}"><img src="${profileImg.src}">
                    <div class="popUp">
                      <a title="Conta" href="/perfil">Conta</a>
                      <a title="Sair" href="/logout">Sair</a>
                    </div>
                  </div>

                `;

            addStylesheetRules([
              ['.menuClosed [def]',
                ['width', '45px'],
                ['padding', '0.5rem'],
                ['display', 'flex'],
                ['flex-direction', 'column'],
                ['justify-content', 'flex-end'],
                ['padding-bottom', '1rem'],
                ['margin-bottom', '1.8rem'],
                ['border-bottom', '1px solid rgb(48, 48, 48)'],
                ['z-index', '2'],
              ],
              ['.menuClosed [profile]',
                ['width', '30px'],
                ['height', '30px'],
                ['cursor', 'pointer'],
                ['border-radius', '50%'],
                ['margin', '0px auto'],
                ['padding', '2px'],
                ['transition', 'ease 0.2s'],
                ['opacity', '0.9'],
                ['position', 'relative'],
              ],
              ['.menuClosed [icongithub]',
                ['width', '30px'],
                ['height', '30px'],
                ['color', '#525252'],
                ['margin', '0px auto'],
                ['padding', '2px'],
                ['margin-bottom', '0.8rem'],

              ],
              ['.menuClosed [icongithub] svg',
                ['width', '100%'],
                ['height', '100%'],
              ],
              ['.menuClosed [profile] .popUp',
                ['position', 'absolute'],
                ['width', '10rem'],
                ['background', '#191b207a'],
                ['flex-direction', 'column'],
                ['padding', '0.4rem'],
                ['top', '0%'],
                ['left', '50px'],
                ['border-radius', '0.5rem'],
                ['backdrop-filter', 'blur(3px)'],
                ['cursor', 'default'],
                ['opacity', '0'],
                ['transform', 'translate(-15px, -50%)'],
                ['transition', 'ease 0.1s'],
                ['display', 'none'],
                ['box-shadow', '0px 2px 7px -2px #00000069'],
                ['border', 'solid 0.01rem #333'],
              ],
              ['.menuClosed [profile] .popUp.show',
                ['opacity', '1'],
                ['transform', 'translate(0px, -50%)'],
              ],
              ['.menuClosed [profile] .popUp::before',
                ['content', '""'],
                ['position', 'absolute'],
                ['width', '1rem'],
                ['height', '1rem'],
                ['background', '#191b207a'],
                ['backdrop-filter', 'blur(3px)'],
                ['z-index', '-1'],
                ['transform', 'rotate(45deg) translate(15px, 36px)'],
                ['borderRadius', '0.1rem'],
                ['border', 'solid 0.01rem #333'],
                ['border-right', '0'],
                ['border-top', '0'],
              ],
              ['.menuClosed [profile] .popUp a',
                ['padding', '0.4rem 0.6rem'],
                ['color', '#d1d1d1c7'],
                ['transition', 'ease 0.2s'],
                ['border-radius', '0.2rem'],
              ],
              ['.menuClosed [profile] .popUp a:hover',
                ['background', '#2f31368a'],
              ],
              ['.menuClosed [profile]:hover',
                ['opacity', '1'],
              ],
              ['.menuClosed [profile] img',
                ['width', '100%'],
                ['border-radius', '50%'],
              ],
              ['.dfAAiZ aside.menuClosed nav li',
                ['margin-bottom', '0.7rem'],
              ],
              ['.dfAAiZ aside.menuClosed nav li .menuImg',
                ['width', '45px'],
              ],
              ['.dfAAiZ aside.menuClosed nav li .menuImg .menuIcon',
                ['margin-left', '0.4rem'],
              ]


            ]);
            var styleMenuClosed = {
              width: '45px',
              display: 'grid',
              gridTemplateRows: 'max-content',
              overflowX: 'initial',
            };
                
            
            desktopHeader.childNodes.forEach(e => {e.style.display='none'});
            footer.style.display='none';
            menuClosed.stylesheet(styleMenuClosed)
            menuOpener.style.display='none';
            nav.style.marginTop='1.9rem';
            menuClosed.insertAdjacentHTML('beforeend', newdesktopHeader);
            menuImg.forEach((e, key) => {
              e.insertAdjacentHTML('beforeend', `<div class="menuIcon">${icon.newMenuClosed[key]}</div>`);
              e.get('svg').remove();
            });
            var def = menuClosed.get('[def]'),
                profile = menuClosed.get('[profile]'),
                popUpCheck = false;

            profile.addEventListener('click', ()=> {
              if(!popUpCheck){
                profile.get('.popUp').style.display='flex';
                setTimeout(() => {
                  profile.get('.popUp').classList.add('show')
                }, 100);
                popUpCheck = true;
              } else {
                profile.get('.popUp').classList.remove('show')
                setTimeout(() => {
                  profile.get('.popUp').style.display='';
                }, 100);
                popUpCheck = false;
              }

            })

          }
        }
      }
      desktopHeaderCustom.enable();

      addStylesheetRules([
        ['*::-webkit-scrollbar',['width', '10px'],['background', '#transparent'],],
        ['*::-webkit-scrollbar-thumb',['background', '#1e2229'],['border-radius', '50px']],
        ['*::selection',['background', '#43454ca1'],],
        //Styles Default
        ['#barTop',
          ['padding', '0.3rem 1rem 0.3rem'],
          ['background', 'transparent'],
          ['border-radius', '0.4rem 0.4rem 0px 0px'],
          ['display', 'flex'],
          ['justify-content', 'space-between'],
          ['color', 'rgba(209, 209, 209, 0.78)'],
        ],
        ['[windowControls]',
          ['display', 'flex'],
          ['align-items', 'center'],
        ],
        ['[iconwincontrols]',
          ['display', 'flex'],
          ['align-items', 'center'],
          ['padding', '0.2rem 0'],
          ['margin-right', '0.4rem'],
        ],
        ['[iconwincontrols]:first-child, [iconwincontrols]:last-child',
          ['cursor', 'pointer'],
        ],
        ['[dir]',
          ['padding', '0.2rem 1rem 0.6rem'],
          ['color', 'rgba(124, 124, 124, 0.48)'],
          ['display', 'flex'],
          ['align-items', 'center'],
          ['font-family', 'system-ui'],
        ],
        ['[dir] a',
          ['color', 'rgba(124, 124, 124, 0.48)'],
        ],
        ['[dir] svg',
          ['margin-top', '0.3rem']
        ],
        ['[flex]',
          ['display', 'flex'],
        ],
        ['[iconsettings]',
          ['display', 'flex'],
          ['align-items', 'center'],
          ['justify-content', 'center'],
          ['width', '1.2rem'],
          ['height', '1.2rem'],
          ['cursor', 'pointer'],
          ['transition', 'all 0.2s ease 0s'],
          ['border-radius', '0.3rem'],
          ['background', 'transparent'],
          ['border', '0px'],
          ['padding', '0px'],
          ['color', 'currentcolor'],
        ],
        ['[iconsettings]:hover',
          ['background', '#2f3136'],
        ],
        ['#containerEditable', 
          ['position', 'relative'],
          ['min-height', '4rem'],
          ['max-height', '10rem'],
          ['overflow', 'overlay'],
          ['display', 'grid'],
          ['margin-right', '2px'],
          ['font-size', '0.87rem'],
          ['z-index', '0'],
        ],
        ['#editable',
          ['position', 'relative'],
          ['-webkit-text-fill-color', 'transparent'],
          ['text-fill-color', 'transparent'],
        ],
       ['#editable, #editableMarkingStyle',
          ['padding', '0.7rem 1rem 1.5rem 2.5rem'],
          ['color', '#d1d1d1c7'],
          ['outline', 'none'],
          ['top', '0'],
          ['left', '0'],
          ['right', '0'],
          ['bottom', '0'],
        ],
        ['#editable div, #editableMarkingStyle div',
          ['white-space', 'pre-wrap'],
          ['padding', '0.2rem'],
        ],
        ['#editable div:active, #editableMarkingStyle div:active',
          ['box-shadow', '0px 0px 0px 1px #303030'],
        ],
        ['#editableMarkingStyle',
          ['position', 'absolute'],
          ['user-select', 'none'],
          ['counter-reset', 'line']
        ],
        ['#editableMarkingStyle div::before',
          ['content', `counter(line)`],
          ['counter-increment', 'line'],
          ['position', 'absolute'],
          ['right', 'calc(100% + -30px)'],
          ['opacity', '0.5'],
        ],
        ['#barBottom',
          ['padding', '0.3rem 0.7rem'],
          ['color', 'rgba(209, 209, 209, 0.78)'],
          ['display', 'flex'],
          ['justify-content', 'space-between'],
        ],
        ['#barBottom a',
          ['color', 'currentColor'],
          ['display', 'flex'],
        ],
        ['#contextMenu',
          ['position', 'absolute'],
          ['z-index', '1'],
        ],
        ['.overlayContextMenuCustom',
          ['position', 'fixed'],
          ['width', '100%'],
          ['height', '100%'],
          ['z-index', '0'],
        ],
        ['.contextMenuCustom',
          ['position', 'fixed'],
          ['min-width', '12rem'],
          ['border-radius', '0.5rem'],
          ['backdrop-filter', 'blur(3px)'],
          ['box-shadow', '0px 2px 7px -2px #00000069'],
          ['z-index', '1'],
          ['padding', '0.3rem 0.2rem'],
          ['border', 'solid 0.01rem #333'],
        ],
        ['button[contextmenufunction]',
          ['display', 'flex'],
          ['width', '100%'],
          ['align-items', 'center'],
          ['padding', '.4rem'],
          ['border-radius', '0.1rem'],
          ['transition', 'ease 0.1s'],
          ['cursor', 'pointer'],
          ['font-family', 'system-ui'],
          ['font-size', '0.9rem'],
          ['border', 'none'],
          ['outline', 'none'],
          ['color', 'currentColor'],
          ['background', 'transparent'],
        ],
        ['button[contextmenufunction] [shortcut]',
          ['margin-left', 'auto'],
        ],
        ['button[contextmenufunction] i',
          ['display', 'flex'],
          ['align-items', 'center'],
          ['width', '1rem'],
          ['height', '1rem'],
          ['margin-right', '.5rem'],
        ],
        ['.contextMenuCustom span[hr]',
          ['background', '#7070703b'],
          ['width', '95%'],
          ['height', '0.01rem'],
          ['display', 'flex'],
          ['margin', '0.5rem auto'],
        ],
    
        //Style in Fullscreen
        ['#fullscreen [header]',
          ['box-shadow', '0px 0px 10px 0px #0006'],
          ['z-index', '1'],
        ],
        ['#fullscreen #containerEditable', 
          ['max-height', '100%'],
          ['border', '1px solid rgb(48, 48, 48)'],
          ['border-right', '0'],
        ],
        ['#fullscreen #editable, #fullscreen #editableMarkingStyle',
          ['padding', '1rem 1rem 1.5rem 3.5rem'],
        ],
        ['#fullscreen [dir]',
          ['padding', '0'],
          ['color', '#707070'],
        ],
        ['#fullscreen [dir] a',
          ['color', '#707070'],
        ],
        ['#fullscreen #editableMarkingStyle div::before',
          ['right', 'calc(100% + -40px)'],
        ],
        //Fonts
        ['[nefont="firaCode"]',['font-family', '"Fira Code", sans-serif'],],
        //Theme Default
        ['[netheme="default"] [noteEditor]',['background', '#1e2229']],
        ['[netheme="default"] #containerEditable::-webkit-scrollbar',['width', '5px'],['background', '#transparent'],],
        ['[netheme="default"] #containerEditable::-webkit-scrollbar-thumb',['background', '#22272f'],['border-radius', '50px']],
        ['[netheme="default"] #fullscreen #containerEditable',['background', '#1a1d23']],
        ['[netheme="default"] .contextMenuCustom',['background', '#191b207a'],['color', '#949494'],],
        ['[netheme="default"] button[contextmenufunction]:hover',['background', '#2f31368a'],],
        ['[netheme="default"] .contextMenuCustom span[hr]',['background', '#7070703b'],],
        ['[netheme="default"] aside.menuClosed',['background', '#1e2229'],],
        ['[netheme="default"] .dfAAiZ .content',['background', 'linear-gradient(135deg, rgb(24 29 37) 0%, rgb(13 15 18) 100%)'],],
    
        [`[netheme="default"] ${dPS}.js_quot`,      ['color', 'hsl(22, 68%, 67%)'],],
        [`[netheme="default"] ${dPS}.js_quotv`,     ['color', 'hsl(22, 68%, 67%)'],],
        [`[netheme="default"] ${dPS}.js_decl`,      ['color', 'hsl(200, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.js_func`,      ['color', 'hsl(300, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.js_brkts`,     ['color', 'hsl(250, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.js_numb`,      ['color', 'hsl(136, 58%, 65%)'],],
        [`[netheme="default"] ${dPS}.js_logi`,      ['color', 'hsl(200, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.js_equa`,      ['color', 'hsl(200, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.html_angl`,    ['color', 'hsl(200, 10%, 45%)'],],
        [`[netheme="default"] ${dPS}.html_tags`,    ['color', 'hsl(  0, 75%, 70%)'],],
        [`[netheme="default"] ${dPS}.html_attr`,    ['color', 'hsl(200, 74%, 70%)'],],
        [`[netheme="default"] ${dPS}.html_attrv`,   ['color', 'hsl(22, 68%, 67%)'],],
        [`[netheme="default"] ${dPS}.html_quot`,    ['color', 'hsl(22, 68%, 67%)'],],
        [`[netheme="default"] ${dPS}.html_sign`,    ['color', 'hsl(0, 0%, 64%)'],],
        [`[netheme="default"] ${dPS}.html_brkts`,   ['color', 'hsl(250, 75%, 70%)'],],
    
    
        //COMMENTS
        [`[netheme="default"] ${dPS}.html_comm,[netheme="default"] ${dPS}.html_commhtml,
          [netheme="default"] ${dPS}.js_comm`,
          ['color', 'hsl(198, 29%, 32%)'],['font-style', 'italic'],
        ],
        //URLS/LINKS
        [`[netheme="default"] ${dPS}.html_url,[netheme="default"] ${dPS}.js_url`,
          ['border-bottom', 'solid 0.01rem currentColor'],
        ],
      ]);

      if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        }, false);
      } else {
        document.attachEvent('oncontextmenu', function() {
          window.event.returnValue = false;
        });
      }

    }
  }

  function addStylesheetRules (rules) {
    var styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
  
    for (var i = 0; i < rules.length; i++) {
      var j = 1,
          rule = rules[i],
          selector = rule[0],
          propStr = '';
      if (Array.isArray(rule[1][0])) {
        rule = rule[1];
        j = 0;
      }
      for (var pl = rule.length; j < pl; j++) {
        var prop = rule[j];
        propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
      }
      styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
    }
  }



