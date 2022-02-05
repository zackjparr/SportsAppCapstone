using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sporsketball.Models
{
    public class SportsTalkDAL
    {

        //CREATE
        public void CreateSportsTalk(SportsTalk st)
        {
            string sql = $"insert into sportstalks values(0, \"{st.PostBody}\", '{st.UserId}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<SportsTalk>(sql);
                connect.Close();
            }
        }

        //READ
        //read list of posts
        public List<SportsTalk> GetSportsTalksList()
        {
            string sql = $"select * from sportstalks";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<SportsTalk> st = connect.Query<SportsTalk>(sql).OrderBy(x => x.UserId).ToList();
                foreach (SportsTalk post in st)
                {
                    string userSql = $"select * from users where userId = {post.UserId}";
                    post.User = connect.Query<User>(userSql).FirstOrDefault();
                }
                connect.Close();
                return st;
            }
        }

        //read post by id
        public SportsTalk GetSportsTalk(int id)
        {
            string sql = $"select * from sportstalks where postId = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                SportsTalk st = connect.Query<SportsTalk>(sql).FirstOrDefault() ;
                connect.Close();
                return st;
            }
        }


        ////UPDATE
        ///for now we are not allowing users to update their post once created
        //public void UpdateSportsTalk(SportsTalk st)
        //{
        //    string sql = $"update sportstalk set username='{u.Username}', `password`='{u.Password}', displayName=\"{u.DisplayName}\", avatar='{u.Avatar}', " +
        //        $"email='{u.Email}', where userId={u.UserId}";
        //    using (var connect = new MySqlConnection(Secret.Connection))
        //    {
        //        connect.Open();
        //        connect.Query<User>(sql);
        //        connect.Close();
        //    }
        //}

        //DELETE
        public void DeleteSportsTalk(int postId) 
        {
            string sql = $"delete from sportstalks where postId = {postId}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<SportsTalk>(sql);
                connect.Close();
            }
        }
    }
}
