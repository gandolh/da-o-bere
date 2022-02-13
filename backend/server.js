const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require('bcrypt')
require("dotenv").config();
// We have to tell AdminJS that we will manage mongoose resources with it
AdminJS.registerAdapter(AdminJSMongoose);


// express server definition
const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.mongodbUrl);

// Resources definitions
const User = mongoose.model("User", { AvatarUrl: String, TagName: String, BeerCount: Number });
const AdminUser = mongoose.model("AdminUser", {
	userName: { type: String, required: true },
	encryptedPassword: { type: String, required: true },
	role: { type: String, enum: ["admin", "restricted"], required: true },
});

// Pass all configuration settings to AdminJS
const UserControl = {
	name: "User Control",
	icon: "User",
};
const adminJsOptions = new AdminJS({
	databases: [],
	rootPath: "/admin",
	branding: {
		companyName: "Caciau Enterprise",
	},
	dashboard: {
		handler: async () => {
			console.log("1");
		},
		component: AdminJS.bundle("./my-dashboard-component"),
	},
	resources: [
		{ resource: User, options: { parent: UserControl } },
		{
			resource: AdminUser,
			options: {
				properties: {
					encryptedPassword: {
						isVisible: false,
					},
					password: {
						type: "string",
						isVisible: {
							list: false,
							edit: true,
							filter: false,
							show: false,
						},
					},
				},
				actions: {
					new: {
						before: async (request) => {
							if (request.payload.password) {
								request.payload = {
									...request.payload,
									encryptedPassword: await bcrypt.hash(request.payload.password, 10),
									password: undefined,
								};
							}
							return request;
						},
					},
				},
				parent: UserControl,
			},
		},
	],
    actions: {
        new: {
            before: async (request) => {
              if(request.payload.password) {
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                  password: undefined,
                }
              }
              return request
            },
          },
        edit: { isAccessible: false },
        delete: { isAccessible: false },
        new: { isAccessible: false },
    }
});

const defaultRouter = AdminJSExpress.buildRouter(adminJsOptions);

// Build and use a router which will handle all AdminJS routes
const authRouter = AdminJSExpress.buildAuthenticatedRouter(adminJsOptions, {
    authenticate: async (userName, password) => {
      const user = await User.findOne({ userName })
      if (user) {
        const matched = await bcrypt.compare(password, user.encryptedPassword)
        if (matched) {
          return user
        }
      }
      return false
    },
    cookiePassword: process.env.cookiePassword,
  })


app.get("/", (req, res) => {
	res.send("E viu!");
});

app.use(adminJsOptions.options.rootPath, defaultRouter);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
