ALTER TABLE "Task" ALTER COLUMN "completed" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Task" ALTER COLUMN "progress" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "avatar" varchar(256);--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "total_exp" integer DEFAULT 0;