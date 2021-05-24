const footer = {
	props: {
		email: { type: Object, default: {} },
	},

	template: `
    <mj-wrapper background-color="#5020F8">
      <mj-section padding="20px" background-color="transparent">
        <mj-column>
            <mj-text
              font-size="14px"
              line-height="21px"
              color="#ffffff"
            >
              <p class="footer">A crappy template made by <a href="mailto:chrisstanarsenault@gmail.com">{{email.userName}}</a></p>
            </mj-text>
        </mj-column>
        <mj-column>
            <mj-text
              font-size="14px"
              line-height="21px"
              color="#ffffff"
              align="right"
            >
              <p>©2021 Markdown is Markup Co.</p>
            </mj-text>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  `,
};

exports.footer = footer;
