/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  delay: 200
});

sr.reveal('.logo');
sr.reveal('.title');
sr.reveal('.content__img');
sr.reveal('.content__premium');
sr.reveal('.footer');

/*=============== Preview component ===============*/
const addPreview = () => {
  const previewEl = '<div class="preview"><p>This is just a preview</p></div>';
  document.body.insertAdjacentHTML('beforeend', previewEl);
  setTimeout(() => {
      document.body.querySelector('.preview').remove();
  }, 3000)
};

const preview = () => {
  !document.body.querySelectorAll('.preview').length && addPreview();
};

document.body.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', preview));
