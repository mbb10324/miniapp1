/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies_table').del()
  await knex('movies_table').insert([
    {id: 1, movie_title: 'Avengers: Endgame (2019)', rating: 5, image: '/img/1.jpg', watched: false},
    {id: 2, movie_title: 'Avatar (2009)', rating: 4.2, image: '/img/1.jpg', watched: false},
    {id: 3, movie_title: 'Top Gun: Maverick (2022)', rating: 4.8, image: '/img/1.jpg', watched: false},
    {id: 4, movie_title: 'The Dark Knight (2008)', rating: 4.7, image: '/img/1.jpg', watched: false},
    {id: 5, movie_title: 'Transformers: Revenge of the Fallen (2009)', rating: 5, image: '/img/1.jpg', watched: false},
    {id: 6, movie_title: 'Finding Nemo (2003', rating: 4.9, image: '/img/1.jpg', watched: false},
    {id: 7, movie_title: 'Forrest Gump (1994)', rating: 4.1, image: '/img/1.jpg', watched: false},
    {id: 8, movie_title: 'Pirates of the Caribbean: The Curse of the Black Pearl (2003)', rating: 4, image: '/img/1.jpg', watched: false},
  ]);
};
