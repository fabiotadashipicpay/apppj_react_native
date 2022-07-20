import axios from 'axios'

export const baseURL= 'http://ms-dojo-mobile-pj.ms.qa'

export const fetchHome = async () => {
    try {
        res = await axios(`${baseURL}/api/v1/home`, {
            method: 'get',
            headers: {
                'Content-type': 'Application/json',
                Accept: 'Application/json',
            },
        })
        console.log(res.data)
        return res.data
    } catch (err) {
        console.warn(err)
    }

}