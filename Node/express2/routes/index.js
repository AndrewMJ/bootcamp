var express = require('express');
var router = express.Router();

let bandMembers =['Tommy Lee', 'Mick Marks']

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { theBand: bandMembers });
});

router.get('/remove/:member',(req, res, next)=>{
	const removeMember = req.params.member;
	const indexToSplice = bandMembers.indexOf(removeMember);
	if(indexToSplice > - 1){
		bandMembers.splice(indexToSplice,1)
	}
	res.redirect('/')

});

router.get('/add/:member',(req, res, next)=>{
	const newMember = req.params.member;
	bandMembers.push(newMember);
	res.redirect('/')
})
module.exports = router;
