show databases
show collections

use next-graphql-typecript

// db.users.drop()
// db.users.find().pretty()
// db.users.find().count()
// db.users.find({}, { email: 1, password: 1 }).limit(1).pretty()

// db.products.find().pretty()
// db.products.find().count()
// db.products.drop()
// db.products.find().limit(1).pretty()
db.products.find({}, { coverPhoto: 0, images: 0 }).limit(1).pretty()
// db.products.find({ slug: 'sunt-aut-facere-repellat-provident' }, { coverPhoto: 0, images: 0 }).limit(1).pretty()

// db.reviews.find().pretty()
// db.reviews.find().count()
// db.reviews.drop()

