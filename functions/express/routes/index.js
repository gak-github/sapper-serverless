const express = require("express");
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        return res.status(200).json({
            success: true,
            message: 'success'
          });
    });

module.exports = router;