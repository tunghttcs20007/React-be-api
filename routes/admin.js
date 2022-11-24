const express = require('express');
const router = express.Router();

/** Import Middlewars Function - Auth Controller */
const { authVerifyToken, verifyAdminRole } = require('../middlewares/auth');

/** Import User Controllers - CRUD */
const {getAllOrders, updateOrderStatus} = require('../controllers/admin');

router.get('/admin/order/list-all', authVerifyToken, verifyAdminRole, getAllOrders);
router.put('/admin/order/status', authVerifyToken, verifyAdminRole, updateOrderStatus);

module.exports = router;
