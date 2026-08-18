# Current Architecture — API (for the new Preacher Scheduling module)

Written for a developer building the preacher-scheduling module on top of this
codebase. Every fact below was confirmed by reading the real source, not
assumed. Match these conventions exactly — do not introduce a parallel
pattern (generic `AuditLog`, `RolesGuard`, `apps/api/src/modules/<feature>/`
folders, BullMQ, camelCase Prisma fields, `cuid()` ids) that a generic NestJS
tutorial might suggest.

## 1. Permissions system mechanics

- Guard: `src/middlewares/permissions.guard.ts` (`PermissionsGuard`). Decorator:
  `src/middlewares/permissions.decorator.ts` — `@Permission('someKeyCode')`.
  If called with no argument, the decorator falls back to the method name
  itself (`@Permission()` on `createChurch` requires permission
  `'createChurch'`).
- Applied **per resolver class or per method**, not globally:
  `@Resolver(() => Church) @UseGuards(PermissionsGuard)` at the class level
  (see `src/graphql/church.resolver.ts`), or per-mutation
  (`@UseGuards(PermissionsGuard) @Permission('uploadSubsidyReceipt')`, see
  `src/graphql/subsidy-receipt.resolver.ts`).
- Permission check: `PermissionsGuard` reads `PERMISSIONS_KEY` metadata, pulls
  `userId` out of the GraphQL context (`ctx.userId` — already resolved by the
  context factory in `app.module.ts`, not by a guard-time JWT decode), loads
  the user's `UserRole -> Role -> RolePermission -> Permission` chain, and
  checks whether `Permission.resolver_name` (a **Prisma enum**
  `PermissionResolverName`, not a free string) is in the user's set.
- **`PermissionResolverName` is a fixed, hand-maintained enum in
  `prisma/schema.prisma`** listing every permission-gated resolver method
  name in the system. Adding a new mutation/query that needs a permission
  check requires: (1) add the new value(s) to `enum PermissionResolverName`,
  (2) `prisma migrate dev`, (3) add a row to `src/scripts/seed-permissions.ts`
  (`{ name, description, resolver_name, group, key_code, disabled_to_client }`)
  and run it, (4) assign the new `Permission` to the relevant `Role`(s) via
  `RolePermission` (seed or admin UI). **This step is easy to forget and
  will silently make new mutations unreachable (permission check always
  fails) if skipped.**
- Ownership / row-level scoping ("user can only edit their own resource") has
  **no generic mechanism** — it is hand-rolled per case. Existing example:
  `PermissionsGuard` special-cases `updateUser` vs `updateOwnUser` by
  comparing the target id argument to `ctx.userId`. Elsewhere (e.g.
  `project.service.ts`) ownership/leadership is resolved by loading the
  related row (`Church.leader_id`, `Department.leader_id`) and comparing in
  the service layer. **Follow this pattern for R11** (preacher edits only own
  availability, church contact edits only their church's calendar): check
  ownership inside the service method, not via a new generic guard.

## 2. Module structure convention — flat, not feature-nested

There is **no `src/modules/<feature>/` nesting** for real domain features
(only one exception: `src/modules/zip-code.module.ts`, an isolated
self-registering NestJS module for an external API integration — not the
general pattern). The real convention is **one flat folder per concern,
one file per feature inside it**:

```
src/dto/church.dto.ts                          # class-validator input DTOs
src/repositories/church.repository.ts          # Prisma queries
src/services/church.service.ts                 # business logic, calls repository
src/graphql/church.resolver.ts                  # @Resolver, calls service
src/@generated/church/church.model.ts           # GraphQL ObjectType — AUTO-GENERATED, do not hand-edit
```

Each of `src/services`, `src/repositories`, `src/graphql` (resolvers) has an
`index.ts` barrel that re-exports every file in the folder. There are
**no NestJS `@Module()` files per feature** — `AppModule` (`src/app.module.ts`)
registers every provider in one place via wildcard spreads:

```ts
import * as Services from './services';
import * as Resolvers from './graphql';
import * as Repositories from './repositories';
import * as CronServices from './cron/services';
// ...
providers: [
  ...Object.values(Services),
  ...Object.values(Resolvers),
  ...Object.values(Repositories),
  ...Object.values(CronServices),
  ...
]
```

**For the new module:** add `availability.dto.ts`, `availability.repository.ts`,
`availability.service.ts`, `availability.resolver.ts` to the existing flat
folders (same for `assignment`, `assignment-request`,
`church-service-calendar`, `gap-report`), export each from its folder's
`index.ts`, and they are automatically picked up by `AppModule` — no new
`.module.ts` file needed, no edit to `app.module.ts` beyond nothing at all.

## 3. GraphQL ObjectTypes are auto-generated from Prisma — do not hand-write them

`prisma/schema.prisma` has:

```prisma
generator nestgraphql {
  provider = "prisma-nestjs-graphql"
  output   = "../src/@generated"
}
```

Every Prisma model gets a matching GraphQL `@ObjectType` class generated into
`src/@generated/<model-kebab-case>/<model-kebab-case>.model.ts` automatically
on `prisma generate`. Resolvers import the type from there
(`import { Church } from 'src/@generated/church/church.model';`). **This
means adding `Availability`, `Assignment`, `AssignmentRequest`,
`ChurchServiceCalendar` etc. to `schema.prisma` and running
`prisma generate` already produces the GraphQL object types** — there is no
separate manual `@ObjectType` class to write for the entity shape itself
(only custom aggregate/report types like `GapReport` need a hand-written
`@ObjectType`, following the pattern of other hand-written models in
`src/models/`, e.g. `src/models/church-analytics.model.ts`-style files if
present, or DTOs in `src/dto/`).

## 4. No DataLoader — N+1 is accepted today, do not block on introducing it

`src/dataloaders/` exists as a folder but is **empty**. Relational
`@ResolveField`s call the service directly per-parent with no batching, e.g.
`src/graphql/church.resolver.ts`:

```ts
@ResolveField(() => User, { nullable: true })
async leader(@Parent() church: Church): Promise<Omit<User, 'password'> | null> {
  if (!church.leader_id) return null;
  return this.userService.getUserById(church.leader_id);
}
```

This is the accepted, established pattern in this codebase (every other
feature does the same). The scheduling grids (`scheduleOverview`,
`gapReport`) will hit N+1 on `Assignment.user`/`Assignment.community` at
scale — worth a `findMany` batch fetch inside the resolver method itself if
it becomes a real problem, but do **not** introduce project-wide DataLoader
wiring as a prerequisite; that would be scope creep inconsistent with how
every other grid-like resolver in this codebase already works.

## 5. Audit/history pattern — dedicated per-aggregate history tables, not a generic AuditLog

There is **no generic `AuditLog` table**. The established pattern is a
dedicated `*History` (or `*Log`) model per aggregate, written by the owning
service, e.g. `ProjectHistory`:

```prisma
model ProjectHistory {
  id         String   @id @default(uuid())
  project_id String
  user_id    String
  type       ProjectHistoryType   # enum, e.g. STATUS_CHANGE, COMMENT, ...
  comment    String?
  field_name String?
  old_value  String?
  new_value  String?
  metadata   Json?
  created_at DateTime @default(now())
}
```

`ProjectExpirationService` (cron) calls `projectService.update(id, patch,
'system')` — the actor id `'system'` is written into `created_by`/`updated_by`
for system-driven changes, and `ProjectService.update` itself is responsible
for writing the history row and dispatching notifications. Every model also
carries per-row audit columns already (`created_by`, `updated_by`,
`created_at`, `updated_at`, `is_deleted`, `deleted_at`, `deleted_by` — soft
delete, never hard delete).

**Correction to apply:** do not create a generic `AuditLog` model for R13.
Instead, add a dedicated `AvailabilityHistory` and reuse the same
`old_value`/`new_value`/`field_name` shape for `Assignment` status
transitions (or add an `AssignmentHistory`), written by
`AvailabilityService`/`AssignmentService` on every mutating call — consistent
with `ProjectHistory`.

## 6. Notification dispatch — synchronous, no queue; BullMQ is new infrastructure

- In-app: `NotificationService.createForUser(...)` →
  `NotificationRepository` → direct Prisma insert. Called synchronously from
  the domain service that caused the event (e.g. project history service
  after a status change), not from a queue consumer.
- Email: `src/services/email.service.ts` using `nodemailer` and
  `@sendgrid/mail` (both present in `package.json`) — also called
  synchronously/directly from the domain service, not via a queue.
- **No BullMQ, no Redis-backed queue exists anywhere in this codebase today.**
  The blueprint's "fila BullMQ" for notifications (module
  `notifications/ — fila BullMQ`) is new infrastructure, not an extension of
  an existing pattern. Given the current codebase always sends
  synchronously, the pragmatic default for the new module is to **follow the
  existing synchronous pattern** (call `NotificationService.createForUser`
  and `EmailService.send*` directly from `AvailabilityService`/
  `AssignmentRequestService`/the monthly-lock cron) and only introduce a
  queue if email volume from the monthly lock/reminder job actually becomes
  a bottleneck — a scoped decision to flag to the user, not something to
  silently add.
- Email template keys live in `locales/en/emails.json` and
  `locales/nl/emails.json`, flat `"eventName.field"` key style (e.g.
  `"invite.subject"`, `"invite.body"`, `"refundApproved.subject"`). New
  scheduling emails should add keys the same way, e.g.
  `"assignmentInviteReceived.subject"`, `"gapReportWeeklySummary.subject"`.
  **There is no `pt-BR` locale file anywhere in this backend** — only `en`
  and `nl`.

## 7. `LanguagePreference` enum

```prisma
enum LanguagePreference {
  en
  nl
}
```

Lowercase values, exactly two: `en` and `nl` (Dutch). No Portuguese variant
exists or is referenced anywhere in the backend. `User.language_preference`
and `Institution.language_preference` both use this enum. Any blueprint
language assumed to be `pt-BR` must be corrected to `nl` (primary) / `en`
(secondary) throughout — this is a real system for a Dutch
(`adventistgroei.nl` / `api-adventistgroei.nl`) Adventist institution, not a
Brazilian one.

## 8. Region / scope-of-visibility filtering — no existing pattern to copy

Grepped every service for `region_id`-based or "churches I lead"-based
query filtering for non-admin users: **none exists**. All current
`region_id`/`leader_id` usage found (`project.service.ts`,
`annual-budget.service.ts`) is about *resolving relations or validating a
leader is assigned*, not about scoping a list query by the caller's
region/church. **This means R6 (preacher geographic reach) and R11 (edit
scope) require genuinely new logic** — there's no existing convention being
violated by writing it, but also no shortcut to reuse. Recommended shape,
consistent with how ownership is already checked elsewhere (guard-level for
simple self-checks, service-level for relational checks): resolve the
caller's `Role.scopeLevel` (new field, see below) and `Church`/`Region`
membership inside the service method (e.g. `AssignmentService.openSlotsFor
Pastor(userId, month)`), and build the Prisma `where` clause there — the same
place `ChurchService`/`ProjectService` already build conditional `where`
clauses for other filters.

## Supporting facts relevant to schema design

- **Multi-tenancy already exists and is mandatory.** `Institution` is the
  tenant root; `institution_id` is a required FK on `User`, `Church`,
  `Notification`, `Project`, etc. Every new model in the scheduling module
  (`Availability`, `Assignment`, `AssignmentRequest`,
  `ChurchServiceCalendar`, and any new history table) **must** carry
  `institution_id String` + relation, populated at write time
  (typically derived from `Church.institution_id` or the acting user's
  `institution_id`), from Phase 1 onward. This directly answers blueprint
  validation question 6 ("is multi-tenant a v1 goal") — it already is, it is
  not optional, and it is not new work to add later.
- **`Community` does not exist as a model name.** The real "church" entity is
  `Church`, already linked to `Region` (`Church.region_id`) — `Region` is the
  existing "district" concept referenced in blueprint validation question 1.
  No new geography model is needed; reuse `Region`.
- **`Role.scopeLevel` does not exist yet** and must be added as planned
  (`ScopeLevel { LOCAL REGIONAL NATIONAL ADMIN }` enum + field on `Role`),
  but note `Role` already carries `key_code`, `is_fixed`, and permission
  wiring — the new field slots into the existing model, no restructuring
  needed.
- **ID convention:** `String @id @default(uuid())`, not `cuid()`. All new
  models must match.
- **Field naming convention:** `snake_case` for every Prisma field
  (`created_at`, `institution_id`, `is_deleted`, `updated_by`), **not**
  `camelCase`. This directly contradicts the blueprint's naming convention
  section (§4) — GraphQL-side field names still render in whatever case the
  generator/resolver defines (check a generated `.model.ts` to confirm; NestJS
  GraphQL typically keeps the same casing as the Prisma field unless
  explicitly renamed with `@Field({ name: ... })`), but the **Prisma schema
  itself must use snake_case** to match every other model in this codebase.
- **Soft delete, never hard delete**, is the standing convention
  (`is_deleted`/`deleted_at`/`deleted_by` on every model) — apply it to all
  new scheduling models too, including `Availability` and
  `ChurchServiceCalendar`, which the blueprint's schema draft omitted.
