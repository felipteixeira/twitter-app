import axios, { AxiosResponse } from 'axios';

const nlb = 'http://nlb-prod-f3d2c25d74505530.elb.us-east-1.amazonaws.com'

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