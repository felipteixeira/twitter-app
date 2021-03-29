import axios, { AxiosResponse } from 'axios';

const nlb = 'http://nlb-prod-5953ee5c56c53ce7.elb.us-east-1.amazonaws.com'

export const api = {
    get(hashtag: string) {
        return axios.get(
            `${nlb}:3333/tweet?hashtag=${hashtag}`,
        ).then((result: AxiosResponse) => {
            return result.data
        }).catch((err) => {
            console.error(err)
        });
    }
}