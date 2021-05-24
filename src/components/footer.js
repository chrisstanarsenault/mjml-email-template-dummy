const footer = {
	props: {
		email: { type: Object, default: {}},
	},

	template: `
    <mj-wrapper background-color="#5020F8">
      <mj-section padding="0 10px" background-color="transparent">
        <mj-column>
            <mj-text font-size="14px" line-height="21px" color="#f5f8f7">
              <p class="footer">A Crappy Template made by <a href="mailto:chrisstanarsenault@gmail.com">{{email.userName}}</a></p>
            </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  `,
};

exports.footer = footer;
