gsap.to('.container', {delay:4, opacity:1, duration:2})
//Typewriter line 1

let welcome = 'Welcome!';
let i=0;
let speed = 100;

function text(){
    if (i < welcome.length){
    document.querySelector('.welcome').textContent += welcome.charAt(i);
    i++;
    setTimeout(text,speed);
    }
}
text();

//Typewriter line 2

let ready = 'Are you ready to play?'
let j=0;
let speedTwo = 100;

function textTwo(){
    if (j < ready.length){
        document.querySelector('.ready').textContent += ready.charAt(j);
        j++;
        setTimeout(textTwo, speedTwo);
        }
}
setTimeout (textTwo, 1300);

// Game + alerts

const input = document.querySelector('.guess');
const button = document.querySelector('.btn');
const computerAnswer = Math.floor(Math.random()*20)+1;
let k = 5;

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        play();
    }
})

button.addEventListener('click', play);
    function play(){
    k--;
    
    const userAnswer = document.querySelector('.guess').value;
    if (userAnswer <1 || userAnswer >20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a number from 1 to 20!',
        })
    }
    else if (isNaN(userAnswer)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a number!',
        })
    }
    else{
            if (userAnswer < computerAnswer){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter a larger number!',
            })
            if (k < 1){
                Swal.fire({
                    icon: 'error',
                    title: 'Game Over',
                    text: `You've exceeded maximum number of attempts.`,
                })
                k=0;
            }
        }
        else if(userAnswer > computerAnswer){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a smaller number!',
            })
            if (k < 1){
                Swal.fire({
                    icon: 'error',
                    title: 'Game Over',
                    text: `You've exceeded maximum number of attempts.`,
                })
                k=0;
            }
        }
        else{
            Swal.fire({
                title: 'Congratulations!',
                text: 'You won!',
                imageUrl: 'https://images.unsplash.com/photo-1530298733619-5c7e489c5942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2018&q=80',
                imageWidth: 400,
                imageHeight: 500,
                imageAlt: 'Victory',
            })
        }
    }


    document.querySelector('.attempts').textContent = 'Attempts left: ' + k;
    input.value='';
}