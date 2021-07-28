const express = require("express");
const router = express.Router();
const companyMainControler = require("../controllers/CompanyMainController");
const snapShotControler = require("../controllers/SnapShotController");
//test modle
const snapShotControlerTest = require("../controllers/SnapShotControllerTest");

router.get('/', companyMainControler.baseRoute); 
router.get('/get-info', companyMainControler.getAllInfo);
router.post('/create-info', companyMainControler.createInfo);
router.put('/update-info/:id', companyMainControler.updateInfo);
router.get('/get-info-id/:id', companyMainControler.getInfoById);
router.delete('/remove-info/:id', companyMainControler.deleteInfo);

router.get('/get-snapshot', snapShotControler.getAllSnapShots);
router.post('/create-snapshot', snapShotControler.createSnapShot);
router.put('/update-snapshot/:id', snapShotControler.updateSnapShot);
router.get('/get-snapshot-id/:id', snapShotControler.getSnapShotById);
router.delete('/remove-snapshot/:id', snapShotControler.deleteSnapShot);

//test route
router.get('/get-snapshot-test', snapShotControlerTest.getAllSnapShotsTest);
router.post('/create-snapshot-test', snapShotControlerTest.createSnapShotTest);
router.put('/update-snapshot-test/:companyId/:employeeId', snapShotControlerTest.updateEmployee);
router.put('/update-snapshot-test/:companyId', snapShotControlerTest.updateCompany);
router.get('/get-snapshot-id-test/:id', snapShotControlerTest.getSnapShotByIdTest);
router.delete('/remove-snapshot-test/:id', snapShotControlerTest.deleteSnapShotTest);



module.exports = router;


//NOTE correct shap to SNAP