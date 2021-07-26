//QuerySelector/All
function selector(url) {
    if(document.querySelectorAll(url).length > 1){
      return document.querySelectorAll(url);
    } else {return document.querySelector(url);}
} 
function selectorAll(url) {
  return document.querySelectorAll(url);
} 

HTMLElement.prototype.selectAll = function(e){
  return this.querySelectorAll(e)
};
HTMLElement.prototype.select = function(e){
  return this.querySelector(e)
};


//fetch
async function insert(local, url){
  fetch(url)
  .then(function (response) {
    return response.text();
  })
  .then(function (body) {
    local.innerHTML = body;
    var notifyScript= local.getElementsByTagName("script");
    if(notifyScript){
      var scripts = local.getElementsByTagName('script');
      Array.prototype.forEach.call (scripts, function (script) {
        var scriptText = script.innerText;

        var newScript = document.createElement('script');
            newScript.innerHTML = scriptText;
        script.parentElement.appendChild(newScript);
        script.remove();
      });
    }
  });
}  

//fetch POST 
  async function formPost(form , url) {
    const formData = new FormData(form);
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(function(response){
      return response.text();
    }).then(function(text){
      notify(text);
    }).catch(function(error){
      notify('Error: '+error);
    }) 
  }

//string POST 
  async function stringPost(string , url) {

    if(isString(string) || isObject(string)){

      if(string){
        var formData = new FormData();
        for ( var key in string ) {
          formData.append(key, string[key]);
        }
        fetch(url, {
          method: 'POST',
          body: formData
        }).then(function(response){
          return response.text();
        }).then(function(text){
          notify(text);
        }).catch(function(error){
          notify('Error: '+error);
        }) 
      } 
    } else {
      console.error('stringPost() diz: O parâmetro "'+string+'" passado não é uma String ou um Objeto.');
    }

  }

//NOTIFY
  const notify = (text, settings) =>{
    let body = document.body ?? document.documentElement;
    settings = settings ?? {};

    if(body){

      if(body.children["notify"]){body.children["notify"].remove()}

      body.insertAdjacentHTML('beforeend', `
        <div id="notify"><div class="message"><div class="text">${text}</div></div></div>
      `);

      const notify = body.children["notify"];

      var notifyScript= notify.getElementsByTagName("script");
      if(notifyScript){
        var scripts = notify.getElementsByTagName('script');
        Array.prototype.forEach.call (scripts, function (script) {
          var scriptText = script.innerText;

          var newScript = document.createElement('script');
              newScript.innerHTML = scriptText;
          script.parentElement.appendChild(newScript);
          script.remove();
        });
      }

      //functions
      function closeNotify(time) {
        var time = time ?? 2800;
        setTimeout(() => {
          notify.classList.remove('visible');
           setTimeout(() => {
            notify.remove();
          }, time + 100); 
        }, time); 
      }
      function openNotify() {
        notify.classList.add('visible');
      }
      //settings arr
      var position = settings['position'] ?? 'bottom';
      var autoClose = settings['autoClose'] ?? true;
      var color = settings['color'] ?? settings['type'] ?? 'linear-gradient(339deg, rgba(104,76,176,1) 0%, rgba(114,104,207,1) 100%)';
          if(color == 'error'){
            color = 'linear-gradient(339deg, rgba(210,84,84,1) 0%, rgba(235,97,97,1) 100%)'
          } else if(color == 'warning'){
            color = 'linear-gradient(339deg, rgba(194, 149, 62) 0%, rgba(248, 204, 81) 100%)'
          } else if(color == 'success'){
            color = 'linear-gradient(339deg, rgba(76,176,105,1) 0%, rgba(104,207,169,1) 100%)'
          } else if(color == 'info'){
            color = 'linear-gradient(339deg, rgba(52, 105, 210) 0%, rgba(116, 172, 230) 100%)'
          } 
      var confirmation = settings['confirmation'] ?? false;
      var lang = settings['lang'] ?? 'pt-br';

      var translate = {
        'pt-br':{
          'ok':'OK',
          'cancel':'Cancelar'
        },
        'es-us':{
          'ok':'OK',
          'cancel':'Cancel'
        }
      }

      //conditions
      if(confirmation) {
        notify
          .firstElementChild
          .insertAdjacentHTML('beforeend',`
            <div class="buttons">
              <div id="confirm">${translate[lang].ok}</div>
              <div id="cancel">${translate[lang].cancel}</div>
            </div>
          `);
        notify.style.maxHeight = 'inherit';
        autoClose = false;
        if(!settings['position']){position = 'top'};
        if(!settings['color'] && !settings['type']){color = 'linear-gradient(320deg, rgba(198,54,54,1) 0%, rgba(238,205,73,1) 100%)';}

        body.insertAdjacentHTML('beforeend', '<div id="notifyOverlay"></div>')
        var notifyOverlay = body.children["notifyOverlay"];

        var buttonConfirm = notify.querySelector('#confirm');
        var buttonCancel = notify.querySelector('#cancel');

        buttonConfirm.addEventListener('click', (e) => {
          (!isFunction(confirmation)) ? (console.error('Notify diz: O valor "'+confirmation+'" que você passou não é uma função. Informe o nome da sua função, Ex: {confirmation: NomeDaSuaFunção} sem parênteses "()."'),
          console.error('Notify says: The "'+confirmation+'" value you passed is not a function. Enter the name of your function, Eg: {confirmation:NameOfYourFunction} without parentheses "()."'))
          : confirmation()
          if(isFunction(confirmation)){closeNotify(0);notifyOverlay.remove();}
        })
        buttonCancel.addEventListener('click', (e) => {
          closeNotify(0);
          notifyOverlay.remove();
        })
        notifyOverlay.addEventListener('click', (e) => {
          notify.firstElementChild.style.animation='shake 0.82s cubic-bezier(.36,.07,.19,.97) both';
          setTimeout(() => {
            notify.firstElementChild.style.animation='';
          }, 500);
        })

      }
      if(position){
        notify.setAttribute(position, '');
        notify.firstElementChild.style.animationName='notify'+position;
      }
      if(color){
        notify.firstElementChild.style.background=color;
      }


      openNotify();
      if(autoClose){closeNotify()}

    } else {console.error('<body> ou <html> Não Localizado')}
    
  } 


//loadScriptDinamico
  const loadScriptDinamico = () => {
    var scripts = notify.getElementsByTagName('script');
    Array.prototype.forEach.call (scripts, function (script) {
      var scriptText = script.innerText+'console.log("ok")';

      var newScript = document.createElement('script');
          newScript.innerHTML = scriptText;
      script.parentElement.appendChild(newScript);
      script.remove();
    });
  }

//ifKeyExist?
  function ifKeyExist(obj,key){
    if( obj[key] == undefined ){
        return false;
    }else{
        return true;
    }
  }
//isFunction?
  function isFunction(variable) {
    if (variable instanceof Function || typeof variable ==='function') {
        return true;
    }
    return false;
  }
//isString?
  function isString(variable){
    if(typeof variable === 'string' || variable instanceof String == true){ 
      return true
    }
    return false
  }
//isObject?
  function isObject(variable){
    if(typeof variable === 'object' || variable instanceof Object == true){ 
      return true
    }
    return false
  }

//MASK's
  const easymask = (clientFormatMask) => {
    var allInputs = selectorAll('input[easymask]');
    var codOk = null;

    var formatMask = {
      "cpf":"000.000.000-00",
      "cnpj":"00.000.000/0000-00",
      "tel":"0000-0000",
      "ddd+tel":"(00) 0000-0000",
      "cel":"00000-0000",
      "ddd+cel":"(00) 00000-0000",
      "cep":"00000-000",
      "date":"00/00/0000",
      "time":"00:00:00",
      "dateTime":"00/00/0000 00:00:00",
      "currency":["000.000.000,00", reverse = true],
      "millimeter":["0mm", reverse = true],
      "centimeter":["00,0cm", reverse = true],
      "meter":["000,00m", reverse = true],
      "ip":"000.000.000.000", 
      "onlyLetters":"",
      "onlyNumbers":"",
    };

    (clientFormatMask) 
      ? formatMask = Object.assign({}, formatMask, clientFormatMask) 
      : formatMask;

    Array.prototype.forEach.call (allInputs, function (inputs) {
      var inputsValue = inputs.attributes["easymask"].value;
      (inputsValue == '') 
      ? (console.error('pt-BR: Fala dev! O Atributo [easymask=""] do input está vazio, informe um tipo de máscara como valor. Ex: easymask="cpf", "cnpj", "cep" e etc...'),
        console.error('en-US: Speak dev! Input attribute [easymask=""] is empty, enter a mask type as value. Ex: easymask="cpf", "cnpj", "zip" and etc... '), codOk = false)
      : (ifKeyExist(formatMask, inputsValue) == false) 
      ? (console.error('pt-BR: Fala dev! A Máscara "'+inputsValue+'" em [easymask="'+inputsValue+'"] não existe, verifique se o nome está correto, ou declare a máscara dessa maneira: easymask({"'+inputsValue+'":"formato da máscara, Ex: 00.00.00"})'),
        console.error('en-US: Speak dev! Mask "'+inputsValue+'" in [easymask="'+inputsValue+'"] does not exist, check that the name is correct, or declare the mask like this: easymask({"'+inputsValue+'":"mask format, Ex: 00.00.00"})'), codOk = false)
      : codOk = true;

      if(codOk){
        var formatMaskValue = 
          (isArray = Array.isArray(formatMask[inputsValue]) == true) ?
            (formatMask[inputsValue][0] ): 
              formatMask[inputsValue];
          (isArray == true) 
            ? reverse = formatMask[inputsValue][1] 
            : (reverse == true) 
            ? reverse = formatMask[inputsValue][1] 
            : reverse = false;

        if (inputsValue == 'onlyNumbers' || inputsValue == 'onlyLetters') {
          const onlyLetters = value => {return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");};
          const onlyNumbers = value => {return value.replace(/\D/g, "");          };

          if(inputsValue == 'onlyNumbers') {
            inputs.addEventListener("input", function() {
              var i = inputs.value.length;
              var str = inputs.value
              if (isNaN(Number(str.charAt(i-1)))) {
                inputs.value = str.substr(0, i-1)}
            });
            inputs.addEventListener('keyup', function(event) { 
              if(event.keyCode != 46 && event.keyCode != 8){
                inputs.value = onlyNumbers(inputs.value); 
  
              }
            });  
          } else if(inputsValue == 'onlyLetters') {
            inputs.addEventListener("input", function() {
              var i = inputs.value.length;
              var str = inputs.value
              if (Number(str.charAt(i-1))) {
                inputs.value = str.substr(0, i-1)}
            });
            inputs.addEventListener('keyup', function(event) { 
              if(event.keyCode != 46 && event.keyCode != 8){
                inputs.value = onlyLetters(inputs.value); 
  
              }
            });  
          }

        } else {

          inputs.setAttribute('maxlength', formatMaskValue.length);
          inputs.addEventListener("input", function() {
            var i = inputs.value.length;
            var str = inputs.value
            if (isNaN(Number(str.charAt(i-1)))) {
              inputs.value = str.substr(0, i-1)
            }
          });

          String.prototype.reverse = function(){
            return this.split('').reverse().join(''); 
          };

          var reverse = reverse;
          const insertMask = value =>{
            var inputValue  =  (reverse == true) 
            ? value.replace(/[^\d]+/gi,'').reverse()
            : value.replace(/[^\d]+/gi,'');

            var inputValueLength  =  (reverse == true) 
            ? inputValue.length
            : inputValue.length+1;

            var result  = "";
            var mask = (reverse == true) 
            ? formatMaskValue.reverse()
            : formatMaskValue;

            for (var x=0, y=0; x<mask.length && y<inputValueLength;) {
              if (mask.charAt(x) != '0') {result += mask.charAt(x);x++;
              } else { result += inputValue.charAt(y);y++;x++;}
            } return (reverse == true) ? result.reverse() : result;
          }

          var key = (reverse) ? 'keyup' : 'keydown';
          inputs.addEventListener(key, function(event) { 
            if(event.keyCode != 46 && event.keyCode != 8){
              inputs.value = insertMask(inputs.value); 
            }
          });  

        }

      }

    })
    
  }

//MASKip
  function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null; 
        return String.fromCharCode(event.which); 
    }
    return null; 
  }

  function maskIP(e){
      let key = getChar(e);
      if((!((key >= 0 && key <= 9) || key == '.'))  || this.value.length >= 15) e.preventDefault();
      if (this.value.indexOf('.') == -1){
          if (this.value.length >= 3 && key != '.') {e.preventDefault();}
      }
      else{
          if(this.value.lastIndexOf('.') == this.value.length - 1 && key == '.') {
            e.preventDefault();}
          if ((this.value.length - this.value.lastIndexOf('.') > 3 && key != '.') || (key == '.' && this.value.split(".").length - 1 >= 3)) {
            e.preventDefault(); 
          }
      }
  }
/* serch = document.getElementById("#id of your element"); //can use others
serch.addEventListener('keypress', maskIP); */



//FULLSCREEN
  const fullscreen = {
    getFullScreenElement() {
      return document.fullscreenElement
          || document.webkitFullscreenElement
          || document.mozFullscreenElement
          || document.msFullscreenElement;
    },
    request() {
      document.documentElement.requestFullscreen()
        .catch(console.error)
    },
    exit() { 
        document.exitFullscreen();
    }
  }





















