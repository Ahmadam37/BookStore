let array = [
    [1, "Start with why" , "Simon Sinek" , 80.0 , 13 ],
    [2, "But how do it know" , "J. Clark Scott" , 80.0 , 13],
    [3, "Clean Code" , "Robert Cecil Martin" , 80.0 , 13 ], 
    [4, "Zero to One" , "Peter Thiel" , 80.0 , 13 ]
    ];
    
    /* 
    array[0][1] = "Ahmad"
    console.log(array[0][1])  */
 
  
function add(bookTitle, auther, price, quantity) {

    array.push([array.length + 1, bookTitle, auther, price, quantity]);
    console.log(array);

}

function deleteB(){
    
    array.pop();
    console.log(array);
}



function editBook(id , bookTitle , auther , price , quantity){
    if(id == array[0][0]){
        array[0][1] = bookTitle;
        array[0][2] = auther;
        array[0][3] = price;
        array[0][4] = quantity; 
    }else if(id == array[1][0]){
        array[1][1] = bookTitle;
        array[1][2] = auther;
        array[1][3] = price;
        array[1][4] = quantity; 
    }else if(id == array[2][0]){
        array[2][1] = bookTitle;
        array[2][2] = auther;
        array[2][3] = price;
        array[2][4] = quantity; 
    }else if(id == array[3][0]){
        array[3][1] = bookTitle;
        array[3][2] = auther;
        array[3][3] = price;
        array[3][4] = quantity; 
    }else{
        console.log("Please try agin later");
    }

    console.log(array);
    console.log("The book id: "+ id + " edited succussfully");

}
 


function checkBook(id , bookTitle , auther){

    for(let i = 0 ; i < array.length ; i ++){
        if(id == array[i][0] || bookTitle == array[i][1] || auther == array[i][2]){
            console.log("we found the record");
            break;
        }
    }
}


function buyABook(bookTitle , quantity , currentBalance){

    for(let i = 0 ; i < array.length ; i ++){
        if(bookTitle == array[i][1] && quantity <= array[i][4] && currentBalance > array[i][3] * quantity){
            array[i][4] -= quantity
            console.log("you have been purchased the book " + bookTitle + " you took " + quantity + " And you paid " + array[i][3] * quantity + " the current quantity = " + array[i][4]);
            
        }else{
            console.log("We could't found the book: " + bookTitle + " or the quantity bigger than: " + array[i][4] + " or check your balance: " + currentBalance)
        }
    }
    
    console.log(array);
}

    // editBook(2 , "Edit Book code" , "Ahmad Binaman" , 20.0 , 12);
    // add("AhmadBook" , "Ahmad" , 22.0 , 13);
    // add("Ahmad Book" , "Ahmad Binmana" , 22.0 , 13);
    // checkBook(10 , "Peter Thiel" ,"Peter Thiel")
    buyABook("AhmadBook" , 2 , 1000);
    
    
    // function editBook(id ,bookTitle , auther , price , quantity){
    
//     for(let i = 0 ; i <= array.length ; i++){
//         if(i == 0){
//                 array[id][i] = id
//                  array.push(array[id][i])
//         }else if(i == 1){
//         array[id][i] = bookTitle
//                 array.push(array[id][i])
//         }else if(i == 2){
//                         array[id][i] = auther
//                     array.push(array[id][i])
//         }
//         else if(i == 3){
//                         array[5][i] = price;
//                     array.push(array[id][i]);
//         }else if(i == 4){
//                         array[id][i] = quantity;
//                     array.push(array[id][i]);
//         }
//         else{
//         console.log("err")
//         }
//     }
//          console.log(array)
//     }