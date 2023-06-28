import noImage from '../assets/no-image-icon-23492.png'
export function optimizeImage(inputUrl: string){
    if(inputUrl === null){
        return noImage
    }
    const indexOfMedia = inputUrl.indexOf('media/') + 'media/'.length
    const slicedString = inputUrl.slice(0, indexOfMedia)
    return slicedString + 'crop/600/400/' + inputUrl.slice(indexOfMedia, inputUrl.length)
}