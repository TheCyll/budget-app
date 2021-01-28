export function toggleForm(id) {
  const form = document.getElementById(id);
  const hasClass = form.classList.contains('d-none');
  
  if( !hasClass ) {
    form.classList.add('d-none');           
  }
  else {
    form.classList.remove('d-none');
  } 
}