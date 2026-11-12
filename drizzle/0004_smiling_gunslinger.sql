CREATE TABLE "item_collection" (
	"item_id" text NOT NULL,
	"collection_id" text NOT NULL,
	"added_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "item_collection_item_id_collection_id_pk" PRIMARY KEY("item_id","collection_id")
);
--> statement-breakpoint
ALTER TABLE "item_collection" ADD CONSTRAINT "item_collection_item_id_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "item_collection" ADD CONSTRAINT "item_collection_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "item_collection_collection_id_idx" ON "item_collection" USING btree ("collection_id");