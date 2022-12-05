const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const knex = require('knex')(require('../knexfile') ["development"])

app.get('/', (request, response) => {
    response.status(200).send('home page');
  })

  app.get('/movies', (request, response) => {
    knex('movies_table')
      .select('*')
      .then(branch => {
        response.status(200).json(branch);
      })
    })
    
    app.post('/movies/post', async (request, response) => {
        const maxIdQuery = await knex('movies_table').max('id as maxId').first();
        let num = maxIdQuery.maxId + 1;
        console.log("checkout the inputs",request.body);
        knex('movies_table')
          .insert(
            {
              id: num,
              movie_title: request.body.movie_title,
              rating: request.body.rating,
              image: request.body.image,
            }
          )
          .then(response.status(201).send('Added successfully'))
      });

    app.delete('/movies/:id', async (request, response) => {
        let { id } = request.params;
        knex('movies_table')
        .where('id', id)
        .del()
        .then(base => {
          base === 0 ? response.status(204).send(`Movie ${id} doesn't exist, so nothing was removed`)
            : response.status(410).send(`Movie ${id} has been removed`);
        })
    })

     app.patch('/movies/:id', async (request, response) => {
      let { id } = request.params
      console.log("patching",request.body);
      knex('movies_table')
      .where('id', id)
      .update({
        watched: request.body.watched
      })
      .then(response.status(201).send('Patched successfully'))
     })


  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });