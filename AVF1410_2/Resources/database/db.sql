BEGIN TRANSACTION;
CREATE TABLE `list` (
	`id`	INTEGER NOT NULL,
	`city`	TEXT,
	`currentTemp`	INTEGER,
	`currentDay`	TEXT,
	`firstDay`	TEXT,
	`scndDay`	TEXT,
	`thirdDay`	TEXT,
	`crntFcast`	TEXT,
	`frstfcast`	TEXT,
	`scndfcast`	TEXT,
	`thirdfcast`	TEXT,
	`crntimage`	BLOB,
	`frstimage`	BLOB,
	`scndimage`	BLOB,
	`thrdimage`	BLOB,
	`crntmap`	BLOB,
	`logo`	BLOB
);
COMMIT;
