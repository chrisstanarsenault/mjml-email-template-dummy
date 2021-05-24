const imageHero = {
	props: {
		email: {
			type: Object,
			default: {},
		},
	},

	template: `
    <mj-section
      :background-url="email.image.hero.url"
			background-size="cover"
			background-repeat="no-repeat"
			padding="0"
		>
			<mj-column>
				<mj-text
					align="center"
					color="#FFFFFF"
					font-size="20px"
				>
					<h2>{{email.heroHeadline}} {{email.userName}}</h2>
				</mj-text>
				<mj-button
					background-color="#5020F8"
					:href="email.creativeLayerLink"
					font-size="20px"
					padding="30px 40px"
					inner-padding="20px 40px"
					vertical-align="bottom"
				>
					Visit Your Home
				</mj-button>
			</mj-column>
		</mj-section>
  `,
};

exports.imageHero = imageHero;
