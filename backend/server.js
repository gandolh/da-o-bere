
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require('mongoose');
const express = require('express')
require('dotenv').config();

AdminJS.registerAdapter(AdminJSMongoose)

const app = express()
const port = process.env.PORT
mongoose.connect(process.env.mongodbUrl);
const User = mongoose.model('User', { AvatarUrl: String,TagName: String, BeerCount: Number})
const adminJs = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [User],
})


const router = AdminJSExpress.buildRouter(adminJs)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(adminJs.options.rootPath, router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
