//fCC JavaScript Solutions
//Owner
//jawacaser
//Modified
//Mar 14, 2022 by me
//Opened
//8:56 PM by me
//Created
//Mar 17, 2022 with Google Drive Web
//Add a description
//Viewers can download

function palindrome(str) {
  let arr = [...str]
  let filtArr = arr.filter(function filtArr() {
    let nono = /[a-z]|[0-9]/ig
    for (let i = 0; i < arguments.length; i++) {
    return nono.test(arguments[0])
    }
  })
  console.log(filtArr.join("").toLowerCase())

  let revArr = [];
  for (let r = filtArr.length-1; r > -1; r--) {
    revArr.push(filtArr[r]);
  }
  console.log(revArr.join("").toLowerCase())

  if (filtArr.join("").toLowerCase() == revArr.join("").toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("A man, a plan, a canal. Panama"));
