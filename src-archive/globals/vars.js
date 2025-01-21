// const _isProd = !process.env.NODE_ENV === 'development';
const _isProd = process.env.NODE_ENV === 'production';
const _GtagID = 'G-G24FHEZ8YC';

export {_isProd, _GtagID};