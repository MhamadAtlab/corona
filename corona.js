fetch('https://covid19.mathdro.id/api/')
  .then(response => response.json())
  .then(json =>{
      var T1=document.getElementById('t1');
      T1.innerHTML=json.confirmed.value;
      var T2=document.getElementById('t2');
      T2.innerHTML=json.recovered.value;
      var T3=document.getElementById('t3');
      T3.innerHTML=json.deaths.value;
      
  })
function info(){
    var lig=document.getElementById('new');
    var name=document.getElementById('un').value;

    
fetch('https://covid19.mathdro.id/api/confirmed')
  .then(response => response.json())
  .then(json =>{
      for (let index = 0; index < json.length; index++) {
          if (json[index].countryRegion==name) {
            var nb=document.createElement('li');
            nb.innerHTML="Confirmed : "+json[index].confirmed;
            lig.appendChild(nb);
            var nb=document.createElement('li');
            nb.innerHTML="Recovered : "+json[index].recovered;
            lig.appendChild(nb);
            var nb=document.createElement('li');
            nb.innerHTML="Deaths : "+json[index].deaths;
            lig.appendChild(nb);
        }
          
      }
  })
  
}