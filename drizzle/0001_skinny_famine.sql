CREATE TABLE IF NOT EXISTS "Task" (
	"task_id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"task_title" varchar(128) NOT NULL,
	"completed" boolean DEFAULT false,
	"progress" integer DEFAULT 0
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
