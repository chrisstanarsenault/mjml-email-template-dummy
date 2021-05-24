const header = {
	props: {
		email: {
			type: Object,
			default: {},
		},
	},

	template: `
    <mj-section background-color="transparent">
			<mj-column>
				<mj-text
					align="center"
					color="white"
					font-size="20px"
				>
					<h1>{{email.businessName}}</h1>
				</mj-text>
			</mj-column>
		</mj-section>
  `,
};

exports.header = header;
