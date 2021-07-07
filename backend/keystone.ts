import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import {createAuth} from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {User} from './schemas/User';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/runa';

const sessionConfig = {
	maxAge: 60 * 60 * 24 * 360, //Time of sign in?
	secret: process.env.COOKIE_SECRET
}

const { withAuth } = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
	initFirstItem: {
		fields: ['name', 'email', 'password'],
		// TODO: Add initial roles here
	}
})

export default withAuth(
	config({
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
			User,
			Product,
			ProductImage,
		}),
		ui: {
		    // Show the UI only for people who pass this test
			isAccessAllowed: ({ session }) => {
				console.log(session);
				// turn into boolean
				return !!session?.data;
			},
		},
		session: withItemData(statelessSessions(sessionConfig), {
			User: 'is',
		}),
	})
);