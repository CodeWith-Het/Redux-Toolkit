import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export const fetchPhotos =async (query,page=1,per_page=25) =>{
    const responesToUnsplash =await axios.get("https://api.unsplash.com/search/photos" , {
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })

    const responeToPexels =await axios.get("https://api.pexels.com/v1/search" , {
        params:{query,page,per_page},
        headers:{Authorization:`${PEXELS_KEY}`}
    })

    console.log("unsplashData",responesToUnsplash)
    console.log("pexelsData",responeToPexels)
}