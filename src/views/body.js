const util = require('../util');

const { header } = require('../components/header.js');
const { footer } = require('../components/footer.js');

const body = {
	components: {
		Header: header,
		Footer: footer,
	},

	props: {
		email: { type: Object, required: true },
	},

	template: `
    <mj-wrapper full-width="full-width" background-color="#5020F8">
			<mj-section>
				<mj-column>
					<mj-image src="../assets/logo.png" />
				</mj-column>
			</mj-section>
		</mj-wrapper>
    <mj-wrapper>
      <Header v-bind="{email}"/>
    </mj-wrapper>
    <Footer v-bind="{email}" />
  `,
};

exports.body = body;
