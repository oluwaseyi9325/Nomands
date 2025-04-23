// import axios from 'axios'

// export const fetcher = async <T = any>(url: string): Promise<T> => {
//   try {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/${url}/1`)
//     return res.data
//   } catch (error: any) {
//     const message = error?.response?.data?.message || 'Fetch failed'
//     throw new Error(message)
//   }
// }

import axios from 'axios'

export const fetcher = async <T = any>(url: string): Promise<T> => {
//   try {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/${url}/1`)
//     return res.data
//   } catch (error: any) {
//     const message = error?.response?.data?.message || 'Fetch failed'
//     throw new Error(message)
    //   }
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${url}/1`)
    return res.data
}

