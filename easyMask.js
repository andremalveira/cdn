//----------------------------------------------//
//                                              //
//     written by github.com/andremalveira      //
//                                              //
//----------------------------------------------//

const easyMask = (clientFormatMask) => {
  var allInputs = document.querySelectorAll('input[easymask]');
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

  function ifKeyExist(obj,key){
    if( obj[key] == undefined ){return false;}else{return true;}
  }

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