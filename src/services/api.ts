import axios, { AxiosResponse } from 'axios';

const token = 'Bearer AAAAAAAAAAAAAAAAAAAAADNnNgEAAAAAsZyhS8O9r2Ea1zr8TCWIcDxIzXw%3DasXSU3q8zV8T4pz65sfFdv6WoOdD3ZlpCiax4LxyYCRe1YzgRN'

interface Metrics {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
}

interface Users {
    public_metrics: Metrics;
}

interface Includes {
    users: Users[];
}

interface Result {
    data: any;
    includes: Includes;
}

export const api = {
    get(hashtag: string) {
        return axios.get(
            `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(hashtag)
            }&max_results=100&expansions=author_id&user.fields=public_metrics/`,
            { headers: { Authorization: token, 'Access-Control-Allow-Origin': '*' } }
        ).then((result: AxiosResponse<Result>) => {
            return result.data.includes
        }).catch((err) => {
            console.error(err)
        });
    }
}