declare module 'assets' {
  export const badge: string;
  export const eth: string;
  export const heart: string;
  export const left: string;
  export const search: string;

  export const logo: string;
  export const nft01: string;
  export const nft02: string;
  export const nft03: string;
  export const nft04: string;
  export const nft05: string;
  export const nft06: string;
  export const nft07: string;

  export const person01: string;
  export const person02: string;
  export const person03: string;
  export const person04: string;
}

declare module '*.jpeg' {
  import { ImageSourcePropType } from 'react-native';

  const content: ImageSourcePropType;

  export default content;
}

declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const content: ImageSourcePropType;

  export default content;
}
