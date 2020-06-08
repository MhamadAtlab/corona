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

    
fetch('https://covid19.mathdro.id/api/countries/'+name)
  .then(response => response.json())
  .then(json =>{
            while (lig.hasChildNodes()) {  
                lig.removeChild(lig.firstChild);
              }
            var nb=document.createElement('li');
            nb.innerHTML="Confirmed : "+json.confirmed.value;
            lig.appendChild(nb);
            var nb=document.createElement('li');
            nb.innerHTML="Recovered : "+json.recovered.value;
            lig.appendChild(nb);
            var nb=document.createElement('li');
            nb.innerHTML="Deaths : "+json.deaths.value;
            lig.appendChild(nb);
        
          
      
  })
  
}
