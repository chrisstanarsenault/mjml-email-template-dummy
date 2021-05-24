const thanks = {
	props: {
		email: { type: Object, default: {} },
	},

	methods: {
		firstName: function (email) {
			return email.userName.split(' ')[0];
		},
	},

	template: `
    <mj-wrapper background-color="#fafafa">
      <mj-section padding="20px 40px" background-color="transparent">
        <mj-column>
            <mj-text font-size="20px" line-height="21px">
              <h3>Thank you {{firstName(email)}}, for being apart of Creative Layer.</h3>
              <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.</p>
            </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  `,
};

exports.thanks = thanks;
