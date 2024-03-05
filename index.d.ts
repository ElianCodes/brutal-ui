declare module "@eliancodes/brutal-ui" {
	type DefaultColorProps = {
		color?: string;
	};

	export function Button(props: DefaultColorProps): any;
	export function ActualButton(props: DefaultColorProps): any;
	export function Card(props: DefaultColorProps): any;
	export function Pill(props: DefaultColorProps): any;

	type BrutalConfiguration = {
		colors: string[];
	};

	export function Config(): BrutalConfiguration;
}
