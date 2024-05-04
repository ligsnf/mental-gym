CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(64),
	"password" varchar(64),
	"total_time_spent" integer DEFAULT 0
);
