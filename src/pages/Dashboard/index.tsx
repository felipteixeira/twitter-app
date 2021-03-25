import React, { useState, FormEvent } from 'react';
import { api } from '../../services/api';
import logoImg from '../../assets/twitter.svg'
import { Title, Form, Repositories, Error } from './styles';
import { Link } from 'react-router-dom';

interface Tweet {
    id: number,
    text: string,
    author_id: string,
}

const Dashboard: React.FC = () => {
    const [hashtag, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [tweets, setTweets] = useState<Tweet[]>([]);
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!hashtag) {
            setInputError('Digite a hashtag');
            return;
        }
        try {
            const response = await api.get(`${hashtag}`);
            const tweetData = response.data;

            setTweets([...tweets, ...tweetData]);
            setNewRepo('');
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

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input value={hashtag}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite uma hashtag!" />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {tweets.map(tweet => (
                    <Link key={tweet.id} to={'/'}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJorBeW2SuAHq-B1Y_mYJmxspaOIv9krcDZQ&usqp=CAU"} 
                        alt={tweet.author_id}/>
                        <div >
                            <strong>{tweet.text}</strong>
                        </div>
                    </Link>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboard;








