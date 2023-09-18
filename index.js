// 1 

for(let i = 0; i < 101; i += 1){
    if( i >= 5) {
        console.log(i);
    }
}


// 2

const array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]

for(let i = 0; i < array1.length; i += 1){
    if(  array1[i]> 0 && array1[i] <10){
        console.log(array1[i])
    }
}


// 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < 10; i += 1){
    if( i == 5){
        break;
    }

    console.log(i);
}



// 4

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let i = 0; i < users.length; i += 1) {
    if(users[i].status == true) {
      console.log(users[i].username + " " + users[i].status)
    }
  }
