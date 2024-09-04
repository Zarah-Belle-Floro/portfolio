/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
            colors: {
                "primary-text": {
                    DEFAULT: "var(--primary-text)",
                    // light: "var(--primary-text-light)",
                    // dark: "var(--primary-text-dark)",
                },
                // primary: {
                //   DEFAULT: "var(--primary)",
                // //   content: "var(--primary-content)",
                // },
                // secondary: {
                //   DEFAULT: "var(--secondary)",
                // //   content: "var(--secondary-content)",
                // },
                // accent: {
                //   DEFAULT: "var(--accent)",
                // },
                background: {
                  DEFAULT: "var(--background)",
                //   light: "var(--bg-light)",
                //   dark: "var(--bg-dark)",
                },
                layer: {
                    DEFAULT: "var(--dp1)",
                    dp1: "var(--dp1)", // nav, sections bg
                    dp2: "var(--dp2)", 
                    dp3: "var(--dp3)", // img, text, placeholder bg
                    dp4: "var(--dp4)",
                    dp6: "var(--dp6)", // button, tag, link placeholder bg
                    dp8: "var(--dp8)",
                    dp12: "var(--dp12)",
                    dp16: "var(--dp16)",
                    dp24: "var(--dp24)",
                },
                // foreground: {
                //   DEFAULT: "var(--foreground-light)",
                //   light: "var(--foreground-light)",
                //   dark: "var(--foreground-dark)",
                // },
                // base: {
                //   100: "var(--base-100)",
                //   200: "var(--base-200)",
                //   300: "var(--base-300)",
                // },
                // info: {
                //   DEFAULT: "var(--info)",
                //   content: "var(--info-content)",
                // },
                // success: {
                //   DEFAULT: "var(--success)",
                //   content: "var(--success-content)",
                // },
                // warning: {
                //   DEFAULT: "var(--warning)",
                //   content: "var(--warning-content)",
                // },
                // error: {
                //   DEFAULT: "var(--error)",
                //   content: "var(--error-content)",
                // },
            }
        }
	},
	plugins: []
};
