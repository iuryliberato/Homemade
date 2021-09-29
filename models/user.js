import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

//* User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

//* Virtual Field
userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

//* Custom pre-validation
userSchema
  .pre('validate', function(next){
    if (this.isModified('passwprd') && this.password !== this._passwordConfirmation){
      this.invalidate('passwordConfirmation', 'Passwords don\'t match')
    }
    next()
  })

//* Custom pre-save
userSchema
  .pre('save', function(next){
    if (this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

//* Save
userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}


userSchema.plugin(mongooseUniqueValidator)

//* Export 
export default mongoose.model('User', userSchema)
