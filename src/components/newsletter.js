const newsletter = {
	props: {
		email: {
			type: Object,
			default: {},
		},
	},

	template: `
    <mj-section background-color="#ffffff" padding="40px">
			<mj-column>
				<mj-image
					width="200px"
          height="200px"
					:src="email.image.newsletter.url"
          :alt="email.image.newsletter.alt"
				/>
			</mj-column>
      <mj-column>
        <mj-text
          font-size="20px"
          font-weight="bold"
        >
          Join the newsletter
        </mj-text>
        <mj-text font-size="16px">
          <p>Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
        </mj-text>
        <mj-button
          background-color="#5020F8"
          padding-top="10px"
          innerpadding="10px 20px"
          href="#"
        >
          Join
        </mj-button>
      </mj-column>
		</mj-section>
  `,
};

exports.newsletter = newsletter;
