
export function optimizeImage(inputUrl: string){
    const indexOfMedia = inputUrl.indexOf('media/') + 'media/'.length
    const slicedString = inputUrl.slice(0, indexOfMedia)
    return slicedString + 'crop/600/400/' + inputUrl.slice(indexOfMedia, inputUrl.length)
}