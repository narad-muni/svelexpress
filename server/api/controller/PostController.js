exports.PostController = function(req,res){
    res.write("Handeled by post controller\n");
    res.write("Middleware Data : "+req.msg);
    res.send();
}