const controller = require('../controllers/controller');

module.exports = router => {
  router.get('/health', controller.getHealth);
};
