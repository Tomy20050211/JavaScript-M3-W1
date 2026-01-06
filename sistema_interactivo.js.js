
const userName = prompt('Enter your name please');

const age = prompt('Enter your age please');
const dateAge = Number(age);


if (!isNaN(age)){
    console.log('Valid')
} else{
    console.error('Error, the data must be a number...')}


if (age < 0){
    alert('the number must be greater than 0')
}
else if(age < 18){
    alert('Hi ' + userName + 'You are underage. Keep learning and enjoying coding!')
}
else if(age >= 18){
    alert('Hi ' + userName + ' You are of legal age. Get ready for great opportunities in the world of programming!')
}