import { createCommonServerClient } from '../common/client.js'
import type { CommonCookieMethods } from '../common/client.js'
import type { SupabaseClientOptions } from '@supabase/supabase-js'

export function createNextServerClient<
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
  cookies: CommonCookieMethods,
  options?: SupabaseClientOptions<SchemaName>
) {
  return createCommonServerClient<Database, SchemaName>(
    url,
    publishableKey,
    cookies,
    options
  )
}
