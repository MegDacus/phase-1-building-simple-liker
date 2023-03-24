// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector('.like-glyph');

heart.addEventListener('click', (e) => {
  mimicServerCall()
  .then((resp) => {
    if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.classList.add('activated-heart');
    }
    else if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch((error)=> {
    console.log(error)
    const hiddenModal = document.querySelector('#modal');
      hiddenModal.classList.remove("hidden");
      hiddenModal.innerText = error;
    setTimeout ((addHiddenClass) => {
      hiddenModal.classList.add('hidden');
    }, 3000)
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
