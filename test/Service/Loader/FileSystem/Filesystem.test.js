const expect = require('expect');
const path = require('path');

const LoaderFileSystem = require('../../../../src/Service/Loader/FileSystem');

describe('Test filesystem service loader', () => {
  it('Must return the services from ./services folder', async function() {
    const p = path.join(__dirname, 'services');
    const loader = LoaderFileSystem({ path: p });

    console.log('LOLOLO', await loader.load());
  });
});
