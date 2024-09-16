using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int id);
        Post GetPostByIdWithComments(int id);
        public List<Post> GetPostsByUserId(int id);
        void Update(Post post);
        public List<Post> Search(string criterion, bool sortDescending);
        public List<Post> Hottest(DateTime criterion);
    }
}