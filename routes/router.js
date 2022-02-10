const express = require('express')

const router = express.Router()
const storePro = require('local-storage-pro')
const localforage = require('localforage')
// const { storage } = require('local-storage-fallback')

localforage.setItem('key', '111', function (err) {
  // if err is non-null, we got an error
  let a = localforage.getItem('key', function (err, value) {
    // if err is non-null, we got an error. otherwise, value is the value
  })
  console.log(a)
})

var AppId = 'AppId41'
router.get('/', (req, res) => {
  var userID = storePro.getItem(AppId)
  // var userIDnew = storage.getItem(AppId)

  if (userID == null) {
    storePro.setItem(AppId, 1)
  } else if (userID > 0) {
    userID = userID + 1
    storePro.setItem(AppId, userID)
  }

  // if (userIDnew == null) {
  //   storage.setItem(AppId, 1)
  // } else if (userIDnew > 0) {
  //   userIDnew = parseInt(userIDnew) + 1
  //   storage.setItem(AppId, userIDnew)
  // }
  // console.log(userID + ', ' + userIDnew)

  console.log(userID)

  res.status(200)
  res.type('text/html')

  res.render('../static/index.html', { userID, AppId })
})

router.get('/checkStorage', (req, res) => {
  var userID = storePro.getItem(AppId)
  console.log('checkStorageAPI: ' + userID)
  res.status(200).send({
    userID,
  })
})

module.exports = router
