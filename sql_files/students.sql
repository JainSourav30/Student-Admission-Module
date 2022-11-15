-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: studentadmissions
-- Generation Time: 2022-11-13 22:12:30.2470
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."students" (
    "id" int4 NOT NULL,
    "branch_status" int4,
    "last_round" int4,
    PRIMARY KEY ("id")
);

