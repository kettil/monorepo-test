import { solution, secondSolution, thirdSolution } from '@flytrx/test-lib';
import { Logger } from 'pino';

const app = async ({ env, log }: { env: NodeJS.ProcessEnv; log: Logger }): Promise<void> => {
  log.debug({ env }, 'ENV');

  log.info({ solution }, 'foo 1');
  log.info({ secondSolution }, 'foo 2');
  log.info({ thirdSolution }, 'foo 3');

  // dummy await for eslint
  await new Promise((r) => setTimeout(r, 2000));
};

export { app };
