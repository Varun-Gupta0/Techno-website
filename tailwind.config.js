/** @type {import('tailwindcss').Config} */
module.exports = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary-fixed": "#ffdad6",
                        "on-tertiary-container": "#eff4ff",
                        "inverse-surface": "#313030",
                        "on-surface-variant": "#5d3f3d",
                        "on-secondary-fixed": "#251a00",
                        "on-tertiary-fixed": "#001c37",
                        "on-primary-fixed": "#410003",
                        "secondary": "#785a00",
                        "on-secondary-fixed-variant": "#5b4300",
                        "surface-container-high": "#ebe7e7",
                        "tertiary-fixed": "#d2e4ff",
                        "tertiary-container": "#3272b4",
                        "secondary-container": "#fec32b",
                        "on-primary-fixed-variant": "#93000f",
                        "on-primary": "#ffffff",
                        "surface-container-low": "#f6f3f2",
                        "on-tertiary": "#ffffff",
                        "surface-container-highest": "#e5e2e1",
                        "on-secondary-container": "#6e5200",
                        "secondary-fixed": "#ffdf9d",
                        "outline-variant": "#e6bdb9",
                        "surface-container-lowest": "#ffffff",
                        "error-container": "#ffdad6",
                        "secondary-fixed-dim": "#f7be24",
                        "inverse-on-surface": "#f3f0ef",
                        "surface-variant": "#e5e2e1",
                        "on-surface": "#1c1b1b",
                        "on-error-container": "#93000a",
                        "on-background": "#1c1b1b",
                        "surface-bright": "#fcf8f8",
                        "surface": "#fcf8f8",
                        "on-primary-container": "#fff0ee",
                        "surface-tint": "#c00017",
                        "tertiary-fixed-dim": "#a1c9ff",
                        "on-tertiary-fixed-variant": "#00487f",
                        "background": "#fcf8f8",
                        "tertiary": "#075999",
                        "primary": "#d91f26",
                        "outline": "#916f6b",
                        "surface-dim": "#dcd9d9",
                        "primary-fixed-dim": "#ffb3ac",
                        "surface-container": "#f0edec",
                        "error": "#ba1a1a",
                        "inverse-primary": "#ffb3ac",
                        "primary-container": "#d91f26",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-page": "2rem",
                        "ink-weight-heavy": "8px",
                        "ink-weight-thick": "4px",
                        "panel-gap": "1rem",
                        "gutter": "1.5rem",
                        "ink-weight-thin": "2px"
                    },
                    "fontFamily": {
                        "headline-sm": ["Anton"],
                        "label-caps": ["JetBrains Mono"],
                        "headline-lg": ["Anton"],
                        "headline-xl": ["Anton"],
                        "body-lg": ["Karla"],
                        "body-md": ["Karla"],
                        "headline-lg-mobile": ["Anton"],
                        "headline-md": ["Anton"]
                    },
                    "fontSize": {
                        "headline-sm": ["24px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-caps": ["14px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700" }],
                        "headline-lg": ["48px", { "lineHeight": "48px", "fontWeight": "400" }],
                        "headline-xl": ["80px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "400" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "500" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["36px", { "lineHeight": "36px", "fontWeight": "400" }],
                        "headline-md": ["32px", { "lineHeight": "32px", "fontWeight": "400" }]
                    }
                }
            }
        };
module.exports.plugins = [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')];
module.exports.content = ["./*.html"];