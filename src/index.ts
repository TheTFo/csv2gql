#!/usr/bin/env node
import { Command } from 'commander';
import { importCsv } from './importCsv';

const program = new Command();
program
  .name("csv2gql")
  .version("1.0.0");

program
  .command("import <csv-file> <graphql-uri>")
  .alias("i")
  .description("Import a CSV file to the GraphQL API")
  .option('-d --dry-run', "Execute as a dry run")
  .action((args) => {
    importCsv(args);
  });

program
  .parse(process.argv);
