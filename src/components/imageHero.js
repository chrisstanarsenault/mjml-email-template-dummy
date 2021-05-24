const imageHero = {
	props: {
		email: {
			type: Object,
			default: {},
		},
	},

	template: `
    <mj-hero
			mode="fluid-height"
      background-width="600px"
      background-height="469px"
      background-url="https://ibb.co/LvDjcSD"
      background-color="#2a3448"
      padding="100px 0px"
      width="100%">
		>
			<mj-text align="center">
				<h2>{{email.heroHeadline}}</h2>
			</mj-text>
			<mj-button>Visit Our Home</mj-button>
		</mj-hero>
  `,
};

exports.imageHero = imageHero;
