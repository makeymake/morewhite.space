import polka from 'polka';
import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { manifest } from './manifest/server.js';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		serve('assets'),
		sapper({ manifest })
	)
	.listen(process.env.PORT);
