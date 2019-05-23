const { Router } = require('express');
const { warehouseArray, inventoryArray } = require('../data/data');
const router = Router();

const getData = (req, res) => {
    res.json(data)
}

app.route('/data')
.get(getData);


router.get('/', getAllVideos);
router.post('/', uploadVideo);
router.post('/:id/comments/', postComment);
router.get('/:id', getSingleVideo);
router.delete('/:id/comments/:commentId', deleteComment);

module.exports = router;

