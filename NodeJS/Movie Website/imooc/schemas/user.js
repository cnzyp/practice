var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
	name:{
		unique: true,
		type: String
	},
	password: String,
	meta: {
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		},
	}
})

// execute function before saving data to database
UserSchema.pre('save',function(next){
	if (this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
		if (err) return next(err);

		bcrypt.hash(user.password,salt,function(err, hash){
			if(err) return next(err);

			this.password=hash;
			next()
		})
	})
})

//generate a randorm salt
bcrypt.genSalt(SALT_WORK_FACTOR,funtion(err,salt){
	if (err){
		 return next(err)
	}

	bcrypt.hash(user.password,salt,function(){

	})

})

UserSchema.statics={
	fetch: function(cb){
		return this.find({}).sort('meta.updateAt').exec(cb);
	},
	findById: function(id,cb){
		return this.findOne({_id:id}).exec(cb);
	}
}
module.exports = UserSchema