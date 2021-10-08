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
    time timestamptz default current_timestamp,
    is_active active_type default '1'
);

CREATE TABLE products(
    id serial primary key,
    category_id int not null references categories(id),
    name varchar(50) not null, 
    product_images text [],
    weight smallint not null,
    warranty smallint not null,
    size varchar(60) not null,
    capacity smallint not null,
    body text not null,
    cost bigint not null,
    new_cost bigint, 
    status boolean not null,
    is_active active_type default '1'
);

INSERT INTO products (
    category_id,
    name,
    product_images,
    weight,
    warranty,
    size,
    capacity,
    body,
    cost,
    new_cost,
    status
) VALUES 
(
    1,
    'Lux Soft Memory',
    []
    150,
    3,
    '200x120x40',
    2,
    'Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.',
    1699999,
    true
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