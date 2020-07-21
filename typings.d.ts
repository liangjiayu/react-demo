declare module '*.css';
declare module '*.less';
declare module '*.png';

declare var G_API_URL: string;

declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
