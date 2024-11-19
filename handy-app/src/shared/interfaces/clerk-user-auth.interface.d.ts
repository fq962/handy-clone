export interface ClerkUserAuth {
  id: string;
  pathRoot: string;
  externalId: null;
  username: string;
  emailAddresses: EmailAddress[];
  phoneNumbers: unknown[];
  web3Wallets: unknown[];
  externalAccounts: ExternalAccount[];
  enterpriseAccounts: unknown[];
  passkeys: unknown[];
  samlAccounts: unknown[];
  organizationMemberships: OrganizationMembership[];
  passwordEnabled: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
  primaryEmailAddressId: string;
  primaryEmailAddress: EmailAddress;
  primaryPhoneNumberId: null;
  primaryPhoneNumber: null;
  primaryWeb3WalletId: null;
  primaryWeb3Wallet: null;
  imageUrl: string;
  hasImage: boolean;
  twoFactorEnabled: boolean;
  totpEnabled: boolean;
  backupCodeEnabled: boolean;
  publicMetadata: Metadata;
  unsafeMetadata: Metadata;
  createOrganizationEnabled: boolean;
  deleteSelfEnabled: boolean;
  lastSignInAt: Date;
  legalAcceptedAt: null;
  updatedAt: Date;
  createdAt: Date;
  cachedSessionsWithActivities: null;
}

export interface EmailAddress {
  id: string;
  pathRoot: string;
  emailAddress: string;
  linkedTo: LinkedTo[];
  verification: Verification;
}

export interface LinkedTo {
  id: string;
  pathRoot: string;
  type: string;
}

export interface Verification {
  pathRoot: string;
  status: string;
  strategy: string;
  nonce: null;
  message: null;
  externalVerificationRedirectURL: null;
  attempts: null;
  expireAt: Date;
  error: null;
}

export interface ExternalAccount {
  id: string;
  pathRoot: string;
  identificationId: string;
  provider: string;
  providerUserId: string;
  emailAddress: string;
  approvedScopes: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: string;
  publicMetadata: Metadata;
  label: null;
  verification: Verification;
}

export type Metadata = object;

export interface OrganizationMembership {
  id: string;
  pathRoot: string;
  publicMetadata: Metadata;
  organization: Organization;
  permissions: string[];
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  pathRoot: string;
  name: string;
  slug: string;
  imageUrl: string;
  hasImage: boolean;
  publicMetadata: Metadata;
  adminDeleteEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  membersCount: number;
  pendingInvitationsCount: number;
  maxAllowedMemberships: number;
}
