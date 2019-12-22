using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Posts.Any())
            {
                var Posts = new List<Post>
                {
                    new Post {
                    Title = "Long Haired Golden Retriever Puppies",
                    Date = DateTime.Now.AddDays(-10),
                    Body = "Our Dog Betsy just had 10 adorable little puppies. They'll be ready to go home in a couple months so contact us now if you want one! (414)123-4576. "
                    },
                    new Post{
                    Title = "Pomeranian Puppies",
                    Date = DateTime.Now.AddDays(-8),
                    Body = "These cute littles guys and girls will make any family complete. They will weight less than 20lbs as full grown adults and are mild tempered. Feel free to contact us with any questions or concerns. (262)789-0123"
                    },
                    new Post{
                    Title = "Adult English Bulldog",
                    Date = DateTime.Now.AddDays(-6),
                    Body = "Our dog's name is Einstein and he was been a devoted family member for many years. We can hardly bare to part with him but unfortunately our new landlord doesnt allow pets. We're looking for a loving family somewhere in Milwaukee that would be able to care for Einstein. (414)098-7654"    
                    }
                };

            context.Posts.AddRange(Posts);
            context.SaveChanges();
            }   
        }   
    }
}