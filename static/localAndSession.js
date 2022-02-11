let localStorageSet
let intLocal
let setKey = 'ApinatId4'

let checkLocal = localStorage.getItem(setKey)
let checkSession = sessionStorage.getItem(setKey)

//sessionStorage.setItem("refresh", false)
//let checkRefresh = sessionStorage.getItem("refresh");

function checkTab() {
  if (checkLocal == null) {
    localStorageSet = '1'
    localStorage.setItem(setKey, localStorageSet)
    sessionStorage.setItem(setKey, localStorageSet)
    return true
  } else if (checkSession == null || checkSession === checkLocal) {
    localStorageSet = checkLocal
    intLocal = parseInt(localStorageSet)
    localStorageSet = (intLocal + 1).toString()
    localStorage.setItem(setKey, localStorageSet)
    sessionStorage.setItem(setKey, localStorageSet)
    return true
  } else {
    if (checkSession !== checkLocal /*&& checkRefresh == "false"*/) {
      localStorageSet = localStorage.getItem(setKey)
      intLocal = parseInt(localStorageSet)
      localStorageSet = (intLocal + 1).toString()

      localStorage.setItem(setKey, localStorageSet)
      sessionStorage.setItem(setKey, localStorageSet)
      //sessionStorage.setItem("refresh", false)
      return true
    }
    return false
  }
}

// window.onload = function () {
//     localStorage.clear();
//     sessionStorage.clear();
// };

function logStorageNow() {
  checkLocalNow = localStorage.getItem(setKey)
  checkSessioNow = sessionStorage.getItem(setKey)
  if (checkLocalNow != checkSessioNow) {
    document.getElementById('result').innerHTML = 'tab is bad'
    document.getElementById('result').style.color = 'red'
    console.log(checkLocalNow + ', ' + checkSessioNow)
    clearInterval(myInterval)
    // alert("Another tab is open!");
  }
}

if (checkTab()) {
  document.getElementById('result').innerHTML = 'tab is good'
  document.getElementById('result').style.color = 'green'
  //document.getElementById('result').title = 'Good!';
  logStorageNow()
} else {
  document.getElementById('result').innerHTML = 'tab is bad'
  document.getElementById('result').style.color = 'red'
  //document.getElementById('result').title = 'Bad!';
  logStorageNow()
}

console.log(checkLocalNow + ', ' + checkSessioNow)

const myInterval = setInterval(logStorageNow, 1000)
