import { createCommonBrowserClient } from '../common/client.js'
import type { SupabaseClientOptions } from '@supabase/supabase-js'

export function createNextClient<
  Database = any,
  SchemaName extends string & keyof Omit<Database, '__InternalSupabase'> = 'public' extends keyof Omit<
    Database,
    '__InternalSupabase'
  >
    ? 'public'
    : string & keyof Omit<Database, '__InternalSupabase'>,
>(
  url: string,
  publishableKey: string,
  options?: SupabaseClientOptions<SchemaName>
) {
  return createCommonBrowserClient<Database, SchemaName>(
    url,
    publishableKey,
    options
  )
}
