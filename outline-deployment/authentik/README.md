# Authentik checklist

Use Authentik only as the OIDC provider for Outline.

## Initial bootstrap

1. Start the stack with `.env` populated.
2. Open `https://<DOMAIN_AUTH>`.
3. Sign in with:
   - email: value of `AUTHENTIK_BOOTSTRAP_EMAIL`
   - password: value of `AUTHENTIK_BOOTSTRAP_PASSWORD`
4. Rotate the bootstrap password after first login if your policy requires it.

## Required groups

Create these groups in Authentik:

- `external_viewers`
- `internal_viewers`
- `internal_editors`
- `internal_admins`

## OIDC provider for Outline

Create:

- Provider type: `OAuth2/OpenID Provider`
- Name: `outline-oidc`
- Client type: `Confidential`
- Redirect URI: `https://<DOMAIN_OUTLINE>/auth/oidc.callback`

Then create an application bound to that provider with:

- Name: `outline`
- Slug: `outline`
- Launch URL: `https://<DOMAIN_OUTLINE>`

## Values to copy into `.env`

- `OIDC_CLIENT_ID`
- `OIDC_CLIENT_SECRET`
- `OIDC_AUTH_URI`
- `OIDC_TOKEN_URI`
- `OIDC_USERINFO_URI`
- `OIDC_DISPLAY_NAME`
- `OIDC_SCOPES`
- `OIDC_USERNAME_CLAIM`

Recommended values:

- `OIDC_DISPLAY_NAME=Authentik`
- `OIDC_SCOPES=openid profile email`
- `OIDC_USERNAME_CLAIM=preferred_username`

## Group mapping guidance

Authentik groups are the source-of-truth identity grouping, but Outline collection permissions still need to be validated in the application UI.

Practical mapping target:

- `internal_admins` -> Outline admins
- `internal_editors` -> members with edit rights on selected collections
- `internal_viewers` -> read-only access to internal collections
- `external_viewers` -> access only to explicitly shared external collections

