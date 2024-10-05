const _isProd = !process.env.NODE_ENV === 'development';
const _GtagID = 'G-G24FHEZ8YC';

console.log("_isProd:", _isProd);

export {_isProd, _GtagID};