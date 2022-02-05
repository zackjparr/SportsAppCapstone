create database zerrsports;

create table users(
	userId int not null primary key auto_increment,
    username varchar(20),
    `password` varchar(20),
    displayName varchar(50),
    avatar varchar(100),
    email varchar(100)
);

insert into users 
values(0, 'bigguy6', 'password6', 'The Big Guy', 'none.jpg', 'zacharyparr@rocketmortgage.com'),
(0, 'slausenge', 'slaus123', 'Slausenge', 'none.jpg', 'richardmoss@rocketmortgage.com'),
(0, 'lionsfan123', 'abc123', 'Miserable Lions Fan', 'none.jpg', 'erinwalter@rocketmortgage.com'),
(0, 'slickrick', 'genericK123', 'Slick Rick', 'none.jpg', 'rickmagdaleno@rocketmortgage.com');

create table favorites
(
	faveId int not null auto_increment primary key,
    teamId int
);

create table usersfavorites
(
	ufId int not null auto_increment primary key,
    userId int,
    faveId int,
	foreign key (userId) references users(userId),
    foreign key (faveId) references favorites(faveId)
);

create table sportstalks
(
	postId int not null auto_increment primary key,
    postBody varchar(250),
    userId int,
    foreign key (userId) references users(userId)
);

select * from users;