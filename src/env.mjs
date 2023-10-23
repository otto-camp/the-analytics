import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    XATA_BRANCH: z.string(),
    XATA_API_KEY: z.string(),
    IPINFO_TOKEN: z.string()
  }, client: {

  }
  , runtimeEnv: {
    XATA_BRANCH: process.env.XATA_BRANCH,
    XATA_API_KEY: process.env.XATA_API_KEY,
    IPINFO_TOKEN: process.env.IPINFO_TOKEN
  }
})