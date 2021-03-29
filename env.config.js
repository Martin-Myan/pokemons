const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'https://pokeapi.co/api/v2',
  },
  production: {
    API: 'https://pokeapi.co/api/v2',
  },
}[env];

export default configs;
