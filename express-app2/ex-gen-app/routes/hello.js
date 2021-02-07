const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    var data={
        title:'Hello!',
        content:'これは、サンプルのコンテンツです。',
    };
    res.render('hello',data);
});

module.exports=router;