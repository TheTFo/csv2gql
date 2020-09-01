import path from 'path';
import { exec, ExecException } from 'child_process';

type CliReturnType = {
    code: number,
    error: ExecException | null,
    stdout: string,
    stderr: string
}

export const cli = (args: string[]) : Promise<CliReturnType> => {
    return new Promise(resolve => {
      exec(
        `ts-node ${path.resolve('./src/index.ts')} ${args.join(' ')}`,
        { cwd: '.' },
        (error, stdout, stderr) => {
          resolve({
            code: error && error.code ? error.code : 0,
            error,
            stdout,
            stderr
          });
        });
    });
  }