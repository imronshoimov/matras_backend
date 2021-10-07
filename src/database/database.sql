-- tablelar
-- 1. carousel --> [img1, img2, img3, img4] = arr;
-- 2. statistics --> experience, clients, warranty, delivery;
-- 2. products --> id, name, img, weight, warranty, size, capacity, body, old_cost, new_cost, category, status(enum), date;
-- 3. technologies --> id, name, thumbnail, link, description;  
-- 4. product_image --> id, [img1, img2, img3] = arr;
-- 5. address --> location, destination, geolacation, [img1, img2, img3] = arr;
-- 6. contact --> number;
CREATE TYPE type AS ENUM ('0', '1', '2', '3');
CREATE TYPE active_type AS ENUM ('0', '1');

CREATE TABLE carousel(
    id serial primary key,
    title varchar(60) not null,
    image varchar(60) not null,
    is_active active_type default '1'
);

CREATE TABLE statistics(
    experience smallint not null,
    clients varchar(20) not null,
    warranty smallint not null,
    delivery smallint not null,
    is_active active_type default '1'
);

CREATE TABLE categories(
    id serial primary key,
    category varchar(60) not null,
    time timestamptz default current_timestamp
);

CREATE TABLE products(
    id serial primary key,
    category_id int not null references categories(id),
    name varchar(50) not null,
    image varchar(70) not null,
    product_image text [],
    weight smallint not null,
    warranty smallint not null,
    size varchar(60) not null,
    capacity smallint not null,
    body text not null,
    old_cost bigint not null default null,
    new_cost bigint not null,
    category smallint not null,
    status type default '1',
    is_active active_type default '1'
);

CREATE TABLE orders(
    id serial primary key,
    name varchar(70) not null,
    number varchar(9) not null,
    product_name varchar(100) not null,
    count smallint not null,
    is_active active_type default '1'
);

CREATE TABLE technologies(
    id serial primary key,
    name varchar(50) not null,
    thumbnail varchar(70) not null,
    link varchar(150) not null,
    description text not null,
    is_active active_type default '1'
);

CREATE TABLE address(
    location varchar(200) not null,
    destination varchar(200) not null,
    geolacation varchar(150) not null,
    images text [],
    is_active type default '1'
);

CREATE TABLE contact(
    id serial primary key,
    number varchar(9),
    contacted type default '0',
    time timestamptz default current_timestamp,
    is_active type default '1'
);