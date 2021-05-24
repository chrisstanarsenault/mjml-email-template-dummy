const util = require('../util');

const { header } = require('../components/header.js');
const { imageHero } = require('../components/imageHero.js');
const { thanks } = require('../components/thanks.js');
const { newsletter } = require('../components/newsletter.js');
const { socialIcons } = require('../components/socialIcons.js');
const { footer } = require('../components/footer.js');

const body = {
	components: {
		Header: header,
		ImageHero: imageHero,
		Thanks: thanks,
		Newsletter: newsletter,
		SocialIcons: socialIcons,
		Footer: footer,
	},

	props: {
		email: { type: Object, required: true },
	},

	template: `
		<mj-wrapper>
			<Header v-bind="{email}" />
		</mj-wrapper>
    <mj-wrapper>
      <ImageHero v-bind="{email}" />
			<Thanks v-bind="{email}" />
			<Newsletter v-bind="{email}" />
			<SocialIcons v-bind="{email}" />
    </mj-wrapper>
    <Footer v-bind="{email}" />
  `,
};

exports.body = body;
