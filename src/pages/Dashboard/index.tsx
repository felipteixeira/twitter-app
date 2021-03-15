import React, { useState, useEffect, FormEvent } from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import {api} from '../../services/api';
import logoImg from '../../assets/twitter.svg'
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string,
    description: string,
    owner: {
        login: string,
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [hashtag, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [tweets, setTweets] = useState<any[]>(() => {
        const storageRepositories = localStorage.getItem('@Tweets:Stream');

        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('@Tweets:Stream', JSON.stringify(tweets));
    }, [tweets])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!hashtag) {
            setInputError('Digite a hashtag');
            return;
        }

        try {
            const tweet = await api.get(`${hashtag}`);
                console.log(tweet)
                setTweets([...tweets, tweet]);
          
        } catch (err) {
            setInputError('Repositório inexistente!');
        }

    }

    return (
        <>
            <img src={logoImg} alt="Hashtag Explorer" />
            <Title>Buscar hashtag no Twitter!</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input value={hashtag}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite uma hashtag!" />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {/* {tweets.map(user => (
                    <Link key={user.tweet_count} to={`/repositories/${user.name}`}>
                        <img src={user.profile_image_url} />
                        <div>
                            <strong>{user.full_name}</strong>
                            <p>{user.description}</p>
                            <p>{user.followers_count}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))} */}
            </Repositories>
        </>
    )
}

export default Dashboard;