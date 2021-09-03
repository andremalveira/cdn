//----------------------------------------------//
//                                              //
//     written by github.com/andremalveira      //
//                                              //
//----------------------------------------------//



//fetch =>   Equivalente ao load() do jquery

// COMO USAR:
// var minhaDiv = document.querySelector('#minhaDiv')
// var page = '../minhapagina.php ' //ou pagina.html
// insert(minhaDiv, page)

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



//fetch POST Equivalente ao Ajax do jquery

// COMO USAR:
// var formAddClient = document.getElementById('#formAddClient'); // ou document.querySelector('#formAddClient');
// var url = ''src/pages/dashpages/requisitionsClients/addClients.php''
// formPost(formAddClient, page)

//html 
// <form id="formAddClient" action="" autoComplete="off">
//    seus inputs
// </form>


async function formPost(form , url) {
  const formData = new FormData(form);
  fetch(url, {
    method: 'POST',
    body: formData
  }).then(function(response){
    return response.text();
  }).then(function(text){
    console.log(text); //RETORNO
  }).catch(function(error){
    console.log('Error: '+error);  //ERRO
  }) 
}

//event submit
formAddClient.addEventListener('submit', (e) => {
  e.preventDefault();
    formPost(formAddClient, page)
})




