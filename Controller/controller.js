'use strict';
var express = require('express');
var router = express.Router();
var apiProvider = require('../Provider/apiProvider');

var status = ''
var statusCode = ''

  router.route('/GetMasterBranch').get(async(request, response) => {
    status = 'Success'
    statusCode = '200'
    let getMasterBranch = await apiProvider.getMasterBranch()
    
    response.json({status, statusCode, data:getMasterBranch[0]});
  })

  router.route('/GetMasterProduct').get(async(request, response) => {
    status = 'Success'
    statusCode = '200'
    let getMasterProduct = await apiProvider.getMasterProduct()
    
    response.json({status, statusCode, data:getMasterProduct[0]});
  })

  router.route('/GetAllDataCust').get(async(request, response) => {
    status = 'Success'
    statusCode = '200'
    let getAllDataCust = await apiProvider.getAllDataCust()
    
    response.json({status, statusCode, data:getAllDataCust[0]});
  })

  router.route('/GetDataCustomer/id=:id').get((request, response) => {
    status = 'Success'
    statusCode = '200'

    apiProvider.getDataCustomer(+request.params.id).then((data) => {
      response.json({status, statusCode, data:data[0]});
    })   
  })

  router.route('/SaveDataCust').post((request, response) => {   
    let req = {...request.body}

    apiProvider.saveDataCust(req).then((data) => {
    response.json(data[0]);
    })
  })

  router.route('/UpdateDataCust').post((request, response) => {
    let req = {...request.body}

    apiProvider.updateDataCust(req).then((data) => {
    response.json(data[0]);
    })
  })

  router.route('/DeleteDataCust').post((request, response) => {
    let req = {...request.body}
    
    apiProvider.deleteDataCust(req).then((data) => {
    response.json(data[0]);
    })
  })


  module.exports = router


