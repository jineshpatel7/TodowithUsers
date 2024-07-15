//download /create extension of uuid in our database:-
create extension if not exists 	"uuid-ossp";

//set extension
create table users (
	user_id uuid primary key default uuid_generate_v4(),
	username varchar(255) not null,
	user_email varchar(255) not null, 
	user_password varchar(255) not null
)

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);