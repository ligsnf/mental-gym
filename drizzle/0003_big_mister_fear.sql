CREATE TABLE IF NOT EXISTS "Experience" (
	"exp_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"date" timestamp NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Experience" ADD CONSTRAINT "Experience_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
