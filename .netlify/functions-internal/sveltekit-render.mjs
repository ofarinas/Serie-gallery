import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["121361.xml","158661.xml","248741.xml","248742.xml","248835.xml","255316.xml","257655.xml","259972.xml","264108.xml","266189.xml","269586.xml","274431.xml","70533.xml","71663.xml","74608.xml","77398.xml","78804.xml","80379.xml","81670.xml","83462.xml","favicon.png"]),
	mimeTypes: {".xml":"application/xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.09b82de6.js","app":"_app/immutable/entry/app.4b188206.js","imports":["_app/immutable/entry/start.09b82de6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.7ae19f20.js","_app/immutable/entry/app.4b188206.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
