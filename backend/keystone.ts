import {User} from './schemas/User';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/runa';

const sessionConfig = {
	maxAge: 60 * 60 * 24 * 360, //Time of sign in?
	secret: process.env.COOKIE_SECRET
}

export default config({
	server: {
		cors: {
			origin: [process.env.FRONTENT_URL],
			credentials: true,
		}
	},
	db: {
		adapter: 'mongoose',
		url: databaseURL,
		// TODO: add data seeding here
	},
	lists: createSchema({
		User
	}),
	ui: {
		// TODO: change this for roles
		isAccessAllowed: ()=> true,
	},
	// TODO: add session values here
});