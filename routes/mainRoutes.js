const express = require("express");
const router = express.Router();
const companyMainControler = require("../controllers/CompanyMainController");
const CompanyDetailsController = require("../controllers/CompanyDetailsController");

router.get('/', companyMainControler.baseRoute); 
router.get('/get-info', companyMainControler.getAllInfo);
router.post('/create-info', companyMainControler.createInfo);
router.put('/update-info/:id', companyMainControler.updateInfo);
router.get('/get-info-id/:id', companyMainControler.getInfoById);
router.delete('/remove-info/:id', companyMainControler.deleteInfo);

//test route
router.get('/get-snapshot-test', CompanyDetailsController.getAllCompanyDetails);
router.get('/get-snapshot-test/:index', CompanyDetailsController.getAllCompanyDetails);
router.post('/create-snapshot-test', CompanyDetailsController.createCompanyDetails);
router.put('/update-snapshot-test/:companyId/:employeeId', CompanyDetailsController.updateEmployee);
router.put('/update-snapshot-test/:companyId', CompanyDetailsController.updateCompany);
router.get('/get-snapshot-id-test/:companyId', CompanyDetailsController.getCompanyDetailsById);
router.delete('/remove-snapshot-test/:companyId', CompanyDetailsController.deleteCompanyDt);

module.exports = router;