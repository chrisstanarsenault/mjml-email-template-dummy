const socialIcons = {
	props: {
		email: {
			type: Object,
			default: {},
		},
	},

	template: `
    <mj-section
      background-color="#fafafa"
      padding="20px"
    >
			<mj-column>
				<mj-social inner-padding="20px">
					<mj-social-element
            name="facebook"
            icon-size="35px"
            :href="email.socials.facebook.href"
            :alt="email.socials.facebook.alt"
          />
          <mj-social-element
            name="twitter"
            icon-size="35px"
            :href="email.socials.twitter.href"
            :alt="email.socials.twitter.alt"
          />
					<mj-social-element
            name="linkedin"
            icon-size="35px"
            :href="email.socials.linkedin.href"
            :alt="email.socials.linkedin.alt"
          />
				</mj-social>
			</mj-column>
		</mj-section>
  `,
};

exports.socialIcons = socialIcons;
