
const User = require('../models/userModel.js')
const resolvers = {
Mutation: {
     async addUser(parent, args, context, info) {
        const user = new User({
            name: args.name,
            email: args.email,
            password: args.email
        })
        await user.save()
        return user
     }
    }
}
module.exports = resolvers;