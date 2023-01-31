const {
    dockStart
} = require('@nlpjs/basic');

(async () => {
    const dock = await dockStart({
        use: ['Basic']
    });
    const nlp = dock.get('nlp');
    nlp.addLanguage('en');
    // Adds the utterances and intents for the NLP
    nlp.addDocument('en', 'Show movies of Tom Cruise', 'movies_by_actor');
    nlp.addDocument('en', 'Give me horror movies', 'movies_by_genre');
    nlp.addDocument('en', 'List movies released in 1990', 'movies_by_year');
    nlp.addDocument('en', 'List movies of Tom Hanks', 'movies_by_actor');
    nlp.addDocument('en', 'Most popular movies in 1996', 'movies_by_year');
    nlp.addDocument('en', 'Movies of Morgan Freeman', 'movies_by_actor');
    nlp.addDocument('en', 'Romantic movies', 'movies_by_genre');
    nlp.addDocument('en', 'Least popular movies', 'movies_by_order_ascending');

    // Train also the NLG
    /*nlp.addAnswer('en', 'greetings.bye', 'Till next time');
    nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
    nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
    nlp.addAnswer('en', 'greetings.hello', 'Greetings!');*/
    await nlp.train();
    const response = await nlp.process('en', 'Show movies of Protik Datta');
    console.log(response);
})();