const ques = document.getElementsByClassName('ques__que');

for (let que of ques) {
  que.addEventListener('click', (e) => {
    que.classList.toggle('ques__que--closed');
  }); 
}
