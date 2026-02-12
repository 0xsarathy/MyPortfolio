function showCerts(){
  const certSection = document.getElementById('certifications');
  if(certSection.classList.contains('hidden')){
    certSection.classList.remove('hidden');
    certSection.scrollIntoView({behavior:'smooth'});
  } else {
    certSection.classList.add('hidden');
  }
}
