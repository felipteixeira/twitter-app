import React, { useState, FormEvent } from 'react';
import { api } from '../../services/api';
import logoImg from '../../assets/twitter.svg'
import { Title, Form, Tweets, Error } from './styles';
import { Link } from 'react-router-dom';

interface Tweet {
    id: number,
    text: string,
    author_id: string,
    name: string,
    username: string,
    profile_image_url: string,
    public_metrics?: {
        followers_count: number;
        following_count: number;
        tweet_count: number;
        listed_count: number
    }
}

const Dashboard: React.FC = () => {
    const [hashtag, setNewTweet] = useState('');
    const [inputError, setInputError] = useState('');
    const [tweets, setTweets] = useState<Tweet[]>([]);

    async function handleAddTweet(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!hashtag) {
            setInputError('Digite a hashtag');
            return;
        }
        try {
            const response = await api.get(`${hashtag}`);
            let tweetData = response.data.map((x: any, index: number) => {
                return {
                    ...x,
                    ...response.includes.users[index]
                }
            });

            setTweets(tweetData);
            setNewTweet('');
            setInputError('');
        } catch (err) {
            console.log(err)
            setInputError('Tweet não encontrado!');
        }
    }
    return (
        <>
            <img src={logoImg} alt="Hashtag Explorer" />
            <Title>Buscar # no Twitter!</Title>

            <Form hasError={!!inputError} onSubmit={handleAddTweet}>
                <input value={hashtag}
                    onChange={(e) => setNewTweet(e.target.value)}
                    placeholder="Digite uma hashtag!" />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Tweets>
                {tweets.map(tweet => (
                    <Link key={tweet.id} to={'/'}>
                        <img src={tweet.profile_image_url}
                            alt={tweet.author_id} />
                        <div>
                            <p>{tweet.name} {`@${tweet.username}`}</p>
                            <strong>{tweet.text}</strong>
                            <p>{`following: ${tweet?.public_metrics?.following_count}`}
                                {` followers: ${tweet?.public_metrics?.followers_count}`}</p>
                        </div>
                    </Link>
                )
                )}
            </Tweets>
        </>
    )
}

export default Dashboard;








