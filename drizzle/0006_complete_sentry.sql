ALTER TABLE "item" ADD COLUMN "is_favorite" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "item" ADD COLUMN "is_pinned" boolean DEFAULT false NOT NULL;