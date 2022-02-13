import { Level } from 'pino';
import * as yup from 'yup';

const envSchema = yup
  .object({
    /* eslint-disable @typescript-eslint/naming-convention -- ENV variable */

    LOG_LEVEL: yup.mixed<Level>().oneOf(['debug', 'trace', 'info', 'warn', 'error', 'fatal']).default('warn'),

    /* eslint-enable @typescript-eslint/naming-convention -- ENV variable */
  })
  .default(undefined)
  .required();

export { envSchema };
