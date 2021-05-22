const header = {
	props: {
		email: { type: Object, default: {} },
	},

	template: `
    <mj-section>
      <mj-column>
        <mj-text
          padding-bottom="8px"
          color="#0b0b0b"
          font-size="40px"
          line-height="45px"
          font-weight="bold"
        >
          {{email.headline}}
        </mj-text>
      </mj-column>
    </mj-section>
`,
};

exports.header = header;
