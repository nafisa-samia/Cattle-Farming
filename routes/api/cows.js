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
    check('selling_price', 'Selling Price is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const newCow = new Cow({
                cow_id: req.body.cow_id,
                type: req.body.type,
                selling_price: req.body.selling_price,
                purchase_date: req.body.purchase_date,
                current: req.body.current,
                weight: req.body.weight,
                color: req.body.color,
                temparature: req.body.temparature,
                humidity: req.body.humidity,
                grass: req.body.grass,
                solid: req.body.solid,
                milking: req.body.milking,

                name: user.name,
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
    .catch(err => res.status(404).send("No cows found" ));
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


module.exports = router;