const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');


const Cow = require('../../models/Cow');

// @route   GET api/cows
// @desc    Tests cow route
// @access  Public
// router.get("/", (req, res) => res.json({ msg: "Cow Works" }));


// @route    POST api/cows
// @desc     Add a Cow
// @access   Private
router.post('/', auth,
    check('cow_id', 'Cow ID is required').notEmpty(),
    // check('selling_price', 'Selling Price is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const newCow = new Cow({
                text: req.body.text,
                cow_id: req.body.cow_id,
                date: req.body.date,
                selling_price: req.body.selling_price,
                purchase_date: req.body.purchase_date,
                cow_image: req.body.cow_image,
                weight: req.body.weight,
                color: req.body.color,
                origin: req.body.origin,
                farmer_name: user.name,
                avatar: user.avatar,
                user: req.user.id,
            });

            const cow = await newCow.save();
            res.json(cow);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   GET api/cows
// @desc    Get cows
// @access  Public
router.get("/", (req, res) => {
    Cow.find().sort({ date: -1 }).then(cows => res.json(cows))
        .catch(err => res.status(404).send("No cows found"));
});


// @route   GET api/cows/:id
// @desc    Get cow by id
// @access  Public
router.get("/:id", (req, res) => {
    Cow.findById(req.params.id)
        .then(cow => res.json(cow))
        .catch(err =>
            res.status(404).json({ nocowfound: "No cow found with that ID" })
        );
});

// @route    DELETE api/cows/:id
// @desc     Delete a cow
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const cow = await Cow.findById(req.params.id);
        if (!cow) {
            return res.status(404).json({ msg: 'Cow not found' });
        }
        // Check user
        if (cow.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        await cow.remove();
        res.json({ msg: 'Cow removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route    Cow api/cows/comment/:id
// @desc     Create a comment on a cow
// @access   Private
router.post('/comment/:id', auth,
    check('text', 'Text is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const cow = await Cow.findById(req.params.id);
            const newComment = {
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id
            };

            cow.comments.unshift(newComment);

            await cow.save();
            res.json(cow.comments);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


// @route    DELTE api/posts/comment/:id:comment_id
// @desc     Delete a comment on a post
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {
        const cow = await Cow.findById(req.params.id);
        // Poll out comment
        const comment = cow.comments.find(comment => comment.id === req.params.comment_id);
        // Make sure comment exists
        if (!comment) {
            return res.status(404).json({ msg: 'Comment does not exist' });
        }

        // Check user
        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // Get remove index
        const removeIndex = cow.comments.map(comment => comment.user.toString()).indexOf(req.user.id);
        cow.comments.splice(removeIndex, 1);
        await cow.save();

        res.json(cow.comments);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


module.exports = router;