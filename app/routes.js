var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/juggling-tricks', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-tricks')
} else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})


module.exports = router
