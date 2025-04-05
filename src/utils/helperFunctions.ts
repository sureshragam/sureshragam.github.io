// This file contains helper functions that are used throughout the application.
export const getLinkFromLinks = (links,name:string) =>{
    const link = links?.find((link) => link.name === name)
    return link?.url || ""
}