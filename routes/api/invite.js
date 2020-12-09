express = require('express');
router = express.Router();

// router.post('/', (req,res) => {
//     try {
//         console.log('wHATS IN REQ BODY', req.body)
//         res.json({'test': 'test'})
//     } catch(err) {
//         console.log(err.message)
//     } 
// })

router.post('/', (req,res) => {

        res.json({'test': 'test'})

    
})

module.exports = router;