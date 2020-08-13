
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "name"
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "city"
(
    "city_id" SERIAL PRIMARY KEY,
    "city_name" VARCHAR (80),
    "state" VARCHAR (20),
    "user_id" INTEGER REFERENCES "city" NOT NULL
);

CREATE TABLE "street_address"
(
    "address_id" SERIAL PRIMARY KEY,
    "address_1" VARCHAR (120),
    "address_2" VARCHAR (120)
);

CREATE TABLE "full_address"
(
    "full_address_id" SERIAL PRIMARY KEY,
    "city_id" INTEGER REFERENCES "city" NOT NULL
);

CREATE TABLE "pickups"
(
    "pickup_id" SERIAL PRIMARY KEY,
    "day_of_week" VARCHAR (20)
);

CREATE TABLE "address_pickups"
(
    "address_pickups_id" SERIAL PRIMARY KEY,
    "full_address_id" VARCHAR (180),
    "pickup_id" INTEGER REFERENCES "pickups" NOT NULL
);

CREATE TABlE "user_address"
(
    "ua_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user_address" NOT NULL,
    "full_address" VARCHAR (180)
);