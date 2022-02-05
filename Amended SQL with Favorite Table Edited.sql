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
values(0, 'bigguy6', 'password6', 'The Big Guy', 'assets/bigava.jpg', 'zacharyparr@rocketmortgage.com'),
(0, 'slausenge', 'slaus123', 'Slausenge', 'assets/sausava.jpg', 'richardmoss@rocketmortgage.com'),
(0, 'lionsfan123', 'abc123', 'Miserable Lions Fan', 'assets/sadava.jpg', 'erinwalter@rocketmortgage.com'),
(0, 'slickrick', 'genericK123', 'Slick Rick', 'assets/rickava.jpg', 'rickmagdaleno@rocketmortgage.com');

create table favorites
(
	faveId int not null auto_increment primary key,
    teamId int, 
    thumbnail varchar(90),
    teamName varchar(50)
);

drop table favorites;

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

select * from favorites;

insert into sportstalks values(0, "Matthew Stafford is the GOAT!", 3),
(0, "I saw that Tom Brady is retiring. Guess he won't be the first 50 year old in the league.", 4),
(0, "Hey lionsfan123, pick a new team, you guys suck!", 1),
(0, "I heard Ukraine's Handball League is really heating up", 1),
(0, "I wonder if Shaun White will get another gold medal. He's old so probably not", 2);