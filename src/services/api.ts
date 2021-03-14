// import axios from 'axios';

// const api = axios.create({
//    baseURL: 'https://api.github.com/'
// });

// export default api;


import Twit from 'twit';
// // require('dotenv').config();
// const Twit = require('twit');



const api = new Twit({
    consumer_key: "R9R1Zyi76INkyQ53ynP9FICOT",
    consumer_secret: "aJzmeWjW4BoozeAOrbDzX9eifRQzy2fvKmDfIvdPnz10FKdetk",

    access_token: "66278102-Oe8STDRvYxUfLeUNTY4LtXNv0ixWD4spgxbvT1c1l",
    access_token_secret: "d9uSMPMpJ5Q7bN5CO07AYICJoy1tUSjjzHpbq8ElI1hh9"
});

// let stream = api.stream('statuses/filter', { track: '#cloud'});

// stream.on('tweet', function (tweet: any) {
//     console.log(tweet);
// });

export default api