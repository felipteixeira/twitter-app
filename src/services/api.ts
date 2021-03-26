import axios, { AxiosResponse } from 'axios';

export const api = {
    get(hashtag: string) {
        return axios.get(
            `http://nlb-prod-41c99481a2337048.elb.us-east-1.amazonaws.com:1001/tweet?hashtag=${hashtag}`,
        ).then((result: AxiosResponse) => {
            return result.data
        }).catch((err) => {
            console.error(err)
        });
    }
}