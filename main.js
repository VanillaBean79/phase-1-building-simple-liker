// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likes = document.querySelectorAll(".like-glyph")
//  console.log(likes)
for(let i = 0; i < likes.length; i++){
  let heartButton = likes[i]
  heartButton.addEventListener("click",()=>{
    // console.log("hi")
    mimicServerCall()
    .then(value => {
      if(heartButton.textContent === EMPTY_HEART){
      heartButton.classList.add("activated-heart")
      heartButton.innerHTML = FULL_HEART}
      else{heartButton.classList.remove("activated-heart")
      heartButton.innerHTML = EMPTY_HEART}
    })
    .catch((err) => {
      console.error(err);
      const errorModal = document.getElementById("modal")
      errorModal.classList.remove("hidden")
      
      const myTimeout = setTimeout(() => {
        console.log("What the AF!")
        errorModal.classList.add("hidden")
      }, 3000);

      
      
    })

    });
  }

  

 



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
