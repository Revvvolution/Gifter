using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        List<UserProfile> GetAllWithPosts();
        UserProfile GetById(int id);
        UserProfile GetUserProfileByIdWithPosts(int id);
        void Update(UserProfile userProfile);
    }
}