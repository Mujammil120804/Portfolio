export const getImageurl=(path)=>{
    return new URL(`${path}`,import.meta.url).href;
};