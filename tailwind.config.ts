import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
				display: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Lucida Console', 'monospace']
			},
			colors: {
				// Nuevos colores institucionales
				brand: {
					// Azul como color principal
					50: '#E6F3FF',
					100: '#CCE7FF',
					200: '#99CFFF',
					300: '#66B7FF',
					400: '#339FFF',
					500: '#0088FF', // Color principal
					600: '#0070D6',
					700: '#0059AD',
					800: '#004383',
					900: '#002C5A',
					950: '#001A36',
				},
				accent: {
					// Rojo como color de acento
					50: '#FFF1F1',
					100: '#FFE2E2',
					200: '#FFC5C5',
					300: '#FFA8A8',
					400: '#FF8B8B',
					500: '#FF6D6D', // Color de acento
					600: '#DB5858',
					700: '#B74343',
					800: '#932E2E',
					900: '#701919',
					950: '#4D0F0F',
				},
				success: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
					950: '#022C22',
				},
				warning: {
					50: '#FFFBEB',
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
					950: '#451A03',
				},
				background: {
					light: '#FFFFFF',
					dark: '#121212',
				},
				surface: {
					light: '#F5F7FA',
					dark: '#1E1E1E',
				},
				text: {
					light: {
						primary: '#1A1A1A',
						secondary: '#555555',
						tertiary: '#888888',
						disabled: '#BBBBBB',
					},
					dark: {
						primary: '#FFFFFF',
						secondary: '#DDDDDD',
						tertiary: '#AAAAAA',
						disabled: '#777777',
					}
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				'4xl': '2rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				subtle: '0 2px 8px rgba(0, 0, 0, 0.05)',
				elevated: '0 4px 12px rgba(0, 0, 0, 0.08)',
				card: '0 8px 16px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 12px 24px rgba(0, 0, 0, 0.12)',
				'dark-subtle': '0 2px 8px rgba(0, 0, 0, 0.2)',
				'dark-elevated': '0 4px 12px rgba(0, 0, 0, 0.3)',
				'dark-card': '0 8px 16px rgba(0, 0, 0, 0.3)',
				'dark-card-hover': '0 12px 24px rgba(0, 0, 0, 0.4)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					from: { transform: 'translateY(-20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.3s ease-out',
				'slide-up': 'slideUp 0.4s ease-out',
				'slide-down': 'slideDown 0.4s ease-out',
				'pulse': 'pulse 1.5s ease-in-out infinite',
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			},
			transitionDuration: {
				'400': '400ms',
			},
			transitionTimingFunction: {
				'bounce-start': 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
			},
			spacing: {
				'18': '4.5rem',
				'68': '17rem',
				'84': '21rem',
				'96': '24rem',
				'128': '32rem',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")({
			strategy: 'class',
		}),
	],
} satisfies Config;
