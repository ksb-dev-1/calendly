CREATE TABLE "item_version" (
	"id" text PRIMARY KEY NOT NULL,
	"item_id" text NOT NULL,
	"title" text NOT NULL,
	"content" text,
	"language" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "item_version" ADD CONSTRAINT "item_version_item_id_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "item_version_item_id_idx" ON "item_version" USING btree ("item_id");