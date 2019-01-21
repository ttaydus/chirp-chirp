
let call = '';

function chirp(n){
  
  if(n===0){
    call = '';
    return;
  } 

  console.log('n before:', n);
  chirp(--n);
  console.log('n after:',n); 
  call = call + ' chirp';
  console.log(call);
  return call;
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
