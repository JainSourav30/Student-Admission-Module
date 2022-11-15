-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: studentadmissions
-- Generation Time: 2022-11-13 22:12:02.2070
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."applicants" (
    "id" int4 NOT NULL,
    "percentile" float4,
    "prefs" _pref,
    "status" int4,
    "on_hold" bool,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."applicants" ("id", "percentile", "prefs", "status", "on_hold") VALUES
(1, 100, '{"(CSE,100)","(CCE,100)","(ECE,100)"}', -1, 'f');
