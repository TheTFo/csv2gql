import fs from 'fs';
import neatCsv from 'neat-csv';

type ImportOptions = {
  csvFile: string,
  graphqlUri: string,
  dryRun?: boolean
}

export const importCsv = async (options: ImportOptions) => {
  const { csvFile, dryRun } = options;
  try {
    const buffer = await fs.promises.readFile(csvFile);
    const items = await neatCsv(buffer);
    
    if (dryRun) {
      console.log(items);
    }  
  
  } catch {
    throw Error(
      `Could not access '${csvFile}'. Either the file does not exist ` +
      `or you do not have permission to access it.`);
  }
};