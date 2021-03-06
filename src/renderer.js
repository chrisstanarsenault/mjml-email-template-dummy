const mjml2html = require('mjml');
const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');

const { email } = require('./email.js');
const { body } = require('./views/body.js');

exports.renderHtml = async function renderHtml(payload) {
	// Create an instance of Vue.
	const app = createSSRApp({
		data() {
			return {
				email: payload.email,
			};
		},

		components: {
			Body: body,
			Email: email,
		},

		template: `
      <Email>
				<Body v-bind="{ email }" />
      </Email>
    `,
	});

	// Tell Vue to recognize mjml components. See: https://v3.vuejs.org/api/application-config.html#iscustomelement
	app.config.isCustomElement = (tag) => tag === 'mjml' || tag.startsWith('mj-');

	// Render the Vue instance to a variable as a string
	let html = await renderToString(app);

	// Remove <!--[--> and <!--]--> add by the server renderer.
	html = html.replace('<!--[-->', '').replace('<!--]-->', '');

	// Let mjml do its magic
	return mjml2html(html).html;
};
