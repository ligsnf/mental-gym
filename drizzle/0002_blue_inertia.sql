CREATE TABLE IF NOT EXISTS "Category" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"title" varchar(64)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Session" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"category_id" integer,
	"duration" interval NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Task" ALTER COLUMN "user_id" SET DATA TYPE integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Category" ADD CONSTRAINT "Category_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Session" ADD CONSTRAINT "Session_category_id_Category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
