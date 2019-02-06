psql -h politico -W "dbname=politico options=--search_path=myshema" -a -f C:\Users\Saheed Adwale Shittu\Desktop\Politico\src\server\datastore\schema.sql -v ON_ERROR_STOP=1 -1
-- \c politico;





CREATE TABLE users
(
  ID serial PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  othername VARCHAR(100) NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phonenumber VARCHAR(11) NOT NULL,
  passporturl VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN,
  pass TEXT,
  createdat timestamp with time zone DEFAULT now() NOT NULL,
  updatedat timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE parties
(
  ID serial PRIMARY KEY,
  user_id int references users,
  partyname TEXT NOT NULL UNIQUE,
  hqaddress TEXT NOT NULL,
  logourl TEXT NOT NULL,
  createdat timestamp with time zone DEFAULT now() NOT NULL,
  updatedat timestamp with time zone DEFAULT now() NOT NULL 
);
