import axios, { AxiosResponse } from 'axios';

export const api = {
    get(hashtag: string) {
        return axios.get(
            `http://localhost:3333/tweet?hashtag=${hashtag}`,
        ).then((result: AxiosResponse) => {
            return result.data
        }).catch((err) => {
            console.error(err)
        });
    }
}