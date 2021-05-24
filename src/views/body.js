const util = require('../util');

const { header } = require('../components/header.js');
const { imageHero } = require('../components/imageHero.js');
const { footer } = require('../components/footer.js');

const body = {
	components: {
		Header: header,
		ImageHero: imageHero,
		Footer: footer,
	},

	props: {
		email: { type: Object, required: true },
	},

	template: `
		<mj-body>
			<mj-wrapper background-color="#5020F8">
			<Header v-bind="{email}" />
		</mj-wrapper>
    <mj-wrapper>
      <ImageHero v-bind="{email}" />
    </mj-wrapper>
    <Footer v-bind="{email}" />
		</mj-body>
  `,
};

exports.body = body;
