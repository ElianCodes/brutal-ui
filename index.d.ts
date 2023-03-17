declare module '@eliancodes/brutal-ui' {
  type ButtonProps = {
    href: string;
    target?: '_blank' | '_self';
    color?: string;
  }

  export function Button(props: ButtonProps): any;
}