/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */

export type IdentityCredentialsTYPE = typeof IdentityCredentialsTYPE[keyof typeof IdentityCredentialsTYPE]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const IdentityCredentialsTYPE = {
  PASSWORD: 'PASSWORD',
  OIDC: 'OIDC',
  TOTP: 'TOTP',
  LOOKUP_SECRET: 'LOOKUP_SECRET',
  WEBAUTHN: 'WEBAUTHN',
  CODE: 'CODE',
  LINK_RECOVERY: 'LINK_RECOVERY',
  CODE_RECOVERY: 'CODE_RECOVERY',
} as const
