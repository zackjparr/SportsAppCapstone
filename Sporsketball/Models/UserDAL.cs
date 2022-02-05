using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{
    //test git
    public class UserDAL
    {
        //Need to change CurrentUserId to -1
        public static int CurrentUserId = -1;

        SportsDBDal sDAL = new SportsDBDal();

        //CREATE
        public void CreateUser(User u)
        {
            string sql = $"insert into users values(0, '{u.Username}', '{u.Password}', \"{u.DisplayName}\", '{u.Avatar}', '{u.Email}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql); 
                connect.Close();
            }
        }

        //READ
        //returns true if login successful
        public bool Login(User u)
        {
            string sql = $"select * from users where username='{u.Username}' AND `password`='{u.Password}'";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                User user = connect.Query<User>(sql).FirstOrDefault();
                connect.Close();
                if (user != null)
                {
                    CurrentUserId = user.UserId;
                    return true;
                }
                return false;
            }
        }

        //returns user by userId
        public User GetCurrentUser()
        {
            if (CurrentUserId != -1)
            {
                using (var connect = new MySqlConnection(Secret.Connection))
                {
                    string sql = $"select * from users where userId ={CurrentUserId}";
                    connect.Open();
                    User u = connect.Query<User>(sql).FirstOrDefault();
                    if (u != null)
                    {
                       string favoritesSql = $"select * from favorites inner join usersfavorites on favorites.faveId=usersfavorites.faveId where userId={u.UserId}";
                       u.FavoriteTeams = connect.Query<Favorite>(favoritesSql).ToList();
                    }

                    connect.Close();
                    return u;
                }
            }
            return null;
        }

        //UPDATE
        public void UpdateUser(User u)
        {
            string sql = $"update users set username='{u.Username}', `password`='{u.Password}', displayName=\"{u.DisplayName}\", avatar='{u.Avatar}', " +
                $"email='{u.Email}' where userId={u.UserId}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql);
                connect.Close();
            }
        }

        public int LogOut()
        {
            CurrentUserId = -1;
            return CurrentUserId;
        }
    }
}
