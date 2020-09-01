import { cli } from './cliUtils';

const CURRENT_VERSION = "1.0.0";

test('cli supports the short version flag', async () => {
  let result = await cli(['-V']);
  expect(result.code).toBe(0);
  expect(result.stdout).toBe(`${CURRENT_VERSION}\n`);
});

test('cli supports the long version flag', async () => {
  let result = await cli(['--version']);
  expect(result.code).toBe(0);
  expect(result.stdout).toBe(`${CURRENT_VERSION}\n`); 
});

test('cli import command requires CSV file', async () => {
  let result = await cli(['import']);
  expect(result.code).toBe(1);
  expect(result.stderr).toBe("error: missing required argument 'csv-file'\n"); 
});

test('cli import command requires GraphQL URI', async () => {
  let result = await cli(['import', 'somecsvfile.csv']);
  expect(result.code).toBe(1);
  expect(result.stderr).toBe("error: missing required argument 'graphql-uri'\n"); 
});
