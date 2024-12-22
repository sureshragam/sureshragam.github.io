declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }