CREATE TABLE IF NOT EXISTS "Category" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"title" varchar(64)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Experience" (
	"exp_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"date" timestamp NOT NULL,
	"amount" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Session" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"category_id" integer,
	"duration" integer,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Task" (
	"task_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"task_title" varchar(128) NOT NULL,
	"completed" boolean DEFAULT false,
	"progress" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(64),
	"password" varchar(64),
	"total_time_spent" integer DEFAULT 0
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Category" ADD CONSTRAINT "Category_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Experience" ADD CONSTRAINT "Experience_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
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
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Task" ADD CONSTRAINT "Task_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
