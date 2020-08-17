const handleProfileGet = (req,res,db) =>{
	const {id} = req.params;
	found=false;
	db.select('*').from('users').where({id})
	.then(user=>{
		if(user.length){
			res.json(user[0])
		} else{
			res.status(400).json('not found');
		}
	})
}

module.exports = {
	handleProfileGet: handleProfileGet
}