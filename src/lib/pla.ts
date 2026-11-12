// lib/plans.ts
export const PLAN_LIMITS = {
  free: { items: 5, collections: 1 },
  pro: { items: Infinity, collections: Infinity },
} as const;
