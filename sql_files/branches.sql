-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: studentadmissions
-- Generation Time: 2022-11-13 22:12:14.8150
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."branches" (
    "id" bpchar(3) NOT NULL,
    "seats" int4,
    "status" int4,
    "wl_no" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."branches" ("id", "seats", "status", "wl_no") VALUES
('CSE', 2, 1, 1);
