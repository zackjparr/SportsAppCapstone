using Dapper;
using MySqlConnector;
using System.Linq;

namespace Sporsketball.Models
{
    public class FavoriteDAL
    {
        //CREATE
        public void CreateFavorite(Favorite f, int userId)
        {
            string favoriteSql = $"insert into favorites values(0, {f.TeamId}, '{f.Thumbnail}', \"{f.TeamName}\")";
                        
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Favorite>(favoriteSql);
                string createSql = $"select * from favorites where teamId = {f.TeamId}";
                Favorite fav = connect.Query<Favorite>(createSql).FirstOrDefault();
                string userSql = $"insert into usersfavorites values(0,{userId},{fav.FaveId})";
                connect.Query<Favorite>(userSql);
                connect.Close();
            }
        }

        //DELETE
        public void DeleteFavorite(int faveId, int userId)
        {
            string userSql = $"delete from usersfavorites where faveId = {faveId} and userId = {userId}";            
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Favorite>(userSql);
                string favSql = $"delete from favorites where faveId = {faveId}";
                connect.Query<Favorite>(favSql);
                connect.Close();
            }
        }
    }
}
