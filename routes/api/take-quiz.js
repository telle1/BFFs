const express = require('express')
const router = express.Router();

router.get('/:quizId', (req,res) => {
    res.json({'test': 'test'})
}
)

module.exports = router;