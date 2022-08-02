var  config = require('../Setting/connectionString');
const  sql = require('mssql');

async function getMasterBranch(){
    try{
        let conn = await sql.connect(config);
        let masterBranch = await conn.request()
        .execute('DBJS.dbo.spGetMasterBranch')
        return masterBranch.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function getMasterProduct(){
    try{
        let conn = await sql.connect(config);
        let masterProduct = await conn.request()
        .execute('DBJS.dbo.spGetMasterProduct')
        return masterProduct.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function getDataCustomer(ID){
    try{
        let conn = await sql.connect(config);
        let dataCustID = await conn.request()
        .input('ID',sql.Int, ID)
        .execute('DBJS.dbo.spGetDataCustomer')      
        return dataCustID.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function getAllDataCust(){
    try{
        let conn = await sql.connect(config);
        let allDataCust = await conn.request()
        .execute('DBJS.dbo.spGetAllDataCust')
        return allDataCust.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function saveDataCust(req){
    try{
        let conn = await sql.connect(config);
        let saveCust = await conn.request()
        .input('FIRSTNAME',sql.VarChar, req.firstName)
        .input('LASTNAME',sql.VarChar, req.lastName)
        .input('PHONENUMBER',sql.VarChar, req.phoneNumber)
        .input('BRANCH',sql.Int, req.branch)
        .input('PRODUCT',sql.Int, req.product)
        .input('TENOR',sql.Int, req.tenor)
        .input('AVATAR',sql.VarChar,req.avatar)
        .execute('DBJS.dbo.spSaveDataCust')
        return saveCust.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function updateDataCust(req){
    try{
        let conn = await sql.connect(config);
        let updateCust = await conn.request()
        .input('CUSTID',sql.Int, req.custId)
        .input('FIRSTNAME',sql.VarChar, req.firstName)
        .input('LASTNAME',sql.VarChar, req.lastName)
        .input('PHONENUMBER',sql.VarChar, req.phoneNumber)
        .input('BRANCH',sql.Int, req.branch)
        .input('PRODUCT',sql.Int, req.product)
        .input('TENOR',sql.Int, req.tenor)
        .execute('DBJS.dbo.spUpdateDataCust')
        return updateCust.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function deleteDataCust(req){
    try{
        let conn = await sql.connect(config);

        let deleteCust = await conn.request()
        .input('ID',sql.Int, req.id)
        .execute('DBJS.dbo.spDeleteDataCust')
        return deleteCust.recordsets
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    getMasterBranch  : getMasterBranch,
    getMasterProduct : getMasterProduct,
    getAllDataCust   : getAllDataCust,
    getDataCustomer  : getDataCustomer,
    saveDataCust     : saveDataCust,
    updateDataCust   : updateDataCust,
    deleteDataCust   : deleteDataCust

}